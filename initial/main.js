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
var data = 'some sample';

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

function pipeStream(){
  
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('data.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("pipe stream complete");
}

function chainStream() {
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('data.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('data.txt.gz'));
  
console.log("File Compressed.");

}

function fileRead() {
  var fs = require("fs");

// Asynchronous read
fs.readFile('data.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('data.txt');
console.log("Synchronous read: " + data.toString());

console.log("fileRead complete");
}

function fileStat() {

var fs = require("fs");

console.log("Going to get file info!");

fs.stat('data.txt', (err,stats)=>readFileInfo(err, stats));

}

function readFileInfo(err,stats){
  if (err) {
    return console.error(err);
 }
  console.log(stats);
  console.log("Got file info successfully!");
  
  // Check file type
  console.log("isFile ? " + stats.isFile());
  console.log("isDirectory ? " + stats.isDirectory());
}


readStream();
writeStream();
pipeStream();
chainStream();
fileRead();
fileStat();


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