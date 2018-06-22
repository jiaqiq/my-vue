import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import content from '@/components/pages/content'
import layoutManage from '@/components/pages/layoutManage'
import Test from '@/components/pages/test'
import dragging from '@/components/pages/dragging'
import drag from '@/components/pages/html5_drag/drag'
import home from '@/components/pages/home'
// import login from '@/components/common/login'
// const Login = () => import ('../components/Customer/pages/login/index1');
import login from '@/components/pages/login/loginSimple'
import linkage from '@/components/pages/linkage/index'
//error
const notFound = () => import ('@/components/pages/error/404');
const noPower = () => import ('@/components/pages/error/403');

Vue.use(Router)

  let defaultRoutes = [{
      path: '/',
      name: 'root',
      redirect: 'login'
    }, {
      path: '/login',
      name: 'login',
      meta: {
        // requireLogin: true   /** 路由元信息 meta 添加该字段，表示进入这个路由是需要登录的 */
        power: true
      },
      component: login
    }, {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/index/content/home',
      children: [{
        path: 'content',
        name: 'content',
        component: content,
        children: [{
            path: 'home',
            name: 'home',
            component: home
          }, 
          {
            path: 'layoutManage',
            name: 'layoutManage',
            component: layoutManage,
            children: [{
                path: 'test',
                name: 'test',
                component: Test
              },
              {
                path: 'dragging',
                name: 'dragging',
                component: dragging
              },
              {
                path: 'drag',
                name: 'drag',
                component: drag
              },
              {
                path: 'linkage',
                name: 'linkage',
                component: linkage
              },
              {
                path: '*',
                name: '404',
                meta: {
                  label: '404',
                  power: true
                },
                component: notFound
              },
              {
                path: '403',
                name: '403',
                meta: {
                  label: '403',
                  power: true
                },
                component: noPower
              }
            ]
          }
        ]
      }]
    }]

    export {
      defaultRoutes
    }