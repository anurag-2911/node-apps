const express =  require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('hello from my express server');
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>');
})
app.listen(5555,()=>{
    console.log('server is listening on port 5555');
})