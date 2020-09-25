<template>
    <el-card class="s-content">
        <div slot="header">
            <slot></slot>
        </div>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </el-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Scontent extends Vue {
}
</script>

<style lang="scss">
    .s-content{
        min-height: 100%;
    }
</style>
