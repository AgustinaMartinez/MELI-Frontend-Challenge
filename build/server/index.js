"use strict";

var express = require('express');

var config = require('../config/config');

var itemsRouter = require('../api/routes/items.routes');

var itemByIDRouter = require('../api/routes/itemByID.routes'); // Inizialization


var app = express(); // Middlewares

app.use(express.json()); // Settings

app.set('port', config.port); // Routes

app.use('/api', itemsRouter);
/*http://localhost:3001/api/items*/

app.use('/api', itemByIDRouter);
/*http://localhost:3001/api/items/:id*/

app.use('/', function (req, res) {
  res.json('Welcome to Mercado Libre API REST!');
});
/*http://localhost:3001/*/

app.listen(app.get('port'), function () {
  console.log("Server on port ".concat(app.get('port')));
});