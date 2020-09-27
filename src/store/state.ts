export default {
    //=====================================菜单导航收缩====================================//
    isCollapse: false,
    //=====================================测试菜单====================================//
    routesData: [
        {
            url: "/portal/home",
            id: "10",
            text: "首页",
            hasChildren: false,
            icon: "el-icon-help"
        },
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
    ],
    //=====================================tags-view数据====================================//
    tagsData: [
        {
            path: "/portal/home",
            title: "首页",
            isDelete: false, // 是否可删除
            checked: true, // 是否选中-即当前访问路由
        }
    ],
    //=====================================是否显示菜单搜索====================================//
    showMenuSearch: true,
    //=====================================是否开启设置功能====================================//
    showSystemSet: true,
    //=====================================是否开启tagview====================================//
    showTagsView: true,
    //=====================================开启左右布局====================================//
    showLayoutX: false,
    //=====================================开启全屏功能====================================//
    showFullScreen: true,
    //=====================================开启菜单收缩功能====================================//
    showMenuCollapse: true,
    //=====================================主题色====================================//
    themeColor: "#00A961"
}
