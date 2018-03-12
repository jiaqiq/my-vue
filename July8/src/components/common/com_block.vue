<template>
    <div id="box">
        <div class="block">
            <div class="logo-container" :style="dataInfo.logoStyle"></div>
            <div class="info-container">
                <h3 class="title">{{dataInfo.title}}</h3>
                <p class="detail">{{dataInfo.detail}}</p>
            </div>
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
            
        }
    }
}
</script>

<style lang="scss" scoped>
#box {
  .block {
    width: 260px;
    height: 300px;
    border: 1px dashed #666;
    box-sizing: border-box;
    border-radius: 5px;
    .logo-container {
      height: 150px;
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


