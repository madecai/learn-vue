export default {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        updateName(state, payload) {
            console.log('updateName的payload', payload);
            state.name +='_li';
        }
    },
    actions: {
        // 这个context只会调自己模块的
       aUpdateName(context) {
           console.log(context);
            setTimeout(() => {
                context.commit('updateName');
            }, 1000);
       }
    },
    getters: {
        // rootState为根路径中的state
        fullname(state, getters, rootState) {
            return state.name + '_fullname' + rootState.counter;
        }
    }
}