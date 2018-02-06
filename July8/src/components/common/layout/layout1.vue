<template>
    <div class="box">
        <div class="layout">
            <el-row :gutter="gutter">
                <el-col :span="span_l">
                    <slot name="layout_l"></slot>
                </el-col>
                <el-col :span="span_r">
                    <slot name="layout_r"></slot>
                </el-col>
            </el-row>
        </div>
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
            default: 12
        },
        span_r: {
            type: Number,
            default: 12
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.box {
  .layout {
      
  }
}
</style>


