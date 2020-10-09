import Vue from 'vue'
import App from './App'
// 导入vue路由插件
import router from './router'

// 产品的提示信息，开发时false，发布时true
Vue.config.productionTip = false

// 所有Vue的组件都继承了Vue对象的原型，为Vue原型添加属性，在其他组件中可以调用
Vue.prototype.$test001 = '我是Vue原型$test001'

const cpn = {
  template: `{{message}}`,
  data() {
    return {
      message: '你好啊'
    }
  }
}

// vue-cli3可以使用命令：vue ui 使用图形界面配置
// vue-cli3的配置文件在：node_modules/@vue/cli-service/webpack.config.js
// 实际在 node_modules/@vue/cli-service/lib/config中
// vue-cli3可以扩展vue配置，新建vue.config.js
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 注册路由
  render: h => h(App)
  // render: function(createElement) {
  //   // 1、普通用法：createElement("标签(String)", "属性({})", "内容([])")
  //   // return createElement('h2', {class: 'box'}, [`hello word`, createElement('button', ['按钮'])]);
  //   // 2、传入组件对象
  //   // return createElement(cpn); // 这个是不能解析的，因为是runtime-only
  //   return createElement(App); // 这个可以解析，因为vue-loader和vue-template-compiler开发时就已经给转化了
  // }
})
