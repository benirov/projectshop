'use strict'

const Product = require('../model/product')

function getProducts(req, res)
{

	Product.find({}, (error, product) =>
	{

		if(error)
		{
			return res.status(500).send({messaje: `Error al realizar la peticion: ${error}`})
		}
		else if(!product || product == '')
		{
			return res.status(404).send({messaje: `No existen productos en la base de datos`})
		}
		else
		{
		res.status(200).send({product})
		}
	});
	
}

function saveProduct(req, res)
{
	let product = new Product();
	product.name = req.body.name
	product.description = req.body.description
	product.image = req.body.image
	product.price = req.body.price
	product.save((error, saveProduct) =>
	{
		if(error)
		{
			res.status(500).send({message: `Error al guardar producto : ${error}`})
		}
		else
		{
			res.status(200).send({message: `producto guardado con id : ${saveProduct}`});
		}
	});
	
}

function updatedProduct(req, res)
{
	let id = req.params.id
	let dataUpdated = req.body
	Product.findByIdAndUpdate(id, dataUpdated, (error, productUdated) =>
	{
		if(error)
		{
			return res.status(500).send({messaje: `Error al realizar la peticion: ${error}`})
		}
		else
		{
			res.status(200).send({product: productUdated});
		}
	});
}



module.exports =
{
	getProducts,
	updatedProduct,
	saveProduct
}