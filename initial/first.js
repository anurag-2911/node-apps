var http = require('http');
var dateTime = require('./testModule');

http.createServer(function (req, res) {
  console.log('server starting ');
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('date time : ' + dateTime.MyDateTime());
  res.end();
  console.log('server started ');
}).listen(443);