/* eslint-disable no-unused-vars */
/* 
    @description  首页
    @autor        cheng liang
    @create       2020-09-24 14:35"
    @params       
    @return       
*/
import { RouteConfig } from "vue-router";

const test: Array<RouteConfig> = [
    {
        path: "testA",
        name: "testA",
        component: () =>
            import("@/views/model/test/testA.vue"),
        meta: {
            title: "测试页面A", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面A", url: "" }]
        },
    },
    {
        path: "testB",
        name: "testB",
        component: () =>
            import("@/views/model/test/testB.vue"),
        meta: {
            title: "测试页面B", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面B", url: "" }]
        },
    },
    {
        path: "testC",
        name: "testC",
        component: () =>
            import("@/views/model/test/testC.vue"),
        meta: {
            title: "测试页面C", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面C", url: "" }]
        },
    },
    {
        path: "testD",
        name: "testD",
        component: () =>
            import("@/views/model/test/testD.vue"),
        meta: {
            title: "测试页面D", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面D", url: "" }]
        },
    },
    {
        path: "testE",
        name: "testE",
        component: () =>
            import("@/views/model/test/testE.vue"),
        meta: {
            title: "测试页面E", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面E", url: "" }]
        },
    },
    {
        path: "testF",
        name: "testF",
        component: () =>
            import("@/views/model/test/testF.vue"),
        meta: {
            title: "测试页面F", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面F", url: "" }]
        },
    },
    {
        path: "testG",
        name: "testG",
        component: () =>
            import("@/views/model/test/testG.vue"),
        meta: {
            title: "测试页面G", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面G", url: "" }]
        },
    },
    {
        path: "testH",
        name: "testH",
        component: () =>
            import("@/views/model/test/testH.vue"),
        meta: {
            title: "测试页面H", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面H", url: "" }]
        },
    },
    {
        path: "testI",
        name: "testI",
        component: () =>
            import("@/views/model/test/testI.vue"),
        meta: {
            title: "测试页面I", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面I", url: "" }]
        },
    },
    {
        path: "testJ",
        name: "testJ",
        component: () =>
            import("@/views/model/test/testJ.vue"),
        meta: {
            title: "测试页面J", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面A", url: "" }]
        },
    },
    {
        path: "testK",
        name: "testK",
        component: () =>
            import("@/views/model/test/testK.vue"),
        meta: {
            title: "测试页面K", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面K", url: "" }]
        },
    },
    {
        path: "testL",
        name: "testL",
        component: () =>
            import("@/views/model/test/testL.vue"),
        meta: {
            title: "测试页面L", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面L", url: "" }]
        },
    },
    {
        path: "testM",
        name: "testM",
        component: () =>
            import("@/views/model/test/testM.vue"),
        meta: {
            title: "测试页面M", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面M", url: "" }]
        },
    },
    {
        path: "testN",
        name: "testN",
        component: () =>
            import("@/views/model/test/testN.vue"),
        meta: {
            title: "测试页面N", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面N", url: "" }]
        },
    },
    //=====================================child====================================//
    {
        path: "testa-child",
        name: "testachild",
        component: () =>
            import("@/views/model/test/child/testa-child.vue"),
        meta: {
            title: "测试页面N", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: false, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "测试页面A", url: "/portal/testA" }, { title: "测试页面A-child", url: "" }]
        },
    },
]

export default test;
