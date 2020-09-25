<template>
    <div class="tags-view">
        <el-button type="primary" plain class="h-100" size="mini" icon="el-icon-d-arrow-left" @click="handleScrollTo(1)"></el-button>
        <div id="tags-view-scroll" ref="tags-view-scroll" class="tags-view-content mx-1" @contextmenu.prevent="handleOnContextmenu">
            <router-link v-for="(item, index) in tagsData" :key="index" :to="item.path">
                <el-tag :effect="item.checked ? 'dark' : 'plain'" :data-path="item.path" :class="{'mr-1': index !== tagsData.length-1}" :closable="item.isDelete" size="small" @close.stop.prevent.self="handleColseTag(item.path)">{{ item.title }}</el-tag>
            </router-link>
        </div>
        <el-button type="primary" plain class="h-100" size="mini" icon="el-icon-d-arrow-right" @click="handleScrollTo(2)"></el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
interface Item {
    path: string; // 标签对应路由
    title: string; // 标签名称
    isDelete: boolean; // 是否可删除
    checked: boolean; // 是否选中-即当前访问路由
}
@Component
export default class TagsView extends Vue {
    public interval: any = null;
    public message: string = "";
    /* 
        @description  状态机-state
        @autor        cheng liang
        @create       2020-09-25 10:52"
        @params       
        @return       
    */
    @State("tagsData") public tagsData!: Item[];
    @State("isCollapse") public isCollapse!: boolean;
    /* 
        @description  状态机-actions
        @autor        cheng liang
        @create       2020-09-25 10:52"
        @params       
        @return       
    */
    @Action("ASYNC_DELETE_TAGS_VIEW") public handleDeleteTag!: (
        path: string
    ) => Promise<void>;
    @Action("ASYNC_DELETE_OTHER_TAGS_VIEW") public handleDeleteOthersTag!: (
        path: string
    ) => Promise<void>;
    @Action("ASYNC_DELETE_RIGHT_TAGS_VIEW")
    public handleDeleteRightTage!: (path: string) => Promise<void>;
    @Action("ASYNC_DELETE_ALL_TAGS_VIEW")
    public handleDeleteAllTag!: () => Promise<void>;
    /* 
        @description  watch监听事件
        @autor        cheng liang
        @create       2020-09-25 10:52"
        @params       
        @return       
    */
    @Watch("$route")
    //=====================================监听router变化====================================//
    public handleWatchRouter(): void {
        this.$store.commit("ADD_TAGS_VIEW", {
            path: this.$route.fullPath,
            title: this.$route.meta.title
        });
    }
    /* 
        @description  methods
        @autor        cheng liang
        @create       2020-09-25 10:53"
        @params       
        @return       
    */
    //=====================================移动横向滚动条====================================//
    public handleScrollTo(val: number): void {
        const tagscroll = document.getElementById("tags-view-scroll");
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = null;
        let step = 0;
        if (tagscroll) {
            if (val === 1) {
                this.interval = setInterval((): void => {
                    if (step === 100) {
                        clearInterval(this.interval);
                    } else {
                        tagscroll.scrollLeft -= 10;
                        step += 10;
                    }
                }, 20);
            } else {
                this.interval = setInterval((): void => {
                    if (step === 100) {
                        clearInterval(this.interval);
                    } else {
                        tagscroll.scrollLeft += 10;
                        step += 10;
                    }
                }, 20);
                tagscroll.scrollLeft += 100;
            }
        }
    }
    //=====================================关闭标签====================================//
    public handleColseTag(path: string): void {
        this.handleDeleteTag(path).then(res => {
            if (this.$route.fullPath === path) {
                this.$router.push(this.tagsData[this.tagsData.length - 1].path);
            }
        });
    }
    //=====================================右键菜单====================================//
    public handleOnContextmenu(event: any) {
        if (event.target.localName !== "span") return false;
        const content = event.target.innerHTML;
        const path = event.target.getAttribute("data-path");
        this.$contextmenu({
            items: [
                {
                    label: "关闭",
                    divided: true,
                    disabled: content === "首页",
                    onClick: () => {
                        this.handleColseTag(path);
                    }
                },
                {
                    label: "关闭其它",
                    divided: true,
                    onClick: () => {
                        this.handleDeleteOthersTag(path).then(() => {
                            if (path === this.$route.fullPath) return;
                            this.$router.push(path);
                        });
                    }
                },
                {
                    label: "关闭到右侧",
                    divided: true,
                    onClick: () => {
                        this.handleDeleteRightTage(path).then(() => {
                            if (path === this.$route.fullPath) return;
                            this.$router.push(path);
                        });
                    }
                },
                {
                    label: "全部关闭",
                    onClick: () => {
                        this.handleDeleteAllTag().then(() => {
                            if (this.$route.fullPath === "/portal/home") return;
                            this.$router.push("/portal/home");
                        });
                    }
                }
            ],
            event,
            customClass: "class-a",
            zIndex: 3,
            minWidth: 100
        });
        return false;
    }
    /* 
        @description  生命周期
        @autor        cheng liang
        @create       2020-09-25 10:53"
        @params       
        @return       
    */
    public mounted() {
        this.$store.commit("ADD_TAGS_VIEW", {
            path: this.$route.fullPath,
            title: this.$route.meta.title
        });
    }
}
</script>
<style lang="scss">
.tags-view {
    height: 30px;
    line-height: 29px;
    background: $white;
    box-shadow: 0px 2px 1px 4px #eee;
    display: flex;
    .tags-view-content {
        flex-grow: 1;
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        flex-wrap: nowrap;
        &::-webkit-scrollbar {
            display: none;
        }
        .el-tag {
            border-radius: 0px !important;
        }
    }
}
</style>
