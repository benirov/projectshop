'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const productModel = schema(
{
 name: String,
 description: String,
 image: String,
 price: {type: Number, default: 0}

});

module.exports = mongoose.model('Product', productModel)
