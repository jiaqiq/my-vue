<template>
    <div id="colorBox">
        <el-dialog
        center
        :visible.sync="themeDialogVisible"
        title="切换主题色"
        width="400px">
        <el-form
            :model="colors"
            :rules="rules"
            ref="form"
            class="theme-form"
            label-position="top"
            label-width="70px">
            <el-form-item label="主题色" prop="primary">
            <el-color-picker v-model="colors.primary" ></el-color-picker>
            </el-form-item>
            <el-form-item class="color-buttons">
            <el-button type="primary" @click="submitForm">切换</el-button>
            <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
        </el-dialog>
    </div>
</template>

<script>
import generateColors from "@/utils/color";
import objectAssign from "object-assign";
export default {
  props: {
    colorDialog: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    colorDialog: function(val) {
      this.themeDialogVisible = true;
    }
  },
  data() {
    const colorValidator = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("主题色不能为空"));
      } else if (!/^#[\dabcdef]{6}$/i.test(value)) {
        return callback(new Error("请输入 hex 格式的主题色"));
      } else {
        callback();
      }
    };
    return {
      colors: {
        primary: "#409eff"
      },
      rules: {
        primary: [{ validator: colorValidator, trigger: "blur" }]
      },
      themeDialogVisible: false,
      primaryColor: "#409eff",
      originalStylesheetCount: -1,
      originalStyle: "",
      // langConfig,
      // tableData,
      themeDialogVisible: false,
      helpDialogVisible: false,
      zip: null,
      styleFiles: [],
      fontFiles: ["element-icons.ttf", "element-icons.woff"],
      fonts: [],
      canDownload: false,
      query: {
        name: "",
        date: []
      }
    };
  },
  created() {
    this.getIndexStyle();
    this.getSeparatedStyles();
    this.getFontFiles();
  },
  mounted() {
    this.$nextTick(() => {
      this.originalStylesheetCount = document.styleSheets.length;
    });
  },
  methods: {
      writeNewStyle() {
      let cssText = this.originalStyle;
      Object.keys(this.colors).forEach(key => {
        cssText = cssText.replace(
          new RegExp("(:|\\s+)" + key, "g"),
          "$1" + this.colors[key]
        );
      });

      if (this.originalStylesheetCount === document.styleSheets.length) {
        const style = document.createElement("style");
        style.innerText = cssText;
        document.head.appendChild(style);
      } else {
        document.head.lastChild.innerText = cssText;
      }
    },
     submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.themeDialogVisible = false;
          this.primaryColor = this.colors.primary;
          this.colors = objectAssign(
            {},
            this.colors,
            generateColors(this.colors.primary)
          );
          this.canDownload = true
          this.writeNewStyle();
          this.$emit('bgColor', this.primaryColor);
        } else {
          return false;
        }
      });
    },
    getFile(url, isBlob = false) {
      return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        client.responseType = isBlob ? "blob" : "";
        client.onreadystatechange = () => {
          if (client.readyState !== 4) {
            return;
          }
          if (client.status === 200) {
            const urlArr = client.responseURL.split("/");
            resolve({
              data: client.response,
              url: urlArr[urlArr.length - 1]
            });
          } else {
            reject(new Error(client.statusText));
          }
        };
        client.open("GET", url);
        client.send();
      });
    },
    getStyleTemplate(data) {
      const colorMap = {
        "#3a8ee6": "shade-1",
        "#409eff": "primary",
        "#53a8ff": "light-1",
        "#66b1ff": "light-2",
        "#79bbff": "light-3",
        "#8cc5ff": "light-4",
        "#a0cfff": "light-5",
        "#b3d8ff": "light-6",
        "#c6e2ff": "light-7",
        "#d9ecff": "light-8",
        "#ecf5ff": "light-9"
      };
      Object.keys(colorMap).forEach(key => {
        const value = colorMap[key];
        data = data.replace(new RegExp(key, "ig"), value);
      });
      return data;
    },
    getIndexStyle() {
      this.getFile("//unpkg.com/element-ui/lib/theme-chalk/index.css").then(
        ({ data }) => {
          this.originalStyle = this.getStyleTemplate(data);
        }
      );
    },
    getSeparatedStyles() {
      this.getFile("//unpkg.com/element-ui/lib/theme-chalk/")
        .then(({ data }) => {
          return data
            .match(/href="[\w-]+\.css"/g)
            .map(str => str.split('"')[1]);
        })
        .then(styleFiles => {
          return Promise.all(
            styleFiles.map(file => {
              return this.getFile(
                `//unpkg.com/element-ui/lib/theme-chalk/${file}`
              );
            })
          );
        })
        .then(files => {
          this.styleFiles = files.map(file => {
            return {
              name: file.url,
              data: this.getStyleTemplate(file.data)
            };
          });
        });
    },
    getFontFiles() {
      Promise.all(
        this.fontFiles.map(font => {
          return this.getFile(
            `//unpkg.com/element-ui/lib/theme-chalk/fonts/${font}`,
            true
          );
        })
      ).then(fonts => {
        this.fonts = fonts;
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>