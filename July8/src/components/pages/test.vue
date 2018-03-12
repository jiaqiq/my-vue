<template>
    <div class="box">
        <left-nav style="margin-top:5px;"></left-nav>
    </div>
</template>

<script>
import leftNav from '@/components/common/leftNav';

export default {
    components: {
        leftNav
    },
    data() {
       return {
           
       }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
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


