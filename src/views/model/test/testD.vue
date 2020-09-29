<template>
    <div>
        <el-row>
            <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
                <s-charts id="main" ref="echarts" v-loading="loading" element-loading-text="加载中" element-loading-background="rgba(255, 255, 255, 0.9)" height="300px" :options="options" :on-click="handleEchartsClick"></s-charts>
            </el-col>
            <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
                <s-charts id="main2" ref="echarts2" v-loading="loading" element-loading-text="加载中" element-loading-background="rgba(255, 255, 255, 0.9)" height="300px" :options="options2" :on-click="handleEchartsClick"></s-charts>
            </el-col>
            <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
                <s-charts id="main3" ref="echarts3" v-loading="loading" element-loading-text="加载中" element-loading-background="rgba(255, 255, 255, 0.9)" height="300px" :options="options3" :on-click="handleEchartsClick"></s-charts>
            </el-col>
        </el-row>
        <el-button type="text" @click="handleClick">click</el-button>
        <el-button type="text" @click="handleClickResize">resize</el-button>
        <el-button type="text" @click="handleClickGetOption">getoption</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class testD extends Vue {
    /* 
        @description  data
        @autor        cheng liang
        @create       2020-09-29 10:55"
        @params       
        @return       
    */
    public options = {
        background: "#eeee",
        title: {
            text: "条形图"
        },
        tooltip: {
            show: true,
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            show: true,
            data: ["销量", "2010"]
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {
            show: true
        },
        color: [this.themeColor],
        dataZoom: [
            {
                type: "slider",
                show: false,
                orient: "horizontal"
            }
        ],
        // visualMap: {
        //     show: false,
        //     min: 0,
        //     max: 100,
        //     // 两个手柄对应的数值是 4 和 15
        //     range: [0, 100],
        //     color: ["#fff", this.themeColor]
        // },
        toolbox: {
            show: true,
            orient: "horizontal",
            feature: {
                dataView: { readOnly: false },
                magicType: { type: ["line", "bar"] },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20]
            },
            {
                name: "2010",
                type: "line",
                data: [40, 30, 40, 10, 90, 30],
                itemSyle: {
                    color: "red"
                }
            }
        ]
    };
    public options2 = {
        title: {
            text: "饼图"
        },

        legend: {
            show: true,
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        color: [this.themeColor],
        series: [
            {
                name: "访问来源",
                type: "pie",
                radius: "55%",
                center: ["50%", "50%"],
                data: [
                    { value: 335, name: "直接访问" },
                    { value: 310, name: "邮件营销" },
                    { value: 274, name: "联盟广告" },
                    { value: 235, name: "视频广告" },
                    { value: 400, name: "搜索引擎" }
                ].sort(function(a, b) {
                    return a.value - b.value;
                }),
                roseType: "radius",
                label: {
                    // color: "rgba(255, 255, 255, 0.3)"
                },
                labelLine: {
                    lineStyle: {
                        // color: "rgba(255, 255, 255, 0.3)"
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    // color: "#c23531",
                    shadowBlur: 50,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                },

                animationType: "scale",
                animationEasing: "elasticOut",
                animationDelay: function() {
                    return Math.random() * 200;
                }
            }
        ]
    };
    public options3 = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        color: [this.themeColor],
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: "业务指标",
                type: "gauge",
                detail: { formatter: "{value}%" },
                data: [{ value: 50, name: "完成率" }]
            }
        ]
    };
    public loading: boolean = false;
    /* 
        @description  计算属性
        @autor        cheng liang
        @create       2020-09-29 15:11"
        @params       
        @return       
    */
    get themeColor(): string {
        return this.$store.state.themeColor;
    }
    @Watch("themeColor")
    public changeThemeColor(): void {
        this.options.color = [this.themeColor];
        this.options2.color = [this.themeColor];
        this.options3.color = [this.themeColor];
    }
    /* 
        @description  methods
        @autor        cheng liang
        @create       2020-09-29 10:55"
        @params       
        @return       
    */
    //=====================================更改数据====================================//
    public handleClick(): void {
        const data = this.options.series[0].data;
        data[0] = 100;
        this.$set(this.options.series[0], "data[0]", 100);
    }
    //=====================================测试点击====================================//
    public handleEchartsClick(val: any): void {
        console.log(val);
    }
    //=====================================echarts-resize-改变图表尺寸，在容器大小发生改变时需要手动调用====================================//
    public handleClickResize(): void {
        if (!this.$refs.echarts) return;
        (this as any).$refs.echarts.handleEchartsResize({
            width: "100px",
            height: "100px",
            silent: true
        });
    }
    //=====================================获取实例对象====================================//
    public handleClickGetOption(): void {
        if (!this.$refs.echarts) return;
        const options = (this as any).$refs.echarts.handleGetEchartsOption();
        console.log(options);
    }
    /* 
        @description  mounted
        @autor        cheng liang
        @create       2020-09-29 10:55"
        @params       
        @return       
    */
    public mounted(): void {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }
}
</script>
<style>
</style>
