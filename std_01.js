/// <reference path="typings/node/node.d.ts"/>
// var http = require("http");
// http.createServer(function(request,reponse){
//     reponse.writeHead(200,{'Content-Type':'text/plain'});
//     reponse.end("Hello Node.js");
// }).listen(8888);

var fs = require("fs");
// var data = fs.readFileSync("typings.json");
// console.log(data.toString());

fs.readFile("typings.json",function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
console.log("程序执行结束");