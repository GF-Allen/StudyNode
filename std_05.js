/// <reference path="typings/node/node.d.ts"/>
//模块的使用

var Hello = require("./hello/hello");
// hello.hello();
var hello = new Hello();
hello.setName("张三");
hello.sayHello();
hello.test(1);
hello.test(1,1);