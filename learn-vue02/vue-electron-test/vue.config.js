const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',  
    port: 30001
  },
  configureWebpack: {
    resolve: {
        // 配置别名
        alias: {
            'assets': '@/assets',
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
            'background': '@/background'
        }
    }
  },
  pages: {
    index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page'
    }
  },
  pluginOptions: {
    electronBuilder: {
      // outputDir: 'electron-builder-output-dir',
      preload: 'src/preload.js',
      builderOptions: {
        // 安装包图标
        win: {
          icon: './public/app.ico'
        },
        mac: {
          icon: './public/app.icns'
        },
        // 生成的可执行文件名称
        productName: 'codesearch-plus',
        "appId": "com.didisq",//包名  
        "copyright":"Copyright © 2020 didisq",//版权  信息
        "compression": "store", // "store" | "normal"| "maximum" 打包压缩情况(store 相对较快)，store 39749kb, maximum 39186kb
        "directories": {
          "output": "build_electron" // 输出文件夹
        },
        "extraResources":  { // 拷贝dll等静态文件到指定位置
          "from": "./src/background/resource/",
          "to": "extra"
        },
        "asar": false, // asar打包
        "nsis": {
          "oneClick": false, // 一键安装
          // "guid": "xxxx", //注册表名字，不推荐修改
          "perMachine": true, // 是否开启安装时权限限制（此电脑或当前用户）
          "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          "allowToChangeInstallationDirectory": true, // 允许修改安装目录
          // "installerIcon": "./build/icons/aaa.ico", // 安装图标
          // "uninstallerIcon": "./build/icons/bbb.ico", //卸载图标
          // "installerHeaderIcon": "./build/icons/aaa.ico", // 安装时头部图标
          "createDesktopShortcut": true, // 创建桌面图标
          "createStartMenuShortcut": true, // 创建开始菜单图标
          "shortcutName": "codesearch plus" // 图标名称
        } 
      }
    }
  }
};