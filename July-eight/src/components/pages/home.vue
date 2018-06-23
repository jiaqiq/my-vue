<template>
  <div id="home">
      <div class="main">
        <el-row v-for="block in blocks" :key="block.items.title">
            <el-col class="lay" v-for="item in block.items" :key="item.title">
                <block class="block" :dataInfo="item" @show="show"></block>
            </el-col>
        </el-row>
       <dialog1 :show="dialogShow"></dialog1>
      </div> 
  </div>
</template>

<script>
import Block from "@/components/common/com_block";
import Dialog1 from "@/components/common/dialog/dialog1";
export default {
  components: {
    Block,
    Dialog1
  },
  data() {
    return {
      dialogShow: false,
      blocks: []
    };
  },
  mounted() {
    this.getBlocks();
  },

  methods: {
    show(id) {
      if (id === 1) {
        this.dialogShow = !this.dialogShow;
      }
    },
    getBlocks() {
      this.$http.get("static/mockJson/blocks.json").then(res => {
        console.log(res);
        this.blocks = res.data.blocks;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
    height: calc(100% - 61px);
    overflow: auto;
  .main {
      height: auto;
      width: 90%;
      margin: 0 auto;
      // background: red;
  }
  .block {
    // display: inline-block;
    padding: 10px;
  }
  .lay {
    width: 20%;
  }
}
</style>

 
