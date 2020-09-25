/* eslint-disable no-unused-vars */
/* 
    @description  首页
    @autor        cheng liang
    @create       2020-09-24 14:35"
    @params       
    @return       
*/
import { RouteConfig } from "vue-router";

const home: Array<RouteConfig> = [
    {
        path: "home",
        name: "home",
        component: () =>
            import("@/views/model/home/index.vue"),
        meta: {
            title: "首页", //------- 页面名称
            isKeep: false, //------- 页面是否需要缓存
            isShowMenu: true, //------- 是否需要展示为菜单
            isShowTab: true, //------- 是否需要展示在tab上
            breadcrumb: [{ title: "首页", url: "" }]
        }
    }
]

export default home;
