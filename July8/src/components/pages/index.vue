<template>
  <div class="box">
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

</style>


