<template>
    <div class="d-flex align-center between">
        <div class="header-left d-flex align-center">
            <h3>vue-typescript版后台管理系统</h3>
            <i :class="{ 'el-icon-s-fold': !isCollapse, 'el-icon-s-unfold': isCollapse}" size="30" class="header-icon font-size-lg cursor-pointer" @click="handleCollapse"></i>
        </div>
        <div class="d-flex align-center">
            <i :class="{ 'iconquanping': !isFullScreen, 'icontuichuquanping': isFullScreen}" class="iconfont header-icon font-size-lg cursor-pointer" @click="handleFullScreen"></i>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link cursor-pointer">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="center">个人中心</el-dropdown-item>
                    <el-dropdown-item divided command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
    computed: {
        //=====================================菜单收缩状态====================================//
        isCollapse(): boolean {
            return this.$store.state.isCollapse;
        }
    }
})
export default class Header extends Vue {
    public isFullScreen: boolean = false;
    //=====================================收缩菜单====================================//
    public handleCollapse(): void {
        this.$store.commit("setIsCollapse");
    }
    //=====================================退出登录====================================//
    public handleCommand(command: string): void {
        console.log(command);
        this.$router.push("/login");
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

