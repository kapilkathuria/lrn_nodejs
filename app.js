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

// ths is for parsing - sent, form ect.
// differnt parser will be used for parsing files  json etc.
app.use(express.urlencoded({ extended: false }));

// first partameter: make it  url/admin/rest of routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);