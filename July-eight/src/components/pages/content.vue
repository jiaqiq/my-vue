<template>
  <div id="content">
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
#content {
  height: calc(100% - 60px);
  // background: green;
  // overflow: auto;
}
</style>

