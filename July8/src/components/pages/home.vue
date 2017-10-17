<template>
  <div class="box">
    <myheader></myheader>
    <test ref="test"></test>
  </div>
</template>

<script>
import myheader from '../common/header'
import test from '../common/test'
export default {
  components: {
    myheader, test
  },
  mounted: function() {
    console.log(this.$refs.test.c)
  }
}
</script>

<style lang="scss" scoped>

</style>


