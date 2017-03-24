/// <reference path="typings/node/node.d.ts"/>
//模块的使用
// 通过exports对象把hello作为模块的访问接口  hello()作为exprots对象的成员函数
// exports.hello = function(){
//     console.log("Hello World");
// }

//外部输入的对象是World
function World(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    }
    this.sayHello = function(){
        console.log("Hello"+name);
    }
    //没有类似JAVA的重写，方法只会走后定义的
    this.test = function(aa){
        console.log(aa);
    }
    this.test = function(aa,bb){
        console.log(aa+bb);
    }
}

module.exports = World;