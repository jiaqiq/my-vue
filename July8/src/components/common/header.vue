<template>
  <div class="box">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="0" :route="{ path:'/homeContent' }">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">学习网站</template>
        <el-menu-item index="1-1">
          <a href="https://cn.vuejs.org/" target="_blank">Vue官网</a>
        </el-menu-item>
        <el-menu-item index="1-2">
          <a href="http://element.eleme.io" target="_blank">Element-UI</a>
        </el-menu-item>
        <el-menu-item index="1-3">
          <a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank">Flex</a>
        </el-menu-item>
        <el-menu-item index="1-4">
          <a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank">Flex实例</a>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2" :route="{ path:'/test' }">测试</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import HomeContent from '@/components/pages/homeContent'
import Test from '@/components/pages/test'
export default {
  components: {
    HomeContent,
    Test
  },
  data() {
    return {
      activeIndex: '0',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('key, keyPath', key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

