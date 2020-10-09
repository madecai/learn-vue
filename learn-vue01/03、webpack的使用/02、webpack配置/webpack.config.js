// 这里需要执行npm init命令，生成package.json
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        // 获取当前文件的真实所在路径，而不是其他文件引用该js使用的其他文件的路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}