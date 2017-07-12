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
     }
  }

}
</script>

<style scoped lang="scss">

</style>

