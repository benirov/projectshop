'use strict'

const Shopping = require('../model/shopping')

function getShopping(req, res)
{
	Shopping.find({}).sort({date: -1}).exec((error, shopping) =>
	{

		if(error)
		{
			return res.status(500).send({messaje: `Error al realizar la peticion: ${error}`})
		}
		else if(!shopping || shopping == '')
		{
			return res.status(404).send({messaje: `No existen compras en la base de datos`})
		}
		else
		{
		res.status(200).send({shopping})
		}
	});
	
}

function saveShopping(req, res)
{
	let shopping = new Shopping();
	shopping.date = req.body.date
	shopping.product = req.body.product
	shopping.total = req.body.total
	shopping.save((error, saveShopping) =>
	{
		if(error)
		{
			res.status(500).send({message: `Error al guardar compra : ${error}`})
		}
		else
		{
			res.status(200).send({message: `producto guardado con id : ${saveShopping}`});
		}
	});
	
}



module.exports =
{
	getShopping,
	saveShopping
}