<template>
    <div class="home w-100 d-flex center">
        <h1>欢迎访问vue-ts-app</h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
}
</script>
<style lang="scss">
    .home{
        height: calc(100vh - 215px);
    }
</style>
