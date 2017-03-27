/// <reference path="typings/node/node.d.ts"/>

var express = require("express");
var app = express();

app.get("/", function (req, res) { 
    res.send("Hello World");
})

app.get("/app/", function (req, res) {
    res.send("app");
})

app.post("/post", function (req, res) { 
    res.json("{'name':'张翰'}");
})

var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/cookie", function (req, res) {
    console.log(req.cookies);
    res.json("{'name':'张翰'}");
})

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问的地址为：http://"+host+":"+port);
})