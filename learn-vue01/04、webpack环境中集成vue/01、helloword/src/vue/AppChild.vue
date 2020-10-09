<template>
    <div>{{message}}</div>
</template>

<script>
export default {
    name: 'AppChild',
    data() {
        return {
            message: '我是AppChild.vue中的组件'
        }
    }
}
</script>
<style scoped>

</style>