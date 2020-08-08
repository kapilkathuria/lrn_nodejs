const path = require('path');

const express = require ('express');

// express.Router is mini express app which can  be 
//  used in other express app
const router = express.Router();

// rember '/' matches all i.e. it also matches /add-product
//  but since respnse is sent from above, code never reches below code block
router.get('/', (req, res, next) => {
    // res.send('<h1>hello from express</h1>');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;