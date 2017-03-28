/// <reference path="typings/node/node.d.ts"/>

// GET - 用于获取数据。
// PUT - 用于更新或添加数据。
// DELETE - 用于删除数据。
// POST - 用于添加数据。

var express = require("express");
var app = express();
var fs = require("fs");

//获取Lists
app.get("/listUsers", function (req, res) {
    fs.readFile(__dirname + "/users.json", "UTF8", function (err, data) {
        console.log(data);
        res.end(data);
    })
})

//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get("/addUser", function (req, res) {
    fs.readFile(__dirname + "/users.json", "UTF8", function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})

//删除用户
app.get("/deleteUser", function (req, res) {
    fs.readFile(__dirname + "/users.json", "UTF8", function (err, data) {
        if (err) {
            console.error(err.stack);
        }
        var users = JSON.parse(data);
        delete users["user" + 2];
        console.log(users);
        res.end(JSON.stringify(users));
    })
})

//按id查找用户
app.get("/:id", function (req, res) {
    fs.readFile(__dirname + "/users.json", "UTF8", function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    })
})

app.listen(8888, function () { 
    console.log("服务器已启动");
})