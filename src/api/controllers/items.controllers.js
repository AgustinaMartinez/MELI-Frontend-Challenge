const axios = require('axios');
const config = require('../../config/config');

const getItems = query => {
  return new Promise((resolve, reject) => {
    axios.get(`${config.items_url}?q=${query}&limit=${config.limit}`)
    .then(res => {
      let items = {
        author: {
          "name": "Agustina",
          "lastname": "Martínez"
        },
        categories: res?.data?.filters[0]?.values[0]?.path_from_root.map(path => path.name),
        items: res?.data?.results.map(result => {
          return {
            id: result?.id,
            title: result?.title,
            price: {
              currency: result?.currency_id,
              amount: result?.price,
              decimal: (result?.price * 100) % 100
            },
            picture: result?.thumbnail,
            condition: result?.condition,
            free_shipping: result?.shipping?.free_shipping
          }
        })
      };
      resolve (items);
    })
    .catch(error => {
      reject(error);
    });
  })
}

module.exports = { getItems };
