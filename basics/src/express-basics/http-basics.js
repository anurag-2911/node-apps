var http = require('http');

var server = http.createServer((req,res)=>{

    console.log('request came ');
    
    console.log(req.url);

    console.log(req.method);
    
    res.writeHead(200,{'content-type':'text/html'});

    res.write('<h1>hello world</h1>')

    res.end();

})

server.listen(5555);