// core paackages
const http = require('http');

// express related packages
const express = require ('express');

// other third party packges

// my internal packages

// crate app
const app = express();

// use method allows us add middleware. app.use code block is middleware
// this wil be called for all incoming requests
// next: is anothe rfunction which will be tel lwhich next middleware need to be executed
//  unless next is called code remains in current code block
app.use((req, res, next) => {
    console.log ('in middleware');
    next();  //allows next middleware to be called otherwise code execution remain sin current middleware
})

// res.send closes the middleware part and response is sent out 
//  are res.send as wll code won't move to next code block.
app.use((req, res, next) => {
    console.log ('in another middleware');
    res.send('<h1>hello from express</h1>');
})

const server = http.createServer(app);

server.listen(3000);