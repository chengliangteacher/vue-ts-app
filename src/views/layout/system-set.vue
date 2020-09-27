<template>
    <div class="layout-set">
        <div v-show="isShowSet" class="layout-set-backgroud" @click="isShowSet=false"></div>
        <div :class="{ 'active-page-show': isShowSet, 'active-page-hide': !isShowSet }" class="layout-set-right px-1">
            <h4>系统布局配置</h4>
            <div>
                <el-form ref="form" label-width="200px" label-position="left">
                    <el-form-item label="主题色">
                        <s-theme-picker></s-theme-picker>
                    </el-form-item>
                    <el-form-item label="开启tags-view">
                        <el-switch :value="showTagsView" @change="handleSetShowTagsView"></el-switch>
                    </el-form-item>
                    <el-form-item label="开启菜单搜索功能">
                        <el-switch :value="showMenuSearch" @change="handleSetShowMenuSearch"></el-switch>
                    </el-form-item>
                    <el-form-item label="开启菜单收缩功能">
                        <el-switch :value="showMenuCollapse" @change="handleSetShowMenuCollapse"></el-switch>
                    </el-form-item>
                    <el-form-item label="开启设置功能">
                        <el-switch :value="showSystemSet" @change="handleSetShowSystemSet"></el-switch>
                    </el-form-item>
                    <el-form-item label="开启左右布局">
                        <el-switch :value="showLayoutX" @change="handleSetShowLayoutX"></el-switch>
                    </el-form-item>
                    <el-form-item label="开启全屏功能">
                        <el-switch :value="showFullScreen" @change="handleSetShowFullScreen"></el-switch>
                    </el-form-item>
                </el-form>
                <el-divider content-position="left">Math常用方法</el-divider>
                <el-tag v-for="item in mathData" :key="item.name" v-copy="item.title" class="mr-1 mb-1">{{ item.name }}</el-tag>
                <el-divider content-position="left">常用正则表达式</el-divider>
                <el-tag v-for="item in regularData" :key="item.name" v-copy="item.title" class="mr-1 mb-1">{{ item.name }}</el-tag>
            </div>
        </div>
        <el-button :class="{ 'active-button-show': isShowSet, 'active-button-hide': !isShowSet }" class="active-set-button" type="primary" size="small" @click="handleSet">
            <i v-if="!isShowSet" class="el-icon-setting font-size-ex"></i>
            <i v-else class="el-icon-close font-size-ex"></i>
        </el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";
