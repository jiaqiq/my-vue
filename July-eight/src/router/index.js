import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import content from '@/components/pages/content'
import layoutManage from '@/components/pages/layoutManage'
import Test from '@/components/pages/test'
import dragging from '@/components/pages/dragging'
import drag from '@/components/pages/html5_drag/drag'
import home from '@/components/pages/home'
import login from '@/components/common/login'
import register from '@/components/common/register'

Vue.use(Router)

export default new Router({

  routes: [{
      path: '/',
      name: 'Index',
      // 路由元信息 meta
      meta: {
        requireLogin: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Index,
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
            ]
          }
        ]
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]

})
