import Vue from "vue";
declare module "vue/types/vue" {
    interface Vue {
        $count: any,
        axios: any,
    }
}
