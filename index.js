'use strict'

const mongooseDb = require('mongoose')
const bodyparser = require('body-parser') 
const config = require('./config')
const express = require('express')
const app = express()
const api = require('./route')

app.use(bodyparser.urlencoded({extends: false})) 
app.use(bodyparser.json())

app.use('/api', api)

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
})

mongooseDb.connect(config.db, (error, res) =>
{
	if(error)
	{
		 return console.log(`Error al conectar con base de datos: ${error}`)
	}
	else
	{
		console.log('conexion a la bd establecida')
		app.listen(config.port, () =>
		{
			console.log(`API REST Corriendo en http://localhost:${config.port}`);
		})
	}
})


