var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Guest\n');
  console.log("end request");
}).listen(1337, "127.0.0.1");
