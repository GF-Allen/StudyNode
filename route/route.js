/// <reference path="typings/node/node.d.ts"/>

//路由  类似Springmvc的controller  用于处理不同的请求
function route(pathName){
    console.log("请求地址:"+pathName);
}

exports.route = route;