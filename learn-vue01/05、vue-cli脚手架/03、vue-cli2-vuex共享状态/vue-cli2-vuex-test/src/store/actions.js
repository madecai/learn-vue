export default {
    aUpdatePerson(context, payload) {
        console.log(payload)
        setTimeout(() => {
            context.commit('updatePerson');
            payload && typeof payload.success == 'function' && payload.success('修改成功');
        }, 1000);
    },
    // 回调写法二（推荐）
    aUpdatePerson2(context, payload) {
        return new Promise((resolve, reject) => {
            console.log(payload)
            setTimeout(() => {
                context.commit('updatePerson');
                resolve('修改成功2');
            }, 1000);
        });
    }
}