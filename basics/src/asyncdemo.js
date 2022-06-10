const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('home page');
        res.end('home page');
    }
    else if (req.url === '/about') {
        console.log('about page');
        // blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i}: ${j}`);
            }
        }
        res.end('about page');
    }
    else {
        res.end('cool page');
    }

});

server.listen(5555, () => {
    console.log('server started');
})

const {readFile} = require('fs');
const path = require('path');
const readFilePath = path.join('../content', 'testdata', 'test.txt');

const readText = (readFilePath) =>{
    return new Promise((resolve,reject)=>{
        readFile(readFilePath, 'utf-8', (err, data) => {
            if (err) {
                console.log(`error in reading ${readFilePath} , ${err}`);
                return reject(err);
            }
            else {

                console.log(data);
                return resolve(data);
            }
        
        
        });

    });
}


readText(readFilePath)
.then((result)=>console.log(result))
.catch((err)=> console.log(err));