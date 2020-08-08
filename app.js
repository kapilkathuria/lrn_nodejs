// core paackages
const http = require('http');

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

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);