const express =  require('express');
var path = require('path');

const app = express();

app.use(express.static('../../public'));

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../../content/pages/index.html'),(err)=>{
        
        if(err){
            res.status(404).send('<h1>file not found</h1>');
        }
        
    });
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>');
})
app.listen(5555,()=>{
    console.log('server is listening on port 5555');
})