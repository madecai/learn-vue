import {INCREASE_COUNT, INCREASE_COUNT2} from '@/store/mutations-type'

export default {
    increase(state) {
        state.counter++;
    },
    decrease(state) {
        state.counter--;
    },
    [INCREASE_COUNT](state, count) {
        state.counter += count;
    },
    // 传参方式二，传过来的是对象
    [INCREASE_COUNT2](state, payload) {
        state.counter += payload.count;
    },
    updatePerson(state) {
        // state.person.name = 'bbb'; // 修改，可以做到响应式
        // state.person['name'] = 'bbb'; // 修改，可以做到响应式
        // delete state.person.name; // 删除，做不到响应式
        // Vue.delete(state.person, 'name');
        // state.person.sex = 'male'; // 新增，做不到响应式
        Vue.set(state.person, 'sex', 'male');
    }
}