/// <reference path="typings/node/node.d.ts"/>
var http = require("http");
var url = require("url");

function start(route){
    http.createServer(function(req,res){
        var pathName = url.parse(req.url).pathname;
        if(pathName!="/favicon.ico"){
            route(pathName);
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.write("HelloWorld");
            res.end();
        }
    
     }).listen(8888);
}
exports.start = start;