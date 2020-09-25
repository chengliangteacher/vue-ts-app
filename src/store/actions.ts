/* eslint-disable no-unused-vars */
import { ActionContext } from "vuex"
import { State } from "./State-type"
export default {
    //=====================================删除tag标签====================================//
    ASYNC_DELETE_TAGS_VIEW(context: ActionContext<State, any>, path: string) {
        return new Promise((resolve, reject) => {
            context.commit("DELETE_TAGS_VIEW", path)
            resolve()
        })
    },
    //=====================================删除其它标签====================================//
    ASYNC_DELETE_OTHER_TAGS_VIEW(context: ActionContext<State, any>, path: string) {
        return new Promise((resolve, reject) => {
            context.commit("DELETE_OTHER_TAGS_VIEW", path);
            resolve();
        })
    },
    //=====================================删除右侧标签====================================//
    ASYNC_DELETE_RIGHT_TAGS_VIEW(context: ActionContext<State, any>, path: string) {
        return new Promise((resolve, reject) => {
            context.commit("DELETE_RIGHT_TAGS_VIEW", path);
            resolve();
        })
    },
    //=====================================关闭所有标签====================================//
    ASYNC_DELETE_ALL_TAGS_VIEW(context: ActionContext<State, any>) {
        return new Promise((resolve, reject) => {
            context.commit("DELETE_ALL_TAGS_VIEW");
            resolve();
        })
    }
}
