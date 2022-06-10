const {createReadStream} = require('fs');

const path = require('path');

const readFilePath = path.join('../content/testdata/test.txt');

const stream = createReadStream(readFilePath);

stream.on('data',(result)=>{
console.log('length of data in this chunk ' + result.length);    
// console.log('data: ' + result);
});

stream.on('error',(err)=>{
    console.log('error in reading stream ' + err);
})
var fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
   const readStream = fs.createReadStream(readFilePath,'utf-8');
   readStream.on('open',()=>{
    readStream.pipe(res);
   })
   readStream.on('error',(err)=>{
    console.log('error in reading stream '+ err);
   })

})

server.listen(5555);

