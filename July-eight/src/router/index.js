
// const Router = VueRouter;
import Router from 'vue-router'
import { defaultRoutes } from './routes'
import Vue from 'vue'

Vue.use(Router)

let router = new Router({
	routes: defaultRoutes,
})

router.beforeEach((to, from, next) => {
	// NProgress.start();

	if (to.path === '/login') {
		next();
	} else {
		if (Cookies.get('token') === undefined) {
			next('/login');
		} else if (!!to.meta['power']) { //!!to.meta['power']
			//在动态加载路由的情况下，刷新页面后，路由权限的加载比路→跳转慢，导致用户刷新页面后，因为没权限跳转至首页
			next();
		} else if (!to.name) {
			// 路由数据没加载
			$bus.$on('loaded-routes', () => {
				next(to);
			});
		} else {
			next({
				name: '403'
			});
		}
	}
});
router.afterEach((to, from) => {
	// NProgress.done();
});

export default router
