<template>
    <el-color-picker v-model="theme" :disabled="loading" :predefine="predefineColors" size="small"></el-color-picker>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
const version = require("element-ui/package.json").version;
const ORIGINAL_THEME: string = "#409EFF";
@Component
export default class sThemePicker extends Vue {
    public theme: string = ORIGINAL_THEME;
    public showSuccess: boolean = true;
    public loading: boolean = false;
    public chalk: string = "";
    public predefineColors: string[] = [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#409EFF",
        "#00A961",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577"
    ];
    /* 
        @description  watch
        @autor        cheng liang
        @create       2020-09-27 10:27"
        @params       
        @return       
    */
    @Watch("theme")
    public handleWatchTheme(val: string, oldVal: string) {
        if (typeof val !== "string") return;
        const themeCluster = this.getThemeCluster(val.replace("#", ""));
        const originalCluster = this.getThemeCluster(oldVal.replace("#", ""));
        const getHandler = (variable: string, id: string) => {
            return () => {
                const originalCluster = this.getThemeCluster(
                    ORIGINAL_THEME.replace("#", "")
                );
                const newStyle = this.updateStyle(
                    this.chalk,
                    originalCluster,
                    themeCluster
                );

                let styleTag = document.getElementById(id);
                if (!styleTag) {
                    styleTag = document.createElement("style");
                    styleTag.setAttribute("id", id);
                    document.head.appendChild(styleTag);
                }
                styleTag.innerText = newStyle;
            };
        };
        const chalkHandler: any = getHandler("chalk", "chalk-style");
        if (!this.chalk) {
            const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
            this.getCSSString(url, chalkHandler, "chalk");
        } else {
            chalkHandler();
        }

        const styles = [].slice
            .call(document.querySelectorAll("style"))
            .filter((style: any) => {
                const text = style.innerText;
                return (
                    new RegExp(oldVal, "i").test(text) &&
                    !/Chalk Variables/.test(text)
                );
            });
        styles.forEach((style: any) => {
            const { innerText } = style;
            if (typeof innerText !== "string") return;
            style.innerText = this.updateStyle(
                innerText,
                originalCluster,
                themeCluster
            );
        });

        // 响应外部操作
        // this.$emit("onThemeChange", val);
        // this.$store.commit(types.M_THEME_COLOR, val);
        window.localStorage.theme = this.theme;
        this.handleSetStoreColor(this.theme);
        if (this.showSuccess) {
            this.$message({
                message: "换肤成功",
                type: "success"
            });
        } else {
            this.showSuccess = true;
        }
    }
    /* 
        @description  状态机-state
        @autor        cheng liang
        @create       2020-09-27 11:25"
        @params       
        @return       
    */
    @State public themeColor!: string;
    /* 
        @description  mutation
        @autor        cheng liang
        @create       2020-09-27 13:54"
        @params       
        @return       
    */
    @Mutation("SET_THEME_COLOR") public handleSetStoreColor!: (
        color: string
    ) => void;
    /* 
        @description  methods
        @autor        cheng liang
        @create       2020-09-27 10:14"
        @params       
        @return       
    */
    //=====================================替换主题色====================================//
    public updateStyle(
        style: string,
        oldCluster: string[],
        newCluster: string[]
    ): string {
        let newStyle = style;
        oldCluster.forEach((color, index) => {
            newStyle = newStyle.replace(
                new RegExp(color, "ig"),
                newCluster[index]
            );
        });
        return newStyle;
    }
    //=====================================获取远程elemenui提供的css样式文件====================================//
    public getCSSString(
        url: string,
        callback: () => {},
        variable: string
    ): void {
        const xhr = new XMLHttpRequest();
        this.loading = true;
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.chalk = xhr.responseText.replace(/@font-face{[^}]+}/, "");
                callback();
                this.loading = false;
            }
        };
        xhr.open("GET", url);
        xhr.send();
    }
    //=====================================计算相关主题颜色====================================//
    public getThemeCluster(theme: string): string[] {
        const tintColor = (color: string, tint: number) => {
            let red: any = parseInt(color.slice(0, 2), 16);
            let green: any = parseInt(color.slice(2, 4), 16);
            let blue: any = parseInt(color.slice(4, 6), 16);

            if (tint === 0) {
                return [red, green, blue].join(",");
            } else {
                red += Math.round(tint * (255 - red));
                green += Math.round(tint * (255 - green));
                blue += Math.round(tint * (255 - blue));

                red = red.toString(16);
                green = green.toString(16);
                blue = blue.toString(16);

                return `#${red}${green}${blue}`;
            }
        };

        const shadeColor = (color: string, shade: number) => {
            let red: any = parseInt(color.slice(0, 2), 16);
            let green: any = parseInt(color.slice(2, 4), 16);
            let blue: any = parseInt(color.slice(4, 6), 16);

            red = Math.round((1 - shade) * red);
            green = Math.round((1 - shade) * green);
            blue = Math.round((1 - shade) * blue);

            red = red.toString(16);
            green = green.toString(16);
            blue = blue.toString(16);

            return `#${red}${green}${blue}`;
        };

        const clusters = [theme];
        for (let i = 0; i <= 9; i++) {
            clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
        }
        clusters.push(shadeColor(theme, 0.1));
        return clusters;
    }
    /* 
        @description  mounted
        @autor        cheng liang
        @create       2020-09-27 10:12"
        @params       
        @return       
    */
    public mounted(): void {
        if (window.localStorage.theme) {
            this.handleSetStoreColor(window.localStorage.theme);
        }
        this.theme = this.themeColor;
        this.showSuccess = false;
        this.$handleRouterBarColor();
        // document.getElementsByTagName("body")[0].style.zoom = "1";
    }
}
</script>
<style>
</style>
