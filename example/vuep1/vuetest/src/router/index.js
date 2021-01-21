import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

const router = new Router({
    mode: "history",
    base: "/",
    routes: [
        {
            path: '/',
            name: 'index',
            component: ()=>import('../pages/home/index'),
        },
        {
            path:'/bus/ca',
            name:'bus_ca',
            component:()=>import("../pages/eventBus/bus_a.vue")
        },
        {
            path:'/bus/cb',
            name:'bus_cb',
            component:()=>import("../pages/eventBus/bus_b.vue")
        },
    ]
})


export default router