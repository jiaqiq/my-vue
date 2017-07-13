<template>
  <div class="box">
    <el-row>
      <el-col :span="6">
        <!-- 同步改变 -->
        <el-input type="text" v-model="a" placeholder="请输入内容"></el-input>
        <!-- 当失去焦点后改变 -->
        <el-input type="text" v-model.lazy="msg"></el-input>
        <!-- 首位空格过滤 -->
        <el-input type="text" v-model.trim="msg"></el-input>
        <el-button @click="plus" type="primary">count</el-button>
        <span>{{ msg }}</span>

        <div class="block">
          <el-pagination layout="prev, pager, next" :total="500">

          </el-pagination>
        </div>
        <el-button :plain="true" @click="open">Message消息提示</el-button>
        <el-button :plain="true" @click="open2">Message消息提示2</el-button>
        <el-button :plain="true" @click="open3">Message消息提示3</el-button>
        <el-button :plain="true" @click="open4">Message消息提示4</el-button>
        <el-button :plain="true" @click="open5">Notification消息通知</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'msg',
      a: 1,
      b: 2,
      c: {
        'k1': 11,
        'k2': 22
      }
    }
  },
  watch: {
    a: {
      handler: function (val, oldVal) {
        console.log(val, oldVal)
      },
      deep: true
    }
  },
  methods: {
    plus(a) {
      this.a++
      console.log(this.a)
    },
    open() {
      this.$message('this is a message!')
    },
    open2() {
      this.$message.success({
        message: "this is a success message!",
        // type: "success"
      });
    },
    open3() {
      this.$message({
        duration: 0,
        showClose: true,
        message: "this is a warning message!",
        type: "warning"
      });
    },
    open4() {
      this.$message({
        showClose: true,
        message: "this is error message!",
        type: "error"
      });
    },
    open5() {
      const h = this.$createElement;

      console.log(this.$notify)

      this.$notify({
        title: "提示",
        message: h('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      })
    }
  }

}
</script>

<style scoped lang="scss">

</style>

