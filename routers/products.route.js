const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

router.get('/products/', productController.list);
router.post('/products/', productController.add);
router.get('/getProduct/:sku', productController.showBySku);
router.get('/products/:id', productController.show);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

module.exports = router;