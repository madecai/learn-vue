// 想使用aaa.js中的属性及方法
// 分号用于多个闭包分割
;var moduleB = (function() {
    console.log('bbb.js文件中打印aaa.js中的flag', moduleA.flag);
    console.log('bbb.js文件中使用aaa.js中的sum方法', moduleA.sum(1, 2));
})()