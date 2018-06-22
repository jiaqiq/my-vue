<template>
    <div class="login-box">
        <div class="login-header"></div>
        <div class="login-wrapper">
            <el-form ref="form" class="login-content">
                <h1 class="login-content__title">登录</h1>
                <div class="login-form-item icon-user">
                    <input type="text"  @keyup.self.enter="login" v-model="username" v-noEmpty placeholder="请输入用户名">
                </div>
                <div class="login-form-item icon-password">
                    <input type="password" @keyup.self.enter="login" v-model="password" v-noEmpty placeholder="请输入密码">
                </div>
                <div class="login-form-item__verify__wrap">
                    <div class="login-form-item login-form-item__verify icon-verify">
                        <input type="text" @keyup.self.enter="login" v-model="VerificationCode" v-noEmpty placeholder="请输入验证码">
                    </div>
                    <div id="v_container"></div>
                </div>
                <div class="btn-submit-wrap">
                    <el-button type="primary" @click="login" class="btn-submit">登录</el-button>
                </div>
            </el-form>
        </div>
        <div class="login-footer">
            <div class="login-footer__left">
                <div class="login-footer__content login-footer__left__content">
                    <ul class="shortcutlinks">
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">关于我们</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">联系我们</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">公司新闻</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">使用协议</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">版权声明</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">开放平台</a>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                    <p>国金证券有限公司 沪ICP备00000000号</p>
                    <p>Copyright © 2017-2018 ShangHai Big data Inc. All Rights Reserved</p>
                </div>
            </div>
            <div class="login-footer__right">
                <div class="login-footer__content login-footer__right__content">
                    <p class="friendshiptitle">友情链接</p>
                    <ul class="shortcutlinks">
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">贝格F10</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">贝格金融数据库</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">贝格理财产品库</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">贝格宏观行业库</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">贝格微财经库</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">第一财经大数据金融终端</a>
                        </li>
                        <li class="shortcutlink">
                            <a href="javascript:void(0);">贝格9</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// // import GVerify from '../../../../assets/js/gVerify' //验证码插件
// import urlConfig from '@/api/index'       //api配置文件
// import browserInfo from '@/assets/js/browserInfo' //检测浏览器信息
// import encryption from '@/assets/js/encryption'  //加密
// window.encryption = encryption;

// export default {
//     data() {
//         return {
//             username: '',           //用户名
//             password: '',           //密码
//             // verifyCode: '',          //实例化验证码的函数名
//             VerificationCode: '',    //验证码
//             termType: '',            //设备类型
//             termId: {},              //设备版本号
//             FriendshipLink: [
//                 {
//                     href: '#',
//                     label: '贝格F10'
//                 },
//                 {
//                     href: '#',
//                     label: '贝格金融数据库'
//                 },
//                 {
//                     href: '#',
//                     label: '贝格理财产品库'
//                 },
//                 {
//                     href: '#',
//                     label: '贝格宏观行业库'
//                 },
//                 {
//                     href: '#',
//                     label: '贝格微财经库'
//                 },
//                 {
//                     href: '#',
//                     label: '第一财经大数据金融终端'
//                 },
//                 {
//                     href: '#',
//                     label: '贝格9'
//                 },
//             ],

//         }
//     },
//     directives: {
//         /**
//          *input不能为空的指令 v-noEmpty 
//          */
//         noEmpty: {
//             inserted: function (el) {
//                 el.addEventListener('focus', function () {
//                     el.parentNode.style.borderColor = '#20a0ff';
//                 });
//                 el.addEventListener('blur', function () {
//                     if (el.value == '') {
//                         el.parentNode.style.borderColor = '#f66';
//                     } else {
//                         el.parentNode.style.borderColor = '';
//                     }
//                 });
//             }
//         }
//     },
//     mounted() {
//         /**
//          * 检测浏览器信息
//          */
//         browserInfo
//         /**
//          * 设备类型
//          */
//         for (var item in window.F_BROWER.client) {
//             if (window.F_BROWER.client[item] !== null) {
//                 this.termType = item
//             }
//             // console.log(window.F_BROWER.client[item]);
//         }
//         /**
//          * 设备系统及版本号
//          */
//         for (var item in window.F_BROWER.os) {
//             if (window.F_BROWER.os[item] !== null) {
//                 this.termId[item] = window.F_BROWER.os[item];
//             }
//         }
//         /**
//          *初始化验证码 
//          */
//         // this.verifyCode = new GVerify({
//         //     id: 'v_container',
//         //     height: '38'
//         // });
//         /**
//          * 检测是否登陆，如果已经登陆就默认跳转到主页
//          */
//         if (Cookies.get('token')) {
//             this.$router.replace('/index');
//         }
//     },
//     methods: {
//         /**
//          * 登陆验证
//          */
//         login() {
//             document.activeElement.blur();
//             // var res = this.verifyCode.validate(this.VerificationCode);
//             // if (res) {
//             let data = {
//                 account: this.username,
//                 password: this.password,
//                 verifycode: this.VerificationCode,
//                 termId: JSON.stringify(this.termId),
//                 termType: this.termType,
//                 token: ''
//             }
//             let config = urlConfig('login', '', '', data);
//             this.$http.post('/nodesvr/login'/*config.url*/, config.jsonData).then((res) => {
            
//                 if (res.data.statusCode === "200") {
//                     let data = JSON.stringify({
//                         userName: res.data.result.USERNAME,
//                         tokenId: res.data.result.OBJID,
//                         account: this.username,
//                         orgName: res.data.result.ORGUNIT_NAME,
//                         stationName: res.data.result.STATION_NAME,
//                         stations: `${res.data.result.SECOND}#,@_${res.data.result.STATION_ID}-${res.data.result.STATION_NAME}-${res.data.result.ORGUNIT_ID}-${res.data.result.ORGUNIT_NAME}`                //岗位id_岗位名称_部门id_部门名称   最后一个是主岗
//                     });
//                     Cookies.set('token', data)

//                     this.$router.push('index');
//                 } else {
//                     this.$tip({
//                         type: 'warning',
//                         message: '用户名或密码错误！'
//                     })
//                 }
//             }).catch((res) => {
//                 this.$tip({
//                     type: 'error',
//                     message: `后台服务出错，状态码：${res.data.statusCode}`
//                 })
//             })
//             // } else {
//             //     this.$message.error('验证码错误请重新输入！');
//             // }
//         },
//     }
// };
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>

