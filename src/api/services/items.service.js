const axios = require('axios');
const config = require ('../../config/config');

const getItems = async query => {
  const res = await axios.get(`${config.items_url}?q=${query}&limit=${config.limit}`);
  return res.data;
}

module.exports = { getItems };
