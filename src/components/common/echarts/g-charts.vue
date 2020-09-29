<template>
    <div :id="id" :style="{width: width ? width : '100%',height: height ? height : '300px'}"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import * as echarts from "echarts";
interface resizeParam {
    width: string;
    height: string;
    silent: boolean;
}
@Component
export default class sCharts extends Vue {
    /* 
        @description  prop
        @autor        cheng liang
        @create       2020-09-29 10:19"
        @params       
        @return       
    */
    @Prop(Object) public options!: {};
    @Prop({ type: String, default: "echarts" }) readonly id!: string;
    @Prop(String) readonly width!: string;
    @Prop(String) readonly height!: string;
    @Prop({ type: Function, default: () => {} }) public onClick!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onDblclick!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onMousedown!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onMousemove!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onMouseup!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onMouseover!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onMouseout!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onGlobalout!: (
        val: any
    ) => void;
    @Prop({ type: Function, default: () => {} }) public onContextmenu!: (
        val: any
    ) => void;
    /* 
        @description  data
        @autor        cheng liang
        @create       2020-09-29 10:46"
        @params       
        @return       
    */
    public echarts: any;
    /* 
        @description  watch
        @autor        cheng liang
        @create       2020-09-29 10:45"
        @params       
        @return       
    */
    @Watch("options", { deep: true })
    public handleChangeOptions(val: any) {
        this.handleSetOptions();
    }
    /* 
        @description  methods
        @autor        cheng liang
        @create       2020-09-29 10:45"
        @params       
        @return       
    */
    //=====================================设置echarts option====================================//
    public handleSetOptions(): void {
        this.echarts.setOption(this.options);
    }
    //=====================================监听echarts事件====================================//
    public handleEchartsEvents(): void {
        this.echarts.on("click", (params: any) => {
            this.onClick(params);
        });
        this.echarts.on("dblclick", (params: any) => {
            this.onDblclick(params);
        });
        this.echarts.on("mousedown", (params: any) => {
            this.onMousedown(params);
        });
        this.echarts.on("mousemove", (params: any) => {
            this.onMousemove(params);
        });
        this.echarts.on("mouseup", (params: any) => {
            this.onMouseup(params);
        });
        this.echarts.on("mouseover", (params: any) => {
            this.onMouseover(params);
        });
        this.echarts.on("mouseout", (params: any) => {
            this.onMouseout(params);
        });
        this.echarts.on("globalout", (params: any) => {
            this.onGlobalout(params);
        });
        this.echarts.on("contextmenu", (params: any) => {
            this.onContextmenu(params);
        });
    }
    /* 
        @description  该改变实例宽高
        @autor        cheng liang
        @create       2020-09-29 11:11"
        @params       data: { wdith 实例宽度 height 实例高度 silent }
        @return       
    */
    public handleEchartsResize(data: resizeParam): void {
        if (this.echarts) {
            this.echarts.resize(data);
        }
    }
    /* 
        @description  获取实例对象
        @autor        cheng liang
        @create       2020-09-29 11:14"
        @params       
        @return       
    */
    public handleGetEchartsOption(): any {
        if (!this.echarts) return;
        return this.echarts.getOption();
    }
    /* 
        @description  mounted
        @autor        cheng liang
        @create       2020-09-29 10:45"
        @params       
        @return       
    */
    public mounted() {
        this.echarts = echarts.init(
            document.getElementById(this.id) as HTMLDivElement
        );
        this.handleEchartsEvents();
        if (!this.options) return;
        this.handleSetOptions();
    }
}
</script>
<style>
</style>
