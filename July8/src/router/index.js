import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import content from '@/components/pages/content'
import layoutManage from '@/components/pages/layoutManage'
import Test from '@/components/pages/test'
import mockTest from '@/components/pages/mockTest'
import dragging from '@/components/pages/dragging'
import drag from '@/components/pages/html5_drag/drag'
import home from '@/components/pages/home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
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
              path: 'mockTest',
              name: 'mockTest',
              component: mockTest
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
            }
          ]
        }
      ]
    }]
  }]
})
