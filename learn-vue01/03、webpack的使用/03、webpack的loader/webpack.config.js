// 获取项目所在路径，这里需要执行npm init命令，生成package.json
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
          {
            // 正则匹配所有css文件
            test: /\.css$/,
            // css-loader只负责css文件的加载，style-loader负责把样式添加到DOM中
            // 使用多个时，会从右向左读，所以顺序不能变，否则build直接报错
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.js$/,
            // es6转es5语法，排除掉这几个文件夹
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                // 不使用env的方式
                // presets: ['@babel/preset-env']
                // 使用简单es6转es5
                presets: ['es2015']
              }
            }
          }
        ]
    }
}