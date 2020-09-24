<template>
    <el-breadcrumb separator="/">
        <template v-for="(item, index) in breads">
            <el-breadcrumb-item v-if="item.url" :key="index" :to="{path: item.url}">{{ item.title }}</el-breadcrumb-item>
            <el-breadcrumb-item v-else :key="index">{{ item.title }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
interface metaObject {
    url: string;
    title: string;
}
@Component
export default class Breadcrumb extends Vue {
    public breads: Array<metaObject> = [];
    public currentPath = "";
    public setBreads(): void {
        this.breads = this.$route.meta.breadcrumb;
        this.currentPath = this.breads.length ? this.breads[0].url : "/";
    }
    @Watch("$route")
    public handleRouter(): void {
        this.setBreads();
    }
    public mounted(): void {
        this.setBreads();
    }
}
</script>

