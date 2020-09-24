<template>
    <div class="layout-set">
        <div v-show="isShowSet" class="layout-set-backgroud" @click="isShowSet=false"></div>
        <div :class="{ 'active-page-show': isShowSet, 'active-page-hide': !isShowSet }" class="layout-set-right px-1">
            <h4>系统布局配置</h4>
            <div></div>
        </div>
        <el-button :class="{ 'active-button-show': isShowSet, 'active-button-hide': !isShowSet }" class="active-set-button" type="primary" size="small" @click="handleSet">
            <i v-if="!isShowSet" class="el-icon-setting font-size-ex"></i>
            <i v-else class="el-icon-close font-size-ex"></i>
        </el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SystemSet extends Vue {
    public isShowSet: boolean = false;
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
