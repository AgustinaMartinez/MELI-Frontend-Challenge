"use strict";

var axios = require('axios');

var config = require('../../config/config');

var getItems = function getItems(query) {
  return new Promise(function (resolve, reject) {
    axios.get("".concat(config.items_url, "?q=").concat(query, "&limit=").concat(config.limit)).then(function (res) {
      var _res$data, _res$data$filters$, _res$data$filters$$va, _res$data2;

      var items = {
        author: {
          "name": "Agustina",
          "lastname": "Martínez"
        },
        categories: res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$filters$ = _res$data.filters[0]) === null || _res$data$filters$ === void 0 ? void 0 : (_res$data$filters$$va = _res$data$filters$.values[0]) === null || _res$data$filters$$va === void 0 ? void 0 : _res$data$filters$$va.path_from_root.map(function (path) {
          return path.name;
        }),
        items: res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.results.map(function (result) {
          var _result$shipping;

          return {
            id: result === null || result === void 0 ? void 0 : result.id,
            title: result === null || result === void 0 ? void 0 : result.title,
            price: {
              currency: result === null || result === void 0 ? void 0 : result.currency_id,
              amount: result === null || result === void 0 ? void 0 : result.price,
              decimal: (result === null || result === void 0 ? void 0 : result.price) * 100 % 100
            },
            picture: result === null || result === void 0 ? void 0 : result.thumbnail,
            condition: result === null || result === void 0 ? void 0 : result.condition,
            free_shipping: result === null || result === void 0 ? void 0 : (_result$shipping = result.shipping) === null || _result$shipping === void 0 ? void 0 : _result$shipping.free_shipping
          };
        })
      };
      resolve(items);
    })["catch"](function (error) {
      reject(error);
    });
  });
};

module.exports = {
  getItems: getItems
};