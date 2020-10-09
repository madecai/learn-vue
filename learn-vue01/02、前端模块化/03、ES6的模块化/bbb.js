import {flag, sum} from "./aaa.js"
console.log(flag);
console.log(sum(1, 2));
console.log('分割线===============================================================');

import {name} from "./aaa.js"
console.log(name);
console.log('分割线===============================================================');

import {sub, Person} from "./aaa.js"
console.log(sub(2, 1));
const p = new Person('p');
p.run();
console.log('分割线===============================================================');

import addr from "./aaa.js"
console.log(addr);
console.log('分割线===============================================================');

// 全部导入，并起别名aaa
import * as aaa from './aaa.js'
console.log(aaa.flag)