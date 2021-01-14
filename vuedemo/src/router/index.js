import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import img_preview from "../plugins/img_preview.vue"


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: "/",
      name: "home_index",
      component: () => import("@/pages/index")
    },
    // {
    //   path: "/demo/index",
    //   name: "demo_index",
    //   component: () => import("@/pages/demo/index")
    // },

    {
      path: "/test",
      name: "calendar_test",
      component: () => import("@/pages/demo/calendar")
    },
    {
      path: '/img',
      name: 'img_preview',
      component: img_preview
    }
  ]
})
