/// <reference path="typings/node/node.d.ts"/>
//事件驱动
var event = require("events");

var eventEmitter = new event.EventEmitter();
//只会触发一次
eventEmitter.once("connection",function connected(name,age){
    console.log(name+"去年"+age);
    eventEmitter.emit("data_received",name,age+1);
});

eventEmitter.on("data_received",function(name,age){
    console.log(name+"今年"+age);
    eventEmitter.emit("end",name,age*2);
});

eventEmitter.on("end",function(name,age){
    console.log(name+"在"+age+"死了");
});

var listener = function listener(){
    console.log("========");
}
eventEmitter.addListener("data_received",listener);
listenerCount = eventEmitter.listenerCount(eventEmitter,'data_received');
eventEmitter.emit("connection","张三",22);
console.log(listenerCount);