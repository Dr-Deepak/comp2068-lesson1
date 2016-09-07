var http = require('http');

// Usse callback to start http server
http.createServer(function(request,response){
  //Start th e http server with access to the request & response objects

  response.writeHead(200); // request ok
  response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');
