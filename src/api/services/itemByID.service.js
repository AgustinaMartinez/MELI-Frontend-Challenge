const axios = require('axios');
const config = require ('../../config/config');

const getItemByID = async id => {
  const result = await axios.get(`${config.items_byID}?ids=${id}`);
  return result;
}

const getItemDescription = async id => {
  const result = await axios.get(`${config.items_byID}?ids=${id}/description`);
  return result;
}

module.exports = { getItemByID, getItemDescription };
