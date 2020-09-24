import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //=====================================菜单导航收缩====================================//
        isCollapse: false,
        //=====================================测试菜单====================================//
        routesData: [
            {
                url: "/portal/testA",
                id: "1",
                text: "一级菜单页面",
                hasChildren: false,
                icon: "el-icon-help"
            },
            {
                url: "",
                id: "2",
                text: "二级菜单",
                hasChildren: true,
                icon: "el-icon-picture-outline-round",
                children: [
                    {
                        url: "/portal/testB",
                        id: "21",
                        text: "二级菜单页面",
                        hasChildren: false,
                        icon: ""
                    }
                ]
            },
            {
                url: "",
                id: "3",
                text: "三级菜单",
                hasChildren: true,
                icon: "el-icon-s-platform",
                children: [
                    {
                        url: "",
                        id: "31",
                        text: "中级三级菜单",
                        hasChildren: true,
                        icon: "el-icon-s-promotion",
                        children: [
                            {
                                url: "/portal/testC",
                                id: "311",
                                text: "三级菜单页面",
                                hasChildren: false,
                                icon: "el-icon-s-promotion",
                            }
                        ]
                    }
                ]
            },
            {
                url: "/portal/testD",
                id: "4",
                text: "一级菜单页面02",
                hasChildren: false,
                icon: "el-icon-help"
            },
            {
                url: "",
                id: "5",
                text: "二级菜单02",
                hasChildren: true,
                icon: "el-icon-picture-outline-round",
                children: [
                    {
                        url: "/portal/testE",
                        id: "51",
                        text: "二级菜单页面02",
                        hasChildren: false,
                        icon: ""
                    }
                ]
            },
            {
                url: "",
                id: "6",
                text: "三级菜单02",
                hasChildren: true,
                icon: "el-icon-s-platform",
                children: [
                    {
                        url: "",
                        id: "61",
                        text: "中级三级菜单02",
                        hasChildren: true,
                        icon: "el-icon-s-promotion",
                        children: [
                            {
                                url: "/portal/testF",
                                id: "611",
                                text: "三级菜单页面02",
                                hasChildren: false,
                                icon: "el-icon-s-promotion",
                            }
                        ]
                    }
                ]
            },
            {
                url: "/portal/testG",
                id: "7",
                text: "一级菜单页面03",
                hasChildren: false,
                icon: "el-icon-help"
            },
            {
                url: "",
                id: "8",
                text: "二级菜单03",
                hasChildren: true,
                icon: "el-icon-picture-outline-round",
                children: [
                    {
                        url: "/portal/testH",
                        id: "81",
                        text: "二级菜单页面03",
                        hasChildren: false,
                        icon: ""
                    }
                ]
            },
            {
                url: "",
                id: "9",
                text: "三级菜单03",
                hasChildren: true,
                icon: "el-icon-s-platform",
                children: [
                    {
                        url: "",
                        id: "91",
                        text: "中级三级菜单03",
                        hasChildren: true,
                        icon: "el-icon-s-promotion",
                        children: [
                            {
                                url: "/portal/testI",
                                id: "911",
                                text: "三级菜单页面03",
                                hasChildren: false,
                                icon: "el-icon-s-promotion",
                            }
                        ]
                    }
                ]
            },
        ]
    },
    mutations: {
        setIsCollapse(state) {
            state.isCollapse = !state.isCollapse;
        }
    },
    actions: {},
    modules: {},
    //=====================================getter暴露出个性化state====================================//
    getters: {
        isCollapse: state => state.isCollapse
    }
});
