<template>
  <div>
    {{message}}
    <h2>参数是：{{query}}</h2>
    <h2>参数是：{{$route.query}}，这里不用使用this</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      message: '我是vue router Profile'
    }
  },
  computed: {
    query() {
      return this.$route.query;
    }
  }
}
</script>

<style scoped>

</style>
