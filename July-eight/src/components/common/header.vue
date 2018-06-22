<template>
  <div id="header">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router :background-color="bgColor">
      <el-menu-item index="0" :route="{ path:'/content/home' }">首页</el-menu-item>
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
      <el-menu-item index="4" :route="{ path:'/content/layoutManage' }">项目管理</el-menu-item>
      <el-menu-item index="" @click="showThemeDialog">切换主题色</el-menu-item>
      <el-menu-item index="" @click="signout">退出</el-menu-item>
    </el-menu>
    <color-box :colorDialog="showColorDialog" @bgColor="bgColorFun"></color-box>
  </div>
</template>

<script>
import content from '@/components/pages/content'
import Test from '@/components/pages/test'
import colorBox from '@/components/common/dialog/colorBox'
export default {
  components: {
    content,
    Test,
    colorBox
  },
  data() {
    return {
      activeIndex: '0',
      showColorDialog: false,
      bgColor: '#fff'
    };
  },
  methods: {
    bgColorFun(val) {
      this.bgColor = val;
    },
    handleSelect(key, keyPath) {
      console.log('key, keyPath', key, keyPath)
    },
    showThemeDialog () {
        this.showColorDialog = !this.showColorDialog;
    },
    signout() {
      Cookies.remove('token');
			// sessionStorage.clear();
			this.$router.push({ path: '/login' });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

