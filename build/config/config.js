"use strict";

var dotenv = require('dotenv');

dotenv.config();
module.exports = {
  port: process.env.PORT,
  items_url: 'https://api.mercadolibre.com/sites/MLA/search',
  items_byID: 'https://api.mercadolibre.com/items',
  limit: 4
};