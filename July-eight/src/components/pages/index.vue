<template>
  <div id="index">
    <myheader></myheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Myheader from '@/components/common/header'
export default {
  components: {
    Myheader
  }
}
</script>

<style lang="scss" scoped>
  #index {
    height: 100%;
  }
</style>


