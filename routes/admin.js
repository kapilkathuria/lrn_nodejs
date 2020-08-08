// handles creation of the product which admin can do
const path = require('path');

const express = require ('express');

// express.Router is mini express app which can  be 
//  used in other express app
const router = express.Router();

// Routing - app.use('/route) - is usesd for routing
// res.send closes the middleware part and response is sent out 
//  are res.send as wll code won't move to next code block.
router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// app.get is same as app.use but will  work only when get request is fired
router.post('/product', (req, res, next) => {
    console.log(req.body);
    // you will undefined for above log unless 'body-parser' pkg is used
    // rediects to /
    res.redirect('/')
});

module.exports = router;