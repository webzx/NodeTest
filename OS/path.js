var path = require("path");

console.log("normalization:"+path.normalize("E:/wwwroot/github/NodeTest/OS"));

console.log("joint path:"+path.join("/test", "test1","2slashes/1slash", "tab",".."));

console.log("reslove:"+path.resolve("path.js"));

console.log("ext name :" +path.extname("path.js"));