/*var buffer1 = new Buffer('菜鸟教程 ');
var  buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString())*/

/*var buffer1 = new Buffer(2);
var buffer2 = new Buffer(1);
var result = buffer1.compare(buffer2);

console.log(result);
*/
/*
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log(buffer2.toString());
*/

var buffer1 = new Buffer('runoob');
var buffer2 = buffer1.slice(0,2);
console.log(buffer2.toString());
console.log(buffer1.toString());
console.log(buffer2.length);