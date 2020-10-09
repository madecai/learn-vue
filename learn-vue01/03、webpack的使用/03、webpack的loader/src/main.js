// commonJs规范
const {flag, sum} = require('./js/mathUtils.js');
console.log(flag);
console.log(sum(1, 2));

// es6规范，和commonJs规范一起打包
import {age} from './js/info' 
console.log(age)

// 依赖css文件，这样才能把css打包进去
// require('./css/normal.css');
import css from './css/normal.css';

// 依赖less文件
require('./css/special.less');