export interface routesItem {
    url: string,
    id: string,
    text: string,
    hasChildren: boolean,
    icon: string,
    children?: routesItem[]
}
export interface tagsItem {
    path: string,
    title: string,
    isDelete: boolean,
    checked: boolean,
}
export interface State {
    isCollapse: boolean,
    routesData: routesItem[],
    tagsData: tagsItem[],
    showMenuSearch: boolean,
    showSystemSet: boolean,
    showTagsView: boolean,
    showLayoutX: boolean,
    showFullScreen: boolean,
    showMenuCollapse: boolean,
    themeColor: string
}
