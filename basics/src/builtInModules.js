
// os module
const os = require('os');
console.log(os.userInfo());
console.log(`os uptime is ${os.uptime() / 60} minutes`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);

// path module
const path = require('path');
console.log(path.sep);


const filePath = path.join('../content/', 'testdata', 'test.txt');
console.log(filePath); // relative path
console.log(path.basename(filePath)); // just the file name with extension

const absolutePath = path.resolve(__dirname, 'content', 'testdata', 'test.txt');
console.log(absolutePath);

// fs module

// fs sync functions
const { readFileSync, writeFileSync, fstat } = require('fs');

const readFilePath = path.join('../content', 'testdata', 'test.txt');
const writeFilePath = path.join('../content', 'testdata', 'writefile01.txt');
const filecontent = readFileSync(readFilePath, 'utf-8');
writeFileSync(writeFilePath, `writing : ${filecontent}`);
console.log(filecontent);
const verifyWrite = readFileSync(writeFilePath, 'utf-8');
console.log(verifyWrite);

// fs async functions

const { readFile, writeFile } = require('fs');

readFile(readFilePath, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`async read result : ${data}`);
});

writeFile(writeFilePath,'hello async world',{'flag':'a'},(err,data)=>{
if(err)
{
    console.log(err);
    return;
}
console.log('write async ' + data);
});

