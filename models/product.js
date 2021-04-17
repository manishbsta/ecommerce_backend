const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Please enter the product's name`],
        trim: true,
        maxLength: [100, `Product name can not be more than 100 characters long`]
    },
    price: {
        type: Number,
        required: [true, `Please enter the product's price`],
        maxLength: [100, `Price can not be more than 5 characters long`],
        default: 0.0,
    },
    description: {
        type: String,
        required: [true, `Please enter the product's description`],
    },
    rating: {
        type: Number,
        default: 0.0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [true, `Please select the product's category`],
        enum: {
            values: [
                'electronics',
                'camera',
                'laptop',
                'accessories',
                'headphone',
                'food',
                'books',
                'cloths',
                'shoes',
                'sports',
                'outdoor'],

            message: 'Please select correct category for product',
        },
    },
    seller: {
        type: String,
        required: [true, `Please enter the product's seller`],
    },
    stock: {
        type: Number,
        required: [true, `Please enter the product's stock`],
        maxLength: [5, `Please enter the product's stock value`],
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema)