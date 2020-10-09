<template>
  <div id="app">
    <div>App.vue中的counter：{{$store.state.counter}}</div>
    <div>App.vue中的counter的平方：{{$store.getters.powerCounter}}</div>
    <div>App.vue中的counter的平方+1：{{$store.getters.powerCounter_1}}</div>
    <div>App.vue中的counter的平方+n：{{$store.getters.powerCounter_n(2)}}</div>
    <!-- 不推荐这样直接操作state -->
    <!-- <button @click="$store.state.counter++">+</button> -->
    <!-- <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="substract">-</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {
    addition() {
      // 传入mutation中的方法名
      this.$store.commit('increase');
    },
    substract() {
      this.$store.commit('decrease');
    }
  }
}
</script>

<style>

</style>
