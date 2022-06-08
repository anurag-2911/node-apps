
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


const filePath = path.join('../content/','testdata','test.txt');
console.log(filePath); // relative path
console.log(path.basename(filePath)); // just the file name with extension

const absolutePath = path.resolve(__dirname,'content','testdata','test.txt');
console.log(absolutePath);