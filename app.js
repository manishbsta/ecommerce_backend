const express = require('express')
const app = express()

app.use(express.json())

//import routes
const routePrefix = '/api/'
const products = require('./routes/product')

app.use(routePrefix, products)

module.exports = app