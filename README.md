# vue-ts-app

## 下载依赖项
```
npm install/cnpm install
```

## 启动webpack-dev-server
```
npm run serve
```

## 编译打包
```
npm run build
```

## Lints and fixes files
```
npm run lint
```

## 目录
```
| .eslintrc.js                eslint配置项
| .gitignore                  不加入git文件
| .babel.config.js            babel配置项
| tsconfig.json               typescript配置项
| vue.config.js               webpack配置项/通过merge加入到webpack配置中
| .env                        项目全局变量
| README.md                   项目文档
|-public                      公共html入口文件
|   | favicon.ico             浏览器玩也图标
|   | index.html              webpack入口模版文件
|-src                         项目开发核心文件
|   |-api                     request
|   |  api.ts                 axios全局封装
|   |-assets                  静态资源目录/会通过webpack处理
|   |  |css                   存放css
|   |  |images                存放图片
|   |  |js                    存放js
|   |-components              公共vue组件
|   |  |-common               自动注册全局组件
|   |  | index.ts             自动注册组件逻辑文件
|   |-directive               全局自定义指令
|   |-filter                  全局filter
|   |-lib                     全局工具函数
|   |  utils.ts
|   |-mixin                   全局混合注入
|   |-router                  项目路由
|   |  |-model                路由模块
|   |  | index.ts             路由主文件
|   |-scss                    scss全局样式文件
|   |  |-element-variables    element ui个性化样式修改
|   |  |-global               浏览器默认样式重置
|   |  |-grid                 布局
|   |  |-helpers              特殊方法类scss
|   |  |-utils                常用工具类scss
|   |  |-variables            颜色系变量scss
|   |  |-index.scss           主scss文件
|   |-store                   状态机
|   |  | actions.ts           状态机-actios
|   |  | mutation.ts          状态机-mutation
|   |  | state.ts             状态机-state
|   |  | State-type.ts        状态机-state类型
|   |  | index.ts             状态机-主文件
|   |-views                   布局及页面级文件
|   |  |-error                错误页面
|   |  |-layout               框架页面
|   |  |   |-child            框架子组件
|   |  |   | banner.vue       菜单
|   |  |   | breadcrumb.vue   面包屑导航
|   |  |   | header.vue       布局页面头部
|   |  |   | index.vue        layout主页面
|   |  |   | system-set.vue   系统设置
|   |  |   | tags-view.vue    tab导航
|   |  |-model                逻辑页面
|   |  |-App.vue              项目主vue文件
|   |  |-main.ts              项目入口文件
|   |  |-shims-tsx.d.ts       引入tsx模块
|   |  |-shims-vue.d.ts       挂在vue全局变量类型生命
|   |  |-vue.d.ts             引入个别依赖适配ts
```
