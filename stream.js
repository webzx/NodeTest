/*var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream('input.text');
readerStream.setEncoding("UTF8");

readerStream.on('data', function (chunk) {
    data += chunk;
    //console.log(chunk,"-");
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log("e",err.stack);
});

console.log("over");

var fs = require("fs");
var data = "菜鸟教程官网地址：www.runoob.com";

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF-8');

writerStream.end();
writerStream.on('finish', function(){
    console.log("写入完成。");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");

var fs = require("fs");
var readStream = fs.createReadStream("input.text");
var writeStream = fs.createWriteStream("output.txt");
readStream.pipe(writeStream);
console.log("程序执行完毕");


var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.text").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
console.log("文件压缩完成。");
*/

var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("xx.txt"));
console.log("文件解压完成。");