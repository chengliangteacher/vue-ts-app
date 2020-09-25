import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/api/api"
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import "./components/index"
import minxin from "./mixin/mixin";
import "./directive/directive.ts";
import "./scss/element-variables/element-variables.scss" //--------------------主题色
import Contextmenu from "vue-contextmenujs";

Vue.use(Contextmenu);
Vue.use(ElementUI);

Vue.prototype.$count = [1, 2];
Vue.prototype.axios = axios;
Vue.mixin(minxin);

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
