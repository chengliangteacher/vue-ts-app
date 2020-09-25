<template>
    <div class="d-flex align-center between">
        <div class="header-left d-flex align-center">
            <h3>vue-typescript版后台管理系统</h3>
            <i v-if="showMenuCollapse" :class="{ 'el-icon-s-fold': !isCollapse, 'el-icon-s-unfold': isCollapse}" size="30" class="header-icon font-size-lg cursor-pointer" @click="handleCollapse"></i>
        </div>
        <div class="header-right d-flex align-center">
            <i v-if="showMenuSearch" class="el-icon-search font-size-lg cursor-pointer" @click="handleClickSearch"></i>
            <transition name="el-zoom-in-center">
                <el-cascader v-show="isSearch" ref="search-cascader" v-model="menuId" v-focus :options="routesData" filterable clearable show-all-levels size="small" placeholder="搜索" separator="/" :props="{ value: 'id', label: 'text' }" class="transition-box" @change="changeMenu"></el-cascader>
            </transition>
            <i v-if="showFullScreen" :class="{ 'iconquanping': !isFullScreen, 'icontuichuquanping': isFullScreen}" class="iconfont header-icon font-size-lg cursor-pointer" @click="handleFullScreen"></i>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link cursor-pointer">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="center">个人中心</el-dropdown-item>
                    <el-dropdown-item command="address">项目地址</el-dropdown-item>
                    <el-dropdown-item divided command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Header extends Vue {
    /* 
        @description  data
        @autor        cheng liang
        @create       2020-09-25 14:06"
        @params       
        @return       
    */
    public menuId: string[] = [];
    public isFullScreen: boolean = false;
    public isSearch: boolean = false;
    /* 
        @description  computed
        @autor        cheng liang
        @create       2020-09-25 11:32"
        @params       
        @return       
    */
    get isCollapse(): boolean {
        return this.$store.state.isCollapse;
    }
    get routesData(): [] {
        return this.$store.state.routesData;
    }
    get getCheckedNodes(): any {
        return (this.$refs[
            "search-cascader"
        ] as HTMLFormElement).getCheckedNodes();
    }
    get showMenuSearch(): boolean {
        return this.$store.state.showMenuSearch;
    }
    get showFullScreen(): boolean {
        return this.$store.state.showFullScreen
    }
    get showMenuCollapse(): boolean {
        return this.$store.state.showMenuCollapse
    }
    /* 
        @description  methods
        @autor        cheng liang
        @create       2020-09-25 11:31"
        @params       
        @return       
    */
    //=====================================点击搜索图标====================================//
    public handleClickSearch(): void {
        this.isSearch = !this.isSearch;
    }
    //=====================================改变搜索菜单====================================//
    public changeMenu(val: []): void {
        this.isSearch = false;
        setTimeout(() => {
            if (this.getCheckedNodes.length === 1) {
                const path = this.getCheckedNodes[0].data.url;
                this.$router.push(path);
            }
            this.menuId = [];
        });
    }
    //=====================================收缩菜单====================================//
    public handleCollapse(): void {
        this.$store.commit("SET_IS_COLLAPSE");
    }
    //=====================================退出登录====================================//
    public handleCommand(command: string): void {
        if (command === "logout") {
            this.$router.push("/login");
        } else if (command === "address") {
            window.open("https://github.com/chengliangteacher/vue-ts-app.git");
        }
    }
    //=====================================网页全屏幕====================================//
    public handleFullScreen(): void {
        const main = document.body;
        if (this.isFullScreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                this.isFullScreen = false;
            }
        } else {
            if (main.requestFullscreen) {
                main.requestFullscreen();
                this.isFullScreen = true;
            }
        }
    }
}
</script>

<style lang="scss">
.header-right {
    .el-input__inner {
        border-radius: 0 !important;
        // border: none !important;
        border-bottom: 1px solid #dcdfe6;
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
    }
    .el-cascader .el-input .el-icon-arrow-down {
        display: none;
    }
}
.header-icon {
    height: 60px;
    line-height: 60px !important;
    width: 40px;
    text-align: center;
    transition: 0.6s;
    &:hover {
        background-color: rgb(245, 245, 245);
    }
}
</style>

