// 导入
import Vue from 'vue';

// 导入子组件
import Cpn from './vue/Cpn';
// 以.vue文件方式导入子组件
import App from './vue/App.vue';

new Vue({
    el: '#app',
    template: `
    <div>
        <Cpn></Cpn>
        <App></App>
    </div>`,
    components: {
        Cpn,
        App
    }
});