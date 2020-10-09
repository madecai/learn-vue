// 获取项目所在路径，这里需要执行npm init命令，生成package.json
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    resolve: {
        // 可以配置扩展名，导入时就不用指定.vue了
        // extensions: ['.js','.vue'],
        alias: {
            // 起个别名，导入vue时使用这个js，而不是默认的
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    }
}