interface Item {
    name: string;
    title: string;
}
@Component
export default class SystemSet extends Vue {
    /* 
        @description  data
        @autor        cheng liang
        @create       2020-09-25 16:14"
        @params       
        @return       
    */
    public isShowSet: boolean = false;
    public mathData: Array<Item> = [
        {
            name: "数的绝对值",
            title: "Math.abs(x)"
        },
        {
            name: "上舍入",
            title: "Math.ceil(x)"
        },
        {
            name: "e的指数",
            title: "Math.ceil(x)"
        },
        {
            name: "对数",
            title: "Math.log(x)"
        },
        {
            name: "两数最高值",
            title: "Math.max(x,y)"
        },
        {
            name: "两数最低值",
            title: "Math.min(x,y)"
        },
        {
            name: "0-1随机数",
            title: "Math.random()"
        },
        {
            name: "四舍五入最接整数",
            title: "Math.round(x)"
        },
        {
            name: "对象源代码",
            title: "Math.toSource(x)"
        },
        {
            name: "Math对象原始值",
            title: "Math.valueOf()"
        }
    ];
    public regularData: Array<Item> = [
        {
            name: "数字",
            title: "/^[0-9]*$/"
        },
        {
            name: "非零的正整数",
            title: "/^[1-9]d*$/"
        },
        {
            name: "零和非零开头的数字",
            title: "/^(0|[1-9][0-9]*)$/"
        },
        {
            name: "非零开头的最多带两位小数的数字",
            title: "/^([1-9][0-9]*)+(.[0-9]{1,2})?$/"
        },
        {
            name: "带1-2位小数的正数或负数",
            title: "/^(-)?d+(.d{1,2})?$/"
        },
        {
            name: "正数、负数、和小数",
            title: "/^(-|+)?d+(.d+)?$/"
        },
        {
            name: "非零的负整数",
            title: '/^-[1-9][]0-9"*$/'
        },
        {
            name: "非负整数",
            title: "/^d+$/"
        },
        {
            name: "非正整数",
            title: "/^-[1-9]d*|0$/"
        },
        {
            name: "非负浮点数",
            title: "/^d+(.d+)?$/"
        },
        {
            name: "非正浮点数",
            title: "/^((-d+(.d+)?)|(0+(.0+)?))$/"
        },
        {
            name: "正浮点数",
            title: "/^[1-9]d*.d*|0.d*[1-9]d*$/"
        },
        {
            name: "负浮点数",
            title: "/^-([1-9]d*.d*|0.d*[1-9]d*)$/"
        },
        {
            name: "浮点数",
            title: "/^(-?d+)(.d+)?$/"
        },
        {
            name: "汉字",
            title: "/^[\u4e00-\u9fa5]{0,}$/"
        },
        {
            name: "英文和数字",
            title: "^[A-Za-z0-9]+$"
        },
        {
            name: "Email地址",
            title: "/^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/"
        },
        {
            name: "域名",
            title:
                "/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?/"
        },
        {
            name: "国内电话号码",
            title: "/d{3}-d{8}|d{4}-d{7}/"
        },
        {
            name: "身份证号码",
            title: "/^((d{18})|([0-9x]{18})|([0-9X]{18}))$/"
        },
        {
            name: "帐号合法",
            title: "/^[a-zA-Z]w{5,17}$/"
        },
        {
            name: "密码(8-10)",
            title: "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$  /"
        },
        {
            name: "日期格式",
            title: "/^d{4}-d{1,2}-d{1,2}/"
        },
        {
            name: "中文字符",
            title: "/[\u4e00-\u9fa5]/"
        },
        {
            name: "首尾空白",
            title: "/^s*|s*$/"
        },
        {
            name: "邮政编码",
            title: "/[1-9]d{5}(?!d)/"
        }
    ];
    /* 
        @description  计算属性
        @autor        cheng liang
        @create       2020-09-25 16:14"
        @params       
        @return       
    */
    get showMenuSearch(): boolean {
        return this.$store.state.showMenuSearch;
    }

    get showSystemSet(): boolean {
        return this.$store.state.showSystemSet;
    }

    get showTagsView(): boolean {
        return this.$store.state.showTagsView;
    }

    get showLayoutX(): boolean {
        return this.$store.state.showLayoutX;
    }

    get showFullScreen(): boolean {
        return this.$store.state.showFullScreen;
    }

    get showMenuCollapse(): boolean {
        return this.$store.state.showMenuCollapse;
    }

    /* 
        @description  mutation
        @autor        cheng liang
        @create       2020-09-25 16:31"
        @params       
        @return       
    */

    @Mutation("SET_SHOW_MENU_SEARCH")
    public handleSetShowMenuSearch!: () => void;

    @Mutation("SET_SHOW_STYSTEM_SET")
    public handleSetShowSystemSet!: () => void;

    @Mutation("SET_SHOW_TAGS_VIEW")
    public handleSetShowTagsView!: () => void;

    @Mutation("SET_SHOW_LAYOUT_X")
    public handleSetShowLayoutX!: () => void;

    @Mutation("SET_SHOW_FULL_SCREEN")
    public handleSetShowFullScreen!: () => void;

    @Mutation("SET_SHOW_MENU_COLLAPSE")
    public handleSetShowMenuCollapse!: () => void;

    /* 
        @description  methods
        @autor        cheng liang
        @create       2020-09-25 16:14"
        @params       
        @return       
    */
    //=====================================点击设置按钮====================================//
    public handleSet(): void {
        this.isShowSet = !this.isShowSet;
    }
}
</script>
<style lang="scss">
.layout-set {
    > div:first-child {
        overflow-y: auto;
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 2;
    }
    .active-page-show {
        right: 0 !important;
    }
    .active-page-hide {
        right: -270px !important;
    }
    .active-button-hide {
        right: -5px !important;
    }
    .active-button-show {
        right: 265px !important;
    }
    > .layout-set-right {
        overflow-y: auto;
        width: 270px;
        height: 100vh;
        background-color: $white;
        position: fixed;
        right: -270px;
        transition: 0.4s;
        top: 0;
        z-index: 4;
    }
    .active-set-button {
        transition: 0.4s;
        z-index: 3;
        position: fixed;
        right: -5px;
        top: 20%;
    }
}
</style>
