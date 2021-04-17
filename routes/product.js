const express = require('express')
const router = express.Router()

const {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

router.route('/products').get(getProducts)
router.route('/admin/products/').post(createProduct)
router.route('/product/:id').get(getProductById)
router.route('/admin/product/:id').put(updateProduct)
router.route('/admin/product/:id').delete(deleteProduct)

module.exports = router