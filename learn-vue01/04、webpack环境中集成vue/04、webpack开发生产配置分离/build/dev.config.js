const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
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
});