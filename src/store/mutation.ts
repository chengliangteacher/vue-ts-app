// eslint-disable-next-line no-unused-vars
import { State } from "./State-type"
export default {
    //=====================================设置菜单展开与收缩====================================//
    SET_IS_COLLAPSE(state: State) {
        state.isCollapse = !state.isCollapse;
    },
    //=====================================新增tag标签====================================//
    ADD_TAGS_VIEW(state: State, data: any) {
        state.tagsData.forEach(item => {
            item.checked = false
        })
        if (state.tagsData.some(item => item.path === data.path)) {
            state.tagsData = state.tagsData.map(item => {
                if (item.path === data.path) {
                    item.checked = true;
                }
                return item;
            })
        } else {
            state.tagsData = [...state.tagsData, Object.assign(data, { isDelete: true, checked: true })];
        }
    },
    //=====================================删除tag标签====================================//
    DELETE_TAGS_VIEW(state: State, path: string) {
        state.tagsData = state.tagsData.filter(item => item.path !== path)
    },
    //=====================================删除其它标签====================================//
    DELETE_OTHER_TAGS_VIEW(state: State, path: string) {
        state.tagsData = state.tagsData.filter(item => item.path === path || item.path === "/portal/home");
    },
    //=====================================删除右侧标签====================================//
    DELETE_RIGHT_TAGS_VIEW(state: State, path: string) {
        const index = state.tagsData.findIndex(item => item.path === path);
        if (index === state.tagsData.length - 1) return;
        state.tagsData.splice(index + 1, state.tagsData.length);
    },
    //=====================================关闭所有标签====================================//
    DELETE_ALL_TAGS_VIEW(state: State) {
        state.tagsData = state.tagsData.filter(item => item.path === "/portal/home");
    },
    //=====================================设置菜单搜索====================================//
    SET_SHOW_MENU_SEARCH(state: State) {
        state.showMenuSearch = !state.showMenuSearch
    },
    //=====================================设置系统配置====================================//
    SET_SHOW_STYSTEM_SET(state: State) {
        state.showSystemSet = !state.showSystemSet
    },
    //=====================================设置tagview====================================//
    SET_SHOW_TAGS_VIEW(state: State) {
        state.showTagsView = !state.showTagsView
    },
    //=====================================设置左右布局====================================//
    SET_SHOW_LAYOUT_X(state: State) {
        state.showLayoutX = !state.showLayoutX
    },
    //=====================================设置全屏====================================//
    SET_SHOW_FULL_SCREEN(state: State) {
        state.showFullScreen = !state.showFullScreen
    },
    //=====================================设置菜单收缩====================================//
    SET_SHOW_MENU_COLLAPSE(state: State) {
        state.showMenuCollapse = !state.showMenuCollapse
    },
}
