export default {
    powerCounter(state) {
        return state.counter * state.counter;
    },
    powerCounter_1(state, getters) {
        // 第二个参数就是getters
        return getters.powerCounter + 1;
    },
    powerCounter_n(tate, getters) {
        // 返回一个函数，参数是n
        return n => getters.powerCounter + n;
    }
}