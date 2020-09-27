import store from "../store/index";
//=====================================根据主题色设置nprogress颜色====================================//
export function handleRouterBarColor(): void {
    const bar: any = document.querySelector("#nprogress .bar");
    const bar2: any = document.querySelector("#nprogress .spinner-icon");
    if (bar && bar2) {
        bar.style.background = store.state.themeColor;
        bar2.style["border-top-color"] = store.state.themeColor;
        bar2.style["border-left-color"] = store.state.themeColor;
    }
}
