const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    plugins: [
        // webpack内置的插件，在打包后的文件中添加一个版权信息的注释
        new webpack.BannerPlugin('版权归didisq所有'),
        new HtmlWebPackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        // 服务于哪个文件夹，默认是跟文件夹
        contentBase: './dist',
        // 端口号，默认8080
        port: 8088,
        // 页面实时刷新
        inline: true,
        // 在SPA页面中，依赖HTML5的history模式
        // historyApiFallback
    }
}