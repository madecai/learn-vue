import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from '@/store/modules/moduleA'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

// 1、安装插件
Vue.use(Vuex);

// 2、创建对象
const store = new Vuex.Store({
    // 保存共享状态（单一状态树）
    state: {
        counter: 1024,
        person: {name: 'aaa', age: 18}
    },
    // 操作共享状态，推荐mutations内的方法是同步方法，如果是异步的devtools将跟踪不到
    mutations,
    // 异步操作，可以穿参
    actions,
    // 类似计算属性（computed）
    getters,

    // 模块
    modules: {
        moduleA
    }
});

// 3、导出store对象
export default store;