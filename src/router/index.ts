/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/login.vue";
import Layout from "../views/layout/index.vue"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
//=====================================model页====================================//
import test from "./model/test";
import home from "./model/home";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "/login"
    },
    //=====================================登录页面====================================//
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    //=====================================404页面====================================//
    {
        path: "/404",
        name: "404",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/error/404.vue")
    },
    //=====================================测试路由====================================//
    {
        path: "/about",
        name: "About",
        //=====================================meta参数说明====================================//
        meta: {
            title: "about", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: false, //------- 是否需要展示为菜单
            isShowTab: false, //------- 是否需要展示在tab上
            isPreClassPath: "/", //------- 上一级菜单路由
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    //=====================================系统逻辑页面====================================//
    {
        path: "/portal",
        component: Layout,
        children: [
            ...test,
            ...home
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

//=====================================全局前置守卫====================================//
router.beforeEach((to, from, next) => {
    NProgress.start()
    Vue.prototype.$handleRouterBarColor();
    if (to.matched.length) {
        next();
    } else {
        next("/404")
    }
})

//=====================================全局后置守卫====================================//
router.afterEach((to, from) => {
    NProgress.done()
})
export default router;
