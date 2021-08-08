const express = require('express')
const router = express.Router()
const product = require('../controllers/ProductController')

router.get('/get', product.getProduct)
router.post('/post', product.addProduct)
router.delete('/:id/delete', product.deleteProduct)
router.put('/:id/update', product.updateProduct)

module.exports = router