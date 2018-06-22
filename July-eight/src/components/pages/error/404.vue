<template>
  <div class="wrapper">
      <div class="imgBox">
        <img src="@/assets/img/404.png" alt="">
        <div class="backInfo">
          <h6 class="backInfo_title">啊哦~一不小心闯进未知领域, 请点击下面的按钮返回首页......</h6>
          <button class="backInfo_button" @click="backHome">返回首页</button>
        </div>        
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    backHome() {
      this.$router.replace({name:'index'})
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrapper{
    height: 100%;
    background: #ffffff;
    margin:0 -10px;
    .imgBox{
      height: 100%;
      position: relative;
      // background:url(../../../../assets/img/404.png) no-repeat center 20%;
      display: flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      img{
        display: block;
      }
      .backInfo{
        margin-top:35px;
        text-align: center;
        &_title{
          color:#5d5d5d;
          font-size:16px;
        }
        &_button{
          margin-top:40px;
          height: 50px;
          width:148px;
          background-color: #759aff;
          font-size:18px;
          color:#fff;
          border:none;
          border-radius: 4px;
          cursor:pointer;
          // margin:0 auto;
        }
        // position: absolute;
        // bottom:30px;
        // left: 50%;
        // transform: translateX(-50%);
      }
    }
  }
</style>

