/// <reference path="typings/node/node.d.ts"/>

//原型继承
var utils = require("util");

function Base(){
    this.name = "Base";
    this.base = 1994;
    this.sayHello = function(){
        console.log("hello",this.name);
    }
}

Base.prototype.showName = function(){ //原型中定义的函数
    console.log(this.name);
}

Base.prototype.age = 22;

function Sub(){
    this.name = "Sub";
}

utils.inherits(Sub,Base); // 原型继承  只会继承在原型中定义的函数和属性

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
console.log(objBase.age);

var objSub =  new Sub();
objSub.showName();
// objSub.sayHello();   报错
console.log(objSub);
console.log(objSub.age);


//==============================================================
