/// <reference path="typings/node/node.d.ts"/>
//文件系统
var fs = require('fs');
var buf = new Buffer(1024);
fs.open('typings.json','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('打开成功');
    console.log('准备读取');
    fs.read(fd,buf,0,buf.length,0,function(err,bytesCount){
        if(err){
           return console.error(err);
        }
        console.log(bytesCount+" 字节被读取");
        console.log(buf.slice(0,bytesCount).toString());
        fs.close(fd,function(err){
            if(err){
                return console.error(err);
            }
            console.log("关闭文件");
        });
    });
});

//创建文件夹
fs.exists("./file/", function (exists) { 
    if (exists) {
        writeNewFile();
    } else { 
        fs.mkdir("./file/", function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("创建文件夹成功");
            writeNewFile();
        });
    }
})

function writeNewFile() {
    //写文件
    fs.writeFile("./file/newFile.txt","新文件",function(err){
        if(err){
            return console.error(err);
        }
        console.log("写入文件成功");
        fs.unlink("./file/newFile.txt", function (err) { //删除文件
            if (err) {
                return console.error(err);
            }
            console.log("删除成功");
        });
    });
}