const path = require('path')
// console.log(path.resolve(__dirname));
// console.log(path.resolve(__filename));

//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

//资源分析插件
const BundleAnalyzer = require('webpack-bundle-analyzer')


module.exports = {
    mode:"production",
    entry:path.resolve(__dirname, 'src/main.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),  // ./dist
        filename: '[name].[contenthash].bundle.js',       // main.bundle.js
    },
    //# sourceURL = ''
    devtool:'source-map',
    optimization:{
        //代码优化 tree shaking 基于ESmodule模式
        //去除没使用的部分
        usedExports:true,
        minimize:true,
        //尽可能把文件放在一个函数中 scope hoisting
        concatenateModules:true

    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            title:"webpack测试"
        }),
        // new BundleAnalyzer.BundleAnalyzerPlugin()
    ],
    resolve:{
        //别名
        alias:{
            assets:path.resolve(__dirname,'src/assets')
        }
    },
    //模块配置  对于require/import的规则
    module:{
        //配置loader 什么样的文件使用什么loader
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },{
                test:/\.(png|jpg|gif|svg)$/i,
                type:'asset/resource'
            },{
                //自定义加载器
                test:/\.md$/i,
                use:'./my-loader-md/markdown-loader'
            }
        ]
    }
}