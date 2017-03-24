/// <reference path="typings/node/node.d.ts"/>
//buffer
var buf = new Buffer(2);
var len = buf.write("www.runoob.com");
var end = buf.toString();
console.log(len+"==>"+end);