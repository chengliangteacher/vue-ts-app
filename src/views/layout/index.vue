<template>
    <div class="layout">
        <div v-if="!showLayoutX" class="header">
            <Header />
        </div>
        <div v-else class="layout-left layout-left-with">
            <banner @edit="edit" />
        </div>
        <div class="layout-container">
            <div v-if="showLayoutX" class="header">
                <Header />
            </div>
            <div v-else class="layout-left">
                <banner @edit="edit" />
            </div>
            <div class="layout-main">
                <tags-view v-if="showTagsView"></tags-view>
                <div :class="{ 'layout-content-with': !showTagsView }" class="layout-content">
                    <s-content>
                        <Breadcrumb />
                    </s-content>
                </div>
            </div>
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
import TagsView from "./tags-view.vue";
@Component({
    components: {
        banner,
        Header,
        Breadcrumb,
        SystemSet,
        "tags-view": TagsView
    }
})
export default class layout extends Vue {
    /* 
        @description  data
        @autor        cheng liang
        @create       2020-09-25 16:41"
        @params       
        @return       
    */
    public edit(val: number): void {
        console.log(val);
    }
    /* 
        @description  计算属性
        @autor        cheng liang
        @create       2020-09-25 16:41"
        @params       
        @return       
    */
    get showTagsView(): boolean {
        return this.$store.state.showTagsView;
    }
    get showLayoutX(): boolean {
        return this.$store.state.showLayoutX;
    }
}
</script>

<style lang="scss">
.layout {
    .header {
        // width: 100%;
        overflow: hidden;
        height: 60px;
        background: white;
        padding: 0 1rem;
    }

    .layout-container {
        width: 100vw;
    }
    .layout-main {
        height: calc(100vh - 60px);
        .layout-content {
            height: calc(100vh - 90px);
            padding: 10px;
            overflow-y: auto;
            &.layout-content-with {
                height: 100%;
            }
        }
    }
    .layout-left {
        height: calc(100vh - 60px);
        background: $white;
        overflow-y: auto;
        float: left;
        &.layout-left-with{
            height: 100vh !important;
        }
    }
}
</style>
