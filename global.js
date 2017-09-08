console.time("获取数据")
console.log("__filename",__filename);
console.log("__dirname", __dirname);

setTimeout(function(){
    console.log("setTimeout")
},3000);

setInterval(function(){
    console.error("setInerval");
},1000);
console.timeEnd("获取数据")