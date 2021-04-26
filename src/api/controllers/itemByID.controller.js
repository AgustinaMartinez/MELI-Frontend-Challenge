const { getItemByID, getItemDescription } = require('../services/itemByID.service');

const getItemByIDdata = async id => {
  const result = await getItemByID(id);
  const result2 = await getItemDescription(id);
  let item = {
    author: {
      "name": "Agustina",
      "lastname": "Martínez"
    },
    item: {
      id: result?.data[0]?.body?.id,
      title: result?.data[0]?.body?.title,
      price: {
        currency: result?.data[0]?.body?.currency_id,
        amount: result?.data[0]?.body?.price,
        decimals: (result?.data[0]?.body?.price * 100) % 100,
      },
      picture: result?.data[0]?.body?.thumbnail,
      condition: result?.data[0]?.body?.condition,
      free_shipping: result?.data[0]?.body?.shipping?.free_shipping,
      sold_quantity: result?.data[0]?.body?.sold_quantity,
      description: result2?.data[0]?.body?.plain_text,
    }
  }
  return item;
}

module.exports = { getItemByIDdata };
