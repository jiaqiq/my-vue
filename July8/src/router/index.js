import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import HomeContent from '@/components/pages/homeContent'
import LayoutTest from '@/components/pages/layoutTest'
import Test from '@/components/pages/test'
import mockTest from '@/components/pages/mockTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'homeContent',
          name: 'homeContent',
          component: HomeContent
        },
        {
          path: 'layoutTest',
          name: 'layoutTest',
          component: LayoutTest
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
        }
      ]
    }
  ]
})
