<template>
    <div id="box">
        <div class="block">
            <div class="logo-container"></div>
            <div class="info-container">
                <h3 class="title">{{block.title}}</h3>
                <p class="detail">{{block.detail}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            block: {
                title: '模块一',
                detail: '详细内容详细内容详细内容详细内容'
            }
        }
    }
}
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
      background: purple;
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


