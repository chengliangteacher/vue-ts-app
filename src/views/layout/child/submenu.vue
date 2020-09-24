<template>
    <el-submenu :index="menuData.id">
        <template slot="title">
            <i :class="menuData.icon"></i>
            <span slot="title">{{ menuData.text }}</span>
        </template>
        <el-menu-item-group v-if="menuData.hasChildren">
            <template v-for="(item, index) in menuData.children">
                <router-link v-if="!item.hasChildren" :key="index" :to="item.url">
                    <el-menu-item :index="item.id">{{ item.text }}</el-menu-item>
                </router-link>
                <Submenu v-if="item.hasChildren" :key="index" :menu-data="item" />
            </template>
        </el-menu-item-group>
    </el-submenu>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
interface Item {
    url: string; // 跳转路径
    id: string; // 项目id
    text: string; // 显示菜单名称
    hasChildren: boolean; // 是否有children
    icon: string; // 菜单图标
    children: Array<object>; // 子菜单数据
}
@Component
export default class Submenu extends Vue {
    @Prop(Object) public menuData!: Item; // 菜单数据
}
</script>

