'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const shoppingModel =  schema(
{
	date: {type: Date, default: Date.now()},
	product : {type: Array},
	total: {type: Number, required: true}
})

module.exports = mongoose.model('Shopping', shoppingModel)