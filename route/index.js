'use strict'

const express = require('express')
const productController = require('../controller/product')
const shoppingController = require('../controller/shopping')
const api = express.Router()

api.get('/product', productController.getProducts)

api.post('/product', productController.saveProduct)

api.put('/product/:id', productController.updatedProduct)

api.get('/shopping', shoppingController.getShopping) 

api.post('/shopping', shoppingController.saveShopping)



module.exports = api