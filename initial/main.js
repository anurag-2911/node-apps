var http = require('http');
var dateTime = require('./testModule');

// streams


function readStream() {

  var fs = require('fs');

  var data = '';
  var readStream = fs.createReadStream('data.txt');
  readStream.setEncoding('utf8');

  readStream.on('data',function(chunk){
    data += chunk;
  })

  readStream.on('end', function(){
    console.log(data);
  });

  readStream.on('error', function(err){
  console.log(err.stack);
  });

  console.log('end of function readStream');
}

function writeStream() {

var fs = require("fs");
var data = 'some sample text';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("end of function writeStream");

}

readStream();
writeStream();


// http server
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