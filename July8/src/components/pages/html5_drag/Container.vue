<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "container"
};
</script>
<style lang="scss" scoped>
.container {
  border: 1px solid #e9eaec;
  width: 1000px;
  height: 500px;
  margin: 10px auto;
  overflow-x: auto;
  padding: 10px;
  box-shadow: 0 6px 15px #ccc;
}
</style>
