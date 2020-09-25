<template>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse">
        <template v-for="(item, index) in routesData">
            <router-link v-if="!item.hasChildren" :key="index" :to="item.url">
                <el-menu-item :index="item.id">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.text }}</span>
                </el-menu-item>
            </router-link>
            <Submenu v-else :key="index" :menu-data="item" />
        </template>
    </el-menu>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Submenu from "./child/submenu.vue";
import { State } from "vuex-class";
/* 
    @description  类型声明
    @autor        cheng liang
    @create       2020-09-25 10:56"
    @params       
    @return       
*/
interface Item {
    url: string;
    id: string;
    hasChildren: boolean;
    children: Array<Item>;
}
@Component({
    components: {
        Submenu
    }
})
export default class banner extends Vue {
    public activeIndex: string = "";
    /* 
        @description  状态机-state
        @autor        cheng liang
        @create       2020-09-25 10:59"
        @params       
        @return       
    */
    @State("isCollapse") public isCollapse!: boolean;
    @State("routesData") public routesData!: Array<Item>;
    /* 
        @description  watch监听
        @autor        cheng liang
        @create       2020-09-25 11:02"
        @params       
        @return       
    */
    @Watch("$route")
    public handleWatchRoute(): void {
        this.activeIndex = "";
        this.handleDealRouter(this.routesData);
    }
    /* 
        @description  methods
        @autor        cheng liang
        @create       2020-09-25 10:57"
        @params       
        @return       
    */
    public handleDealRouter(data: Item[]) {
        const currentData = this.$route.path;
        data.forEach(item => {
            if (!this.activeIndex && item.url === currentData) {
                this.activeIndex = item.id;
            } else if (!this.activeIndex && item.hasChildren) {
                this.handleDealRouter(item.children);
            }
        });
    }
    /* 
        @description  生命周期
        @autor        cheng liang
        @create       2020-09-25 10:57"
        @params       
        @return       
    */
    mounted() {
        this.handleDealRouter(this.routesData);
    }
}
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    overflow-x: hidden;
}
</style>

