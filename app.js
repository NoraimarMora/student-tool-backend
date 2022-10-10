'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas
var userRoutes = require('./routes/user');
var careerRoutes = require('./routes/career');
var courseRoutes = require('./routes/course');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Rutas
app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', careerRoutes);

// Exportar
module.exports = app;
