// 1、解决全局变量污染问题，使用闭包解决
// 2、解决代码不能复用问题，返回一个模块变量，可以在其他模块中使用此模块方法及变量
var moduleA = (function(){

    var exportObj = {};

    var flag = true;
    if(flag){
        console.log('aaa.js中flag为true')
    }
    function sum (a, b) {
        return a + b;
    }

    exportObj.flag = flag;
    exportObj.sum = sum;
    return exportObj;

})()