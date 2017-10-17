<template>
  <div class="box">
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="item" :class="{'active':ind === index}" @mouseenter="changeBgc(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['苹果', '香蕉', '菠萝', '芒果'],
      ind: ''
    }
  },

  methods: {
    changeBgc: function(index) {
      this.ind = index
    }
  }

}
</script>

<style scoped lang="scss">
.box {
  .active {
    height: 100%;
    background: green;
  }
  .list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    width: 400px;
    height: 50px;
    background: purple;
    .item {
      flex: 1;
    }
  }
}
</style>

