/// <reference path="typings/node/node.d.ts"/>
//关于流
var fs = require("fs");
var data = "";
var readerStream = fs.createReadStream("typings.json");
readerStream.setEncoding("UTF8");
readerStream.on("data",function(chunk){
    data += chunk;
});
readerStream.on("end",function(){
    console.log(data);
});
readerStream.on("error",function(err){
    console.log(err.stack);
});

var writeData = "写入的文本\n1.哈哈哈";
var writerStream = fs.createWriteStream("output.txt");
writerStream.write(writeData,"UTF8",true);
writerStream.end();
writerStream.on("finish",function(){
    console.log("写入完成");
});
writerStream.on("error",function(err){
    console.log(err.chunk);
});

//利用管道拷贝
var pipeStream = fs.createWriteStream("pipeOut.txt");
readerStream.pipe(pipeStream);

// 链式流
var zlib = require("zlib");
// fs.createReadStream("typings.json")
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream("typings.txt.gz"));

// 解压  
var unZipData = "";
var unZipStream = fs.createReadStream("typings.txt.gz").pipe(zlib.createGunzip());
unZipStream.on("data",function(chunk){
    unZipData += chunk;
});
unZipStream.on("end",function(){
    console.log("解压结果:"+unZipData);
});
unZipStream.on("error",function(err){
    console.log(err.stack);
});