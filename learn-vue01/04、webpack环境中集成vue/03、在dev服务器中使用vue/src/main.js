// commonJs规范
const {flag, sum} = require('./mathUtils.js');
console.log(flag);
console.log(sum(1, 2));

// es6规范，和commonJs规范一起打包
import {age} from './info' 
console.log(age)