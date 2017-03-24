/// <reference path="typings/node/node.d.ts"/>
//全局变量  node中的全局对象是global  所有全局变量都是global对象的属性
// 1. 在最外层定义的变量 node中的用户代码都是属于当前模块的，模块本身不是上下文
// 2. 全局对象的属性
// 3. 隐式定义的变量
// *. 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。

console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log("hello");
}

var t = setTimeout(printHello,5000);
clearTimeout(t);

var interval = setInterval(printHello,1000);//每隔1s调一下

setTimeout(function(){
    clearInterval(interval);
},5000);