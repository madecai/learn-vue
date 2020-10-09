<template>
  <div>
    {{message}}
    <h2>userId是：{{userId}}</h2>
    <h2>userId是：{{$route.params.userId}}，这里不用使用this</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      message: '我是vue router user'
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
}
</script>

<style scoped>

</style>
