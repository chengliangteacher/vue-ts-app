<template>
    <div>
        <el-button type="text" @click="handleToChild">跳转子页面</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class testA extends Vue {
    public handleToChild(): void {
        this.$router.push("/portal/testa-child")
    }
}
</script>
<style>
</style>
