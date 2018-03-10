import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Viewer from '@/components/Viewer'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/viewer.html',
      name: 'Viewer',
      component: Viewer
    },
    {
      path: '/config.html',
      name: 'Config',
      component: Config
    }
  ]
})
