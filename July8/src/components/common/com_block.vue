<template>
    <div id="box">
        <div class="block" @click="show">
            <div class="logo-container" :style="'background-image:url('+dataInfo.imgUrl+')'"></div>
            <div class="info-container">
                <h3 class="title">{{dataInfo.title}}</h3>
                <p class="detail">{{dataInfo.detail}}</p>
            </div>
            <!-- <div :style="'background: url('+imgUrl+')'"></div> -->
        </div>
    </div>
</template>

<script>
export default {
  props: {
    dataInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    //   imgUrl: require("../../assets/imgs/1.jpg")
    };
  },
  methods: {
    show() {
      this.$emit("show", this.dataInfo.id);
    }
  }
};
</script>

<style lang="scss" scoped>
#box {
  .block {
    width: 260px;
    height: 300px;
    border: 1px solid #666;
    box-sizing: border-box;
    border-radius: 5px;
    .logo-container {
      height: 150px;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .info-container {
      box-sizing: border-box;
      height: calc(100% - 150px);
      padding: 18px;
      .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
      }
      .detail {
        font-size: 12px;
      }
    }
  }
}
</style>


