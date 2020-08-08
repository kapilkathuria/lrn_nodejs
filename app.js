// core paackages
const http = require('http');

// express related packages
const express = require ('express');
const bodyParser = require('body-parser');

// other third party packges

// my internal packages

// crate app
const app = express();

// ths is for parsing - sent, form ect.
// differnt parser will be used for parsing files  json etc.
app.use(express.urlencoded({ extended: false }));

// Routing - app.use('/route) - is usesd for routing
// res.send closes the middleware part and response is sent out 
//  are res.send as wll code won't move to next code block.
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// app.get is same as app.use but will  work only when get request is fired
app.post('/product', (req, res, next) => {
    console.log(req.body);
    // you will undefined for above log unless 'body-parser' pkg is used
    // rediects to /
    res.redirect('/')
});

// rember '/' matches all i.e. it also matches /add-product
//  but since respnse is sent from above, code never reches below code block
app.use('/', (req, res, next) => {
    res.send('<h1>hello from express</h1>');
})

app.listen(3000);