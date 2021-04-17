const Product = require('../models/product')

//create new product => admin/products
exports.createProduct = async (req, res, next) => {
    try {
        let product =
            await Product.create(req.body)

        res.status(201).json({
            success: true,
            data: product
        })
    } catch (error) {
        return res.json({
            success: false,
            data: [],
            error
        })
    }

}

//get single product => /product/{id}
exports.getProductById = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)

        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error: {
                message: 'Product with id ' + req.params.id + ' does not exist',
                ...error,
            }
        })
    }
}

//get all products => /products
exports.getProducts = async (req, res, next) => {
    try {
        let products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        })
    } catch (error) {
        res.json({
            success: false,
            data: [],
            error
        })
    }
}


//update product => admin/product/{id}
exports.updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)

        if(product) {
            try {
                let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true,
                    useFindAndModify: false
                })

                res.status(200).json({
                    success: true,
                    data: product,
                    message: 'Product updated successfully'
                })
            } catch (error) {
                res.json({
                    success: false,
                    data: [],
                    error
                })
            }
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            error: {
                message: 'Product with id ' + req.params.id + ' does not exist',
                ...error,
            }
        })
    }
}

//delete product => admin/product/{id}
exports.deleteProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)

        if (product) {
            try {
                await product.remove()
                res.json({
                    success: true,
                    data: [],
                    message: 'Product deleted'
                })
            } catch (error) {
                res.json({
                    success: false,
                    data: [],
                    error
                })
            }
        }
    } catch (error) {
        res.status(404).json({
            success: false,
            error: {
                message: 'Product with id ' + req.params.id + ' does not exist',
                ...error,
            }
        })
    }
}

