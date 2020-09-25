import Vue from "vue";

//=====================================自动聚焦====================================//
Vue.directive("focus", {
    inserted: function(el: any) {
        el.focus();
    }
})

