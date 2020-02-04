const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.post('/products', ProductController.store);
router.get('/products', ProductController.index);
router.get('/products/show/:id', ProductController.show);
router.put('/products/update/:id', ProductController.update); 
router.delete('/products/:id', ProductController.destroy); 

module.exports = router;