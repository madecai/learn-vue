<template>
  <div id="app">
    <!-- router-link是vue-router中内置的全局组件，最终会渲染成一个a标签 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <button @click="homeClick">首页代码跳转</button>
    <button @click="aboutClick">关于代码跳转</button>
    <router-link :to="'/user/' + userId" replace>用户</router-link>
    <router-link :to="{path: '/profile', query: {id:213, name:'zhangsan'}}" replace>档案</router-link>
    <!-- 用keep-alive包裹后切换路由当前组件就不会销毁，可以写exclude排除某项、include包含某项 -->
    <keep-alive exclude="User,Profile">
      <!-- 渲染的组件在什么位置 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 123
    }
  },
  methods: {
    homeClick() {
      this.$router.replace('/home');
    },
    aboutClick() {
      this.$router.replace('/about');
    }
  }
}
</script>

<style>

</style>
