import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import content from '@/components/pages/content'
import LayoutTest from '@/components/pages/layoutTest'
import Test from '@/components/pages/test'
import mockTest from '@/components/pages/mockTest'
import drag from '@/components/pages/drag'
import html5drag from '@/components/pages/html5_drag/html5drag'
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
            path: 'layoutTest',
            name: 'layoutTest',
            component: LayoutTest
          }
        ]
      },
      {
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
        path: 'drag',
        name: 'drag',
        component: drag
      },
      {
        path: 'html5drag',
        name: 'html5drag',
        component: html5drag
      }
    ]
  }]
})
