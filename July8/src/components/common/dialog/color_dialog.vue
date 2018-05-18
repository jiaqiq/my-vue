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
  import generateColors from '@/utils/color'
  import objectAssign from 'object-assign'
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
          return callback(new Error('主题色不能为空'))
        } else if (!/^#[\dabcdef]{6}$/i.test(value)) {
          return callback(new Error('请输入 hex 格式的主题色'))
        } else {
          callback()
        }
      }
    return {
        colors: {
          primary: '#409eff'
        },
        rules: {
          primary: [
            { validator: colorValidator, trigger: 'blur' }
          ]
        },
        themeDialogVisible: false,
        primaryColor: '#409eff',
    }
},
methods: {
       submitForm () {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.themeDialogVisible = false
            this.primaryColor = this.colors.primary
            this.colors = objectAssign({}, this.colors, generateColors(this.colors.primary))

            // this.canDownload = true
            // this.writeNewStyle()
          } else {
            return false
          }
        })
      },
       resetForm () {
        this.$refs.form.resetFields()
      },

}
}
</script>