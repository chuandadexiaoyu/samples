var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    var worker = cluster.fork();
    worker.on('message', function(mem) {
      if (mem.memory) {
        console.log(mem.memory);
      }
    });
  }
  
  cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died');
  });
} else {
  console.log("child process is starting!\n");
  http.Server(function(req, res) {
    console.log("Start Connect!");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Guest\n');
  }).listen(8000);

  setInterval(function reqport(){
    process.send({ memory: process.memoryUsage(), process: process.pid});
  }, 1000);
  
}
