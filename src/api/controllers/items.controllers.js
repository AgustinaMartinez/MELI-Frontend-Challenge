const { getItems } = require('../services/items.service');

const getItemsData = query => {
  return new Promise((resolve, reject) => {
    getItems(query)
    .then(res => {
      let items = {
        author: {
          "name": "Agustina",
          "lastname": "Martínez"
        },
        categories: res?.filters[0]?.values[0]?.path_from_root.map(path => path.name),
        items: res?.results.map(result => {
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

module.exports = { getItemsData };
