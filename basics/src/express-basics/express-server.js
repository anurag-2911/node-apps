const express = require('express');

const app = express();

app.use(express.static('../../public'));

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
})

app.get('/api/products/', (req, res) => {
    const { product } = require('../../content/testdata/data');
    const p1 = product.map((product) => {
        const { id, price, name } = product;
        return { id, price, name };
    })
    res.json(p1);
});

app.get('/api/products/:pid', (req, res) => {
    console.log('request parameters ' + JSON.stringify(req.params));
    console.log('req param id ' + req.params.pid);

    const { product } = require('../../content/testdata/data');
    const p = product.find((product) => product.id === Number(req.params.pid))
    if (!p) {
        return res.status(404).send('<h1>product doesnt exist !</h1>');
    }
    res.json(p);
});

// returns a json object
app.get('/json', (req, res) => {
    const { product } = require('../../content/testdata/data');
    res.json(product);
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
})
app.listen(5555, () => {
    console.log('server is listening on port 5555');
})