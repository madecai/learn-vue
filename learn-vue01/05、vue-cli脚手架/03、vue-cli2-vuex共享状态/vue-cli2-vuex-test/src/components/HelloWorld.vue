<template>
  <div>
    <div>HelloWorld.vue中的counter：{{$store.state.counter}}</div>
    <h2>一、vuex共享状态(实际上就是一个可以做到响应式的全局变量)</h2>
    <h3>1、基本使用</h3>
    <p>### 安装命令：cnpm install --save vuex</p>
    <p>### 新建store(推荐命名为store)文件夹，新建index.js</p>
    <p>### 1.安装插件：Vue.use(Vuex);2.创建对象：new Vuex.Store({})；3.导出；4.挂载</p>
    <p>### 在任何组件中都可以用$store.state.xxx访问到全局共享状态</p>
    <p>### 注意，一般不推荐直接修改$store.state.xxx状态，直接修改devtool不能跟踪，而且容易出现问题</p>
    <p>### 推荐在mutations中定义方法操作state，然后在其他地方调用this.$store.commit('方法名');</p>
    <p>### chorom浏览器安装vue devtools插件，可以跟踪状态</p>
    <h3>2、state：保存共享状态（单一状态树）</h3>
    <h3>3、mutations：定义方法操作state，推荐mutations内的方法是同步方法，如果是异步的devtools将跟踪不到</h3>
    <p>### 第一个参数为state，第二个参数为自定义参数</p>
    <p>### 调用：this.$store.commit('方法名', 自定义参数);</p>
    <p>### 参数被称为mutation的载荷（Payload）</p>
    <p>### 传参示例：<button @click="addCount(5)">+5</button></p>
    <p>### 提交方式二：this.$store.commit({type:'方法名', 参数});此种方式提交接收的时候第二个参数就是commit中的这个对象</p>
    <p>### 传参方式二实例：<button @click="addCount2(10)">+10</button></p>
    <p>### 对象中的有些操作是做不到响应式的，<button @click="$store.commit('updatePerson')">修改person对象</button>{{$store.state.person}}</p>
    <p>### 删除和新增做不到响应式（普通的vue变量也做不到，实际就是受vue响应式限制），所有做不到响应式的都可以使用Vue的方法</p>
    <p>### Vue.set(对象, 对象key|数组角标, value);</p>
    <p>### Vue.delete(对象, 对象key|数组角标);</p>
    <p>### 定义方法和commit时使用常量操作：<button @click="addCount(5)">+5</button><button @click="addCount2(10)">+10</button></p>
    <h3>4、getters：类似计算属性（computed）</h3>
    <p>### 第一个参数为stat，第二个参数为getters对象。利用返回一个函数传参</p>
    <p>### 调用：$store.getters.xxx(自定义参数)</p>
    <h3>5、actions：异步操作</h3>
    <p>### <button @click="$store.dispatch('aUpdatePerson')">延迟更新person属性</button></p>
    <p>### <button @click="$store.dispatch('aUpdatePerson', '我是payload')">延迟更新person属性带参数</button></p>
    <p>### <button @click="$store.dispatch({type: 'aUpdatePerson', message: '我是payload方式二'})">延迟更新person属性带参数方式二</button></p>
    <p>### <button @click="aUpdatePerson">修改成功回调</button></p>
    <p>### <button @click="aUpdatePerson2">回调写法二（推荐）</button></p>
    <h3>6、modules：模块化</h3>
    <p>### 拿到moduleA中的name：{{$store.state.moduleA.name}}</p>
    <p>### 调用mutations中的updateName，先从根中找，没有从模块中找：<button @click="$store.commit('updateName', 'updateName成功')">按钮</button></p>
    <p>### 调用getters中的fullname，先从根中找，没有从模块中找，可以拿到根路径中state：{{$store.getters.fullname}}</p>
    <p>### 调用actions中的aUpdateName，先从根中找，没有从模块中找：<button @click="$store.dispatch('aUpdateName')">按钮</button></p>
    <h3>7、Vuex目录组织</h3>
    <p>### 推荐将 mutations actions getters modules 抽取</p>
  </div>
</template>

<script>

import {INCREASE_COUNT, INCREASE_COUNT2} from '@/store/mutations-type'

export default {
  name: 'HelloWorld',
  data () {
    return {
    
    }
  },
  methods: {
    addCount(count) {
      this.$store.commit(INCREASE_COUNT, count);
    },
    addCount2(count) {
      this.$store.commit({
        type: INCREASE_COUNT2,
        count
      });
    },
    aUpdatePerson() {
      this.$store.dispatch({
        type: 'aUpdatePerson', 
        message: '我是payload方式二', 
        success(msg) {
          alert(msg);
        }
      });
    },
    aUpdatePerson2() {
      this.$store.dispatch({
        type: 'aUpdatePerson2', 
        message: '我是payload方式二2'
      }).then(msg => {
        alert(msg);
      });
    }
  }
}
</script>

<style scoped>

</style>
