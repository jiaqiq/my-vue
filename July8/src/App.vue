<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  ::-webkit-scrollbar {
    /* 滚动条整体部分 */
    width: 10px;
    margin-right: 2px;
  }
  ::-webkit-scrollbar-button {
    /* 滚动条两端的按钮 */
    width: 10px;
    background-color: yellow;
    display: none;
  }
  ::-webkit-scrollbar:horizontal {
    height: 10px;
    margin-bottom: 2px;
  }
  ::-webkit-scrollbar-track {
    /* 外层轨道 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track-piece {
    /*内层轨道，滚动条中间部分 */
    background-color: #333333;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    /* 滑块 */
    width: 10px;
    border-radius: 5px;
    background: #cbcbcb;
  }
  ::-webkit-scrollbar-corner {
    /* 边角 */
    width: 10px;
    background-color: red;
  }
  ::-webkit-scrollbar-thumb:hover {
    /* 鼠标移入滑块 */
    background: #909090;
  }
}
* {
  margin: 0;
  padding: 0;
}
</style>
