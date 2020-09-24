<template>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
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
import { Component, Vue, Emit } from "vue-property-decorator";
import Submenu from "./child/submenu.vue";
interface Item {
    url: string;
    id: string;
    hasChildren: boolean,
    children: Array<Item>
}
@Component({
    components: {
        Submenu
    },
    computed: {
        isCollapse(): boolean {
            return this.$store.state.isCollapse;
        },
        routesData(): Array<Item> {
            return this.$store.state.routesData;
        }
    }
})
export default class banner extends Vue {
    public activeIndex: string = "";
    public handleOpen(key: any, keyPath: any): void {
        console.log(key, keyPath);
    }
    public handleClose(key: any, keyPath: any): void {
        console.log(key, keyPath);
    }
    //=====================================触发父组件edit事件====================================//
    @Emit("edit")
    /**
     * edit
     */
    public edit(): number {
        return 6;
    }
    public handleDealRouter(data: Array<Item>) {
        const currentData = this.$route.path;
        data.forEach(item => {
            if (!this.activeIndex && item.url === currentData) {
                this.activeIndex = item.id;
            } else if (!this.activeIndex && item.hasChildren) {
                this.handleDealRouter(item.children);
            }
        });
    }
    mounted() {
        this.handleDealRouter(this.$store.state.routesData);
    }
}
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

