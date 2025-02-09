const express = require('express');
const router = express.Router();
const productController = require('../controllers');

// Define routes
router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);
router.get('/products/:productId', productController.getProductById);
router.put('/products/:productId', productController.updateProductById);
router.delete('/products/:productId', productController.deleteProductById);

module.exports = router;
