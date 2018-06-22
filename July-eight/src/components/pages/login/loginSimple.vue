<template>
	<div class="login-box">
		<div class="login-header"></div>
		<div class="login-wrapper">
			<div class="login-content" v-loading="loading">
				<h1 class="login-content__title">登录</h1>
				<div class="login-form-item iconfont icon-user">
					<input type="text" @keyup.self.enter="login" v-model="username" v-noEmpty placeholder="请输入用户名">
				</div>
				<div class="login-form-item iconfont icon-mima">
					<input type="password" @keyup.self.enter="login" v-model="password" v-noEmpty placeholder="请输入密码">
				</div>
				<div class="login-form-item iconfont icon-yanzhengma login-form-item__verify" v-if="!msgPicFlag">
					<!-- v-model="VerificationCode" -->
					<input type="text" @keyup.self.enter="login" v-noEmpty placeholder="请输入验证码">
					<!-- @click="reloadVerifycode" -->
					<!-- <img :src="verifycode_url" alt="验证码"> -->
				</div>
				<div class="login-form-item iconfont icon-yanzhengma login-form-item__verify" v-if="msgPicFlag">
					<input type="text" @keyup.self.enter="login" v-model="msgCode" v-noEmpty placeholder="请输入短信验证码">
					<el-button type="primary" size="medium" class="get-code" @click="getMsgCode" :disabled="codeFlag">{{codeText}}</el-button>
				</div>
				<div class="btn-submit-wrap">
					<el-button type="primary" @click="login" class="btn-submit">登录</el-button>
				</div>
				<div class="login-content__errMsg">{{errMsg}}</div>
			</div>
		</div>
		<div class="login-footer">
			<div class="login-footer__des">国金证券有限公司 沪ICP备00000000号&nbsp;&nbsp;Copyright © 2017-2018 ShangHai Big data Inc. All Rights Reserved</div>
		</div>
	</div>
</template>

<script>
import userApi from '@/api/user';
// // import GVerify from '../../../../assets/js/gVerify' //验证码插件
// import urlConfig, { svr } from '../../../../api/index'       //api配置文件
// import browserInfo from '../../../../assets/js/browserInfo' //检测浏览器信息
// import encryption from '../../../../assets/js/encryption'  //加密
// window.encryption = encryption;
// import sysService from '@/api/admin_api/sysService'

