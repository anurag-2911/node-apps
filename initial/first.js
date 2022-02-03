var http = require('http');
var dateTime = require('./testModule');

http.createServer(function (req, res) {
  console.log('server starting ');
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('date time : ' + dateTime.MyDateTime());
  res.end();
  console.log('server started ');
}).listen(443);

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var testEventHandler = function () {
  console.log('recieved test event');
}

//Assign the eventhandler to an event:
eventEmitter.on('testEvent', testEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('testEvent');