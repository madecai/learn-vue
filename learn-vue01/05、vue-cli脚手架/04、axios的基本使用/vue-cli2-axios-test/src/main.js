import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 二、axios的全局配置，必须写在前面
axios.defaults.baseURL = 'http://httpbin.org';
axios.defaults.timeout = 5000;


// 一、axios的基本使用
// 1、axios(config)
axios({
  url: '/get',
  // method: 'post' // 默认GET请求
  // params: {} // 如果是post请求使用data:{}
}).then(res => console.log('1、', res)
).catch(err => console.log('1、',err)) 

// 2、axios.post(url,params,config) //get/post/delete/put...
axios.post('http://httpbin.org/post',{id: 123, name: 'zhangsan'})
.then(res => console.log('2、', res))

// 3、axios.all([])多个请求都执行完后响应
axios.all([
  axios({
    url: 'http://httpbin.org/get'
  }), 
  axios({
    url: 'http://httpbin.org/post', 
    method: 'post',
    params: {name: 'aaa'}
  })
])
// .then(results => {
//   console.log('3、', results[0])
//   console.log('3、', results[1])
// })
// 3.1.写法二，自动分割
// .then(axios.spread((res1, res2) => {
//   console.log('3.1、', res1)
//   console.log('3.1、', res2)
// }))
// 3.2 写法三，利用es6数组的解构
.then(([res1, res2]) => {
  console.log('3.2、', res1)
  console.log('3.2、',res2)
})

// 二、使用非全局的axios
const instance1 = axios.create({
  baseUrl: 'http://httpbin.org',
  timeout: 5000
})

instance1({
  url: '/get',
  params: {age: 22}
}).then(res => console.log('二、1、', res))

// 三、axios的封装
import {request} from '@/network/request'
request({
  url: '/get',
  params: {age: 33}
}).then(res => console.log('三、1、', res))

// 四、拦截器
// 1.1、全局请求拦截器
axios.interceptors.request.use((config) =>{
  console.log('四、1.1、拦截', config);
  return config; // 放行
}, error => {
  console.log('四、1.1、拦截错误', error);
  return Promise.reject(error);
})

// 1.2、全局响应拦截器
axios.interceptors.response.use((response) =>{
  console.log('四、1.2、拦截', response);
  return response; // 放行，可以直接返回data过滤掉没用的信息
}, error => {
  console.log('四、1.2、拦截错误', error);
  return Promise.reject(error);
})

axios({
  url: '/get',
}).then(res => console.log('四、1、', res))

// 2、实例拦截器
const instance2 = axios.create({
  baseUrl: 'http://httpbin.org',
  timeout: 5000
})

instance2.interceptors.request.use((config) =>{
  console.log('四、2、拦截', config);
  return config;
})

instance2({
  url: '/get',
  params: {age: 44}
}).then(res => console.log('四、2、', res))
