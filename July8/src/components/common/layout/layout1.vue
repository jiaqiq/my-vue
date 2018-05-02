<template>
    <div id="layout1">
        <el-row :gutter="gutter" class="span_row">
            <el-col :span="span_l" class="span_l">
                <slot name="layout_l"></slot>
            </el-col>
            <el-col :span="span_r" class="span_r">
                <el-row>
                    <el-col>
                        <slot name="layout_r"></slot>
                    </el-col>
                </el-row>
                <el-row class="span_rf">
                    <el-col>
                        <slot name="layout_rf"></slot>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    span_l: {
      type: Number,
      default: 5
    },
    span_r: {
      type: Number,
      default: 19
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#layout1 {
  height: 100%;
  //   background: blueviolet;
  .span_row {
    height: 100%;
    //   background: blue;
  }
  .span_l,
  .span_r,
  .span_rf {
    // border: 1px solid #666;
  }
  .span_l {
    height: 100%;
    //   background: yellow;
  }
  .span_r {
    height: 100%;
    background: #fafafa;
    position: relative;
    .span_rf {
      // background: #ccc;
      height: 50px;
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>


