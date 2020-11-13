// core paackages
const http = require('http');
const path = require('path');

// express related packages
const express = require ('express');
const bodyParser = require('body-parser');

// other third party packges
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// my internal packages

// crate app
const app = express();

// middleware can be called by using app.use
// next here specifies the next middleware which will be called
// app.use((req, res, next) => {
//     console.log("In the middleware")
//     next(); //allows request to go to next middleware
// })
// app.use((req, res, next) => {
//     console.log("In the second middleware")
//     res.send('<h1>Hello from express 2nd middleware </h1>')
// })

// ths is for parsing - sent, form ect.
// differnt parser will be used for parsing files  json etc.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

// first partameter: make it  url/admin/rest of routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // handle page not found.
    // sets error message
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3001);