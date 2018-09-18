import * as webpack from 'webpack'
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import { VueLoaderPlugin } from "vue-loader"

/** webpack的ts配置文件 */
const config: webpack.Configuration = {
    /**开发环境 */
    mode: "development",
    /**基目录为src */
    context: __dirname+"/src",
    /**入口文件，生成vue实例 */
    entry: {
        index: './main.ts'
    },
    output: {
        /**构建目录 */
        path: __dirname + '/build',
        /**开发目录 */
        publicPath: '/',
        /**js文件格式 */
        filename: 'js/[name].js'
    },
    devtool: false,
    watch: false,
    profile: true,
    cache: true,
    parallelism: 8,
    optimization: {
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        occurrenceOrder: true,
        minimize: false,
        /**提取通用代码块，多个入口文件时使用，这里的common块也要加入html */
        splitChunks: {
            chunks: 'all',
            name: 'common'
        },
    },
    resolve: {
        extensions: ['.ts','.js', '.vue', '.json']
    },
    module: {
        rules: [
            /**vue loader，用于加载.vue文件，分离style、template、script等元素内容 */
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    transformToRequire: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            },
            /**加载ts文件，至于这个为vue文件添加后缀，我也不知道干嘛的 */
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },   
            /** scss，可以在vue的style中使用scss语法 */     
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /(\.jpg)|(\.jpeg)|(\.png)|(\.svg)|(\.gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8800,
                        fallback: 'file-loader',
                        name: '[path][name]_[hash].[ext]',
                        outputPath: '',
                        publicPath: ''
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '谁看打死谁',
            entryOnly: true
        }),
        /**生成唯一入口html */
        new HtmlWebpackPlugin({
            title: "首页",
            filename: `./index.html`,
            /**需要加入的js块 */
            chunks: ['common','index'],
            chunksSortMode: 'dependency',
            template: './index.html',
            inject: 'body',
            xhtml: true  
        }),
        /**需要一个vue-loader插件 */
        new VueLoaderPlugin()
    ]
};
export default config