var flag = true;
if(flag){
    console.log('aaa.js中flag为true')
}
function sum (a, b) {
    return a + b;
}

// 导出方式一
export {
    flag, sum
}

// 导出方式二
export var name = 'aaa name';

// 导出方式三，函数/类
export function sub(a, b) {
    return a - b;
}
export class Person {
    constructor (pname ,age) {
        this.name = pname;
        this.age = age;
    }
    run() {
        console.log(this.name + '在奔跑')
    }
}

// 导出方式四，只能有一个default，导入时可以自己来命名
const address = '北京市';
export default address;
// export default function() {}

// 导入时候可以使用 import * as aaa from './aaa.js'