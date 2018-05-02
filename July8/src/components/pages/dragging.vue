<template>
  <div class="box">
      <div class="demo"> 
        <div class="drag" v-drag.cursor>普通拖拽</div>
      </div>
      <div class="demo2" v-drag.cursor="'#dragable'">
        <div id="dragable"><span>这里可以拖动</span></div>
        <div class="content"><span>这里不可以</span></div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  .drag {
    position: relative;
    top: 100px;
    left: 100px;
    width: 100px;
    height: 100px;
    background: green;
  }

  #dragable {
    top: 0px;
    right: 0px;
    width: 220px;
    height: 50px;
    background: #0fcebd;
    color: #ffffff;
  }
  #dragable span {
    width: 220px;
    line-height: 50px;
  }
  .demo2 {
    position: absolute;
    top: 100px;
    left: 600px;
    z-index: 1111;
    background: red;
  }
  .content {
    width: 220px;
    height: 200px;
  }
}
</style>