export default {
	data() {
		return {
			loading: false,
			username: '',           //用户名
			password: '',           //密码
			// verifyCode: '',          //实例化验证码的函数名
			// VerificationCode: '',    //验证码
			// verifycode_url: `${svr}/getVerifyCode?t=${new Date().getTime()}`,
			// termType: '',            //设备类型
			// termId: {},              //设备版本号
			FriendshipLink: [
				{
					href: '#',
					label: '贝格F10'
				},
				{
					href: '#',
					label: '贝格金融数据库'
				},
				{
					href: '#',
					label: '贝格理财产品库'
				},
				{
					href: '#',
					label: '贝格宏观行业库'
				},
				{
					href: '#',
					label: '贝格微财经库'
				},
				{
					href: '#',
					label: '第一财经大数据金融终端'
				},
				{
					href: '#',
					label: '贝格9'
				},
			],
			errMsg: '',
			msgCode: '',
			codeFlag: false,
			codeText: '获取验证码',


			msgPicFlag: false   //true短信验证码
		}
	},
	directives: {
        /**
         *input不能为空的指令 v-noEmpty 
         */
		noEmpty: {
			inserted: function (el) {
				el.addEventListener('focus', function () {
					el.parentNode.style.borderColor = '#20a0ff';
				});
				el.addEventListener('blur', function () {
					if (el.value == '') {
						el.parentNode.style.borderColor = '#f66';
					} else {
						el.parentNode.style.borderColor = '';
					}
				});
			}
		}
	},
	// beforeRouteEnter(to, from, next) {

	// 	if (Cookies.get('token')) {
	// 		next('/index');
	// 	} else {
	// 		next();
	// 	}
	// },
	// created() {
	// 	//type === false 内网
	// 	this.getIp().then(res => {
	// 		//   
	// 		this.msgPicFlag = res.data.type
	// 	});
	// },
	// mounted() {

	// 	this.resetPage();
    //     /**
    //      * 检测浏览器信息
    //      */
	// 	browserInfo
    //     /**
    //      * 设备类型
    //      */
	// 	for (var item in window.F_BROWER.client) {
	// 		if (window.F_BROWER.client[item] !== null) {
	// 			this.termType = item
	// 		}
	// 		// console.log(window.F_BROWER.client[item]);
	// 	}
    //     /**
    //      * 设备系统及版本号
    //      */
	// 	for (var item in window.F_BROWER.os) {
	// 		if (window.F_BROWER.os[item] !== null) {
	// 			this.termId[item] = window.F_BROWER.os[item];
	// 		}
	// 	}
    //     /**
    //      *初始化验证码 
    //      */
	// 	// this.verifyCode = new GVerify({
	// 	//     id: 'v_container',
	// 	//     height: '38'
	// 	// });
    //     /**
    //      * 检测是否登陆，如果已经登陆就默认跳转到主页
    //      */

	// },
	methods: {
		// async getIp() {
		// 	let res = await this.$http.post(`${svr}/getIp`)
		// 	return res;
		// },
		// resetPage() {
		// 	document.querySelectorAll('.el-dialog__wrapper').forEach(item => document.body.removeChild(item))
		// },

		login() {
            /**登录验证 */
			document.activeElement.blur();
			// 验证
			if (!this.username) {
				this.errMsg = '请输入用户名';
				return;
			}
			if (!this.password) {
				this.errMsg = '请输入密码';
				return;
			}
			// if (this.msgPicFlag) {
			// 	if (!this.msgCode) {
			// 		this.errMsg = '请输入短信验证码';
			// 		return;
			// 	}
			// } else {
			// 	if (!this.VerificationCode) {
			// 		this.errMsg = '请输入验证码';
			// 		return;
			// 	}
			// }
			// this.loading = true;
			this.errMsg = '';

			// let data = {
			// 	account: this.username,
			// 	password: this.password,
			// 	// verifycode: this.msgPicFlag ? this.msgCode : this.VerificationCode,
			// 	// verifyType: this.msgPicFlag ? 'SMS' : 'PIC',
			// 	// termId: JSON.stringify(this.termId),
			// 	// termType: 'PC',
			// 	// token: ''
			// }
			let data = {
				username: this.username,
				password: this.password
			}
			userApi.login(data).then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
			// let config = urlConfig('login', '', '', data);
			// this.$http.post(`${svr}/login`/*config.url*/, { jsonparams: JSON.stringify(data) } /*config.jsonData*/, { withCredentials: true }).then((res) => {

			// 	if (res.data.statusCode === "200") {
			// 		// sysService.addUserMenuClickLog('login', 'PC');
			// 		let data = JSON.stringify({
			// 			userName: res.data.result.USERNAME,
			// 			tokenId: res.data.result.OBJID,
			// 			account: res.data.result.ACCOUNT,
			// 			orgName: res.data.result.ORGUNIT_NAME,
			// 			stationName: res.data.result.STATION_NAME,
			// 			roles: res.data.result.ROLE,
			// 			stations: `${res.data.result.SECOND}#,@_${res.data.result.STATION_ID}-${res.data.result.STATION_NAME}-${res.data.result.ORGUNIT_ID}-${res.data.result.ORGUNIT_NAME}`,                //岗位id_岗位名称_部门id_部门名称   最后一个是主岗
			// 			objType: res.data.result.OBJTYPE,
			// 			certNum: res.data.result.CERT_NUM,
			// 		});
			// 		Cookies.set('token', data)
			// 		// this.$router.push('index');
			// 		document.location.reload(true);
			// 	} else {
			// 		// this.reloadVerifycode();
			// 		// this.VerificationCode = '';
			// 		this.loading = false;
			// 		this.$tip({
			// 			type: 'warning',
			// 			message: res.data.msg//res.data.msg//'用户名或密码错误！'
			// 		})

			// 	}

			// }).catch((res) => {
			// 	this.loading = false;
			// 	this.$tip({
			// 		type: 'error',
			// 		message: `后台服务出错，状态码：${res.data.statusCode}`
			// 	})
			// })
		},
		// getMsgCode() {
		// 	//获取短信验证码
		// 	if (this.codeFlag) { return };
		// 	// 验证
		// 	if (!this.username) {
		// 		this.errMsg = '请输入用户名';
		// 		return;
		// 	}
		// 	if (!this.password) {
		// 		this.errMsg = '请输入密码';
		// 		return;
		// 	}
		// 	this.codeFlag = true;
		// 	let time = 60;
		// 	let data = {
		// 		verifyType: "SMS",
		// 		account: this.username,
		// 		password: this.password
		// 	}
		// 	let config = urlConfig('login', '', '', data);
		// 	//   
		// 	this.$http.post(`${svr}/getVerifyCode`, config.jsonData).then((res) => {
		// 		if (res.data.statusCode === "200") {
		// 			this.codeFlag = true;
		// 			let interval = setInterval(_ => {
		// 				time--; this.codeText = time + 's';
		// 				if (time === 0) {
		// 					this.codeFlag = false;
		// 					this.codeText = '获取验证码';
		// 					clearInterval(interval);
		// 				}
		// 			}, 1000);
		// 		} else {
		// 			this.codeFlag = false;
		// 			this.$tip({
		// 				type: 'warning',
		// 				message: '获取验证码失败'//res.data.msg//'用户名或密码错误！'
		// 			})
		// 		}
		// 	}).catch((res) => {
		// 		this.codeFlag = false;
		// 		this.$tip({
		// 			type: 'error',
		// 			message: `后台服务出错，状态码：${res.data.statusCode}`
		// 		})
		// 	})
		// },

		// reloadVerifycode() {
		// 	this.verifycode_url = `${svr}/getVerifyCode?t=${new Date().getTime()}`;
		// }
	}
};
</script>

<style lang="scss" scoped>
@import "./scss/index1.scss";
</style>

