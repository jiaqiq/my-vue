<template>
    <div class="noPower">
        <div class="noPower-main">
            <div class="noPower-main__imgBlock">
                <div class="imgBlock__ele">
                </div>
            </div>
            <div class="noPower-main__content">
                <h1>403</h1>
                <div class="content__desc">
                    {{info}}
                </div>
                <div class="content__action">
                    <el-button type="primary" size="medium" @click="goHome">返回首页</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        info:{
            type:String,
            default:'抱歉，你无权访问该页面！'
        }
        
    },
    methods:{
        goHome() {
            this.$router.replace('/index')
        }
    }
}
</script>

<style lang="scss" scoped>
    .noPower{
        height:100%;
        margin:24px 24px 0;
        &-main{
            min-height:500px;
            height:80%;
            display: flex;
            align-items:center;
            &__imgBlock{
                flex: 0 0 50%;
                width: 62.5%;
                padding-right: 88px;
                zoom: 1;

            }
            &__content{
                flex:auto;
                h1{
                    color: #434e59;
                    font-size: 72px;
                    font-weight: 600;
                    line-height: 72px;
                    margin-bottom: 24px;
                }

            }
        }
    }
    .imgBlock__ele{
        background-image:url('~@/assets/img/403.svg');
        height: 360px;
        width: 100%;
        max-width: 430px;
        float: right;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
    }
    .content__desc{
        color: rgba(0,0,0,.45);
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 16px;
    }
</style>
