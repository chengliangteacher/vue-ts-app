import Vue from "vue";
import focus from "./focus";
import drag from "./drag";
import copy from "./copy";
import bubble from "./bubble";
Vue.directive("focus", focus);
Vue.directive("drag", drag);
Vue.directive("copy", copy);
Vue.directive("bubble", bubble);
