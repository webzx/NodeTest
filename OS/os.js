var http = require("http");
var os = require("os");

http.createServer(function (req, res) {
    res.write("os.tmpdir():"+os.tmpdir()+"\n");
    res.write("os.endianness():"+os.endianness()+"\n");
    res.write("os.hostname():"+os.hostname()+"\n");
    res.write("os.type():"+os.type()+"\n");
    res.write("os.platform():"+os.type()+"\n");
    res.write("os.arch():"+os.arch()+"\n");
    res.write("os.release():"+os.release()+"\n");
    res.write("os.uptime():"+os.uptime()+"\n");
    res.write("os.loadavg():"+os.loadavg()+"\n");
    res.write("os.totalmem():"+os.totalmem()+"\n");
    res.write("os.freemem():"+os.freemem()+"\n");
    res.write("os.cpus():"+os.cpus()+"\n");
    res.write("os.networkInterfaces():"+os.networkInterfaces()+"\n");
    res.end();
}).listen(3000);