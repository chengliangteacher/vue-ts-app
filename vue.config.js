module.exports = {
    //=====================================向预处理器 Loader 传递选项====================================//
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/index.scss";`
            }
        },
        sourceMap: false, //---------是否开启css source map
        
    },
    configureWebpack: config => {
        //=====================================自定义环境配置====================================//
    },
    chainWebpack: config => {
        //=====================================加载其他loader, 可以链式操作====================================//
    },
    publicPath: "/", //---------公共路径
    outputDir: "dist", //--------打包路径
    assetsDir: "", //--------打包放置的静态资源路径
    indexPath: "index.html", //--------指定生成index.html的输出路径
    filenameHashing: true, //--------文件命名的hash
    pages: undefined, //--------multi-page 模式配置
    lintOnSave: "error", //--------开启eslint警告
    devServer: {
        //=====================================开启浏览器显示编译报错或者警告====================================//
        overlay: {
            warnings: true,
            errors: true
        },
        //=====================================在开发环境下将 API 请求代理到 API 服务器====================================//
        proxy: {
            "/api": {
                target: "", //--------代理的url
                ws: false,
                changeOrigin: true, //--------跨域请求
            },
            "/test": {
                target: "", //--------代理的url
                ws: false,
                changeOrigin: true, //--------跨域请求
            },
        }
    },
    runtimeCompiler: false, //--------是否使用包含运行时编译器的 Vue 构建版本
    transpileDependencies: [], //--------通过 Babel 显式转译一个依赖
    productionSourceMap: true, //--------生产环境的 source map
    crossorigin: undefined, //--------设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
}
