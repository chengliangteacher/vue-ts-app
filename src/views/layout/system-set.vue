<template>
    <div class="layout-set">
        <div v-show="isShowSet" class="layout-set-backgroud" @click="isShowSet=false"></div>
        <div :class="{ 'active-page-show': isShowSet, 'active-page-hide': !isShowSet }" class="layout-set-right px-1">
            <h4>系统布局配置</h4>
            <div>
                <el-form ref="form" label-width="200px" label-position="left">
                    <el-form-item label="主题色">
                        <el-color-picker size="small"></el-color-picker>
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
        right: -250px !important;
    }
    .active-button-hide {
        right: -5px !important;
    }
    .active-button-show {
        right: 245px !important;
    }
    > .layout-set-right {
        width: 250px;
        height: 100%;
        background-color: $white;
        position: fixed;
        right: -250px;
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
