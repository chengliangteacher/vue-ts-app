<template>
    <div class="layout">
        <div class="header">
            <Header />
        </div>
        <div class="layout-container">
            <div class="layout-left">
                <banner @edit="edit" />
            </div>
            <el-card class="layout-main">
                <div slot="header">
                    <Breadcrumb />
                </div>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </el-card>
        </div>
        <SystemSet />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import banner from "./banner.vue";
import Header from "./header.vue";
import Breadcrumb from "./breadcrumb.vue";
import SystemSet from "./system-set.vue";
@Component({
    components: {
        banner,
        Header,
        Breadcrumb,
        SystemSet,
    }
})
export default class layout extends Vue {
    public edit(val: number): void {
        console.log(val);
    }
}
</script>

<style lang="scss">
.layout {
    .header {
        width: 100vw;
        overflow: hidden;
        height: 60px;
        background: white;
        padding: 0 1rem;
    }
    .layout-container {
        display: flex;
        .layout-left {
            height: calc(100vh - 60px);
            background: $white;
            overflow-y: auto;
        }
        .layout-main {
            flex-grow: 1;
            height: calc(100vh - 80px);
            margin: 10px 10px 0 10px;
            padding: 10px;
            overflow-y: auto;
            background-color: $white;
        }
    }
}
</style>
