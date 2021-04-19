"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var axios = require('axios');

var config = require('../../config/config');

var getItemByID = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var _result$data$, _result$data$$body, _result$data$2, _result$data$2$body, _result$data$3, _result$data$3$body, _result$data$4, _result$data$4$body, _result$data$5, _result$data$5$body, _result$data$6, _result$data$6$body, _result$data$7, _result$data$7$body, _result$data$8, _result$data$8$body, _result$data$8$body$s, _result$data$9, _result$data$9$body, _result2$data$, _result2$data$$body;

    var result, result2, item;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get("".concat(config.items_byID, "?ids=").concat(id));

          case 2:
            result = _context.sent;
            _context.next = 5;
            return axios.get("".concat(config.items_byID, "?ids=").concat(id, "/description"));

          case 5:
            result2 = _context.sent;
            item = {
              author: {
                "name": "Agustina",
                "lastname": "Martínez"
              },
              item: {
                id: result === null || result === void 0 ? void 0 : (_result$data$ = result.data[0]) === null || _result$data$ === void 0 ? void 0 : (_result$data$$body = _result$data$.body) === null || _result$data$$body === void 0 ? void 0 : _result$data$$body.id,
                title: result === null || result === void 0 ? void 0 : (_result$data$2 = result.data[0]) === null || _result$data$2 === void 0 ? void 0 : (_result$data$2$body = _result$data$2.body) === null || _result$data$2$body === void 0 ? void 0 : _result$data$2$body.title,
                price: {
                  currency: result === null || result === void 0 ? void 0 : (_result$data$3 = result.data[0]) === null || _result$data$3 === void 0 ? void 0 : (_result$data$3$body = _result$data$3.body) === null || _result$data$3$body === void 0 ? void 0 : _result$data$3$body.currency_id,
                  amount: result === null || result === void 0 ? void 0 : (_result$data$4 = result.data[0]) === null || _result$data$4 === void 0 ? void 0 : (_result$data$4$body = _result$data$4.body) === null || _result$data$4$body === void 0 ? void 0 : _result$data$4$body.price,
                  decimals: (result === null || result === void 0 ? void 0 : (_result$data$5 = result.data[0]) === null || _result$data$5 === void 0 ? void 0 : (_result$data$5$body = _result$data$5.body) === null || _result$data$5$body === void 0 ? void 0 : _result$data$5$body.price) * 100 % 100
                },
                picture: result === null || result === void 0 ? void 0 : (_result$data$6 = result.data[0]) === null || _result$data$6 === void 0 ? void 0 : (_result$data$6$body = _result$data$6.body) === null || _result$data$6$body === void 0 ? void 0 : _result$data$6$body.thumbnail,
                condition: result === null || result === void 0 ? void 0 : (_result$data$7 = result.data[0]) === null || _result$data$7 === void 0 ? void 0 : (_result$data$7$body = _result$data$7.body) === null || _result$data$7$body === void 0 ? void 0 : _result$data$7$body.condition,
                free_shipping: result === null || result === void 0 ? void 0 : (_result$data$8 = result.data[0]) === null || _result$data$8 === void 0 ? void 0 : (_result$data$8$body = _result$data$8.body) === null || _result$data$8$body === void 0 ? void 0 : (_result$data$8$body$s = _result$data$8$body.shipping) === null || _result$data$8$body$s === void 0 ? void 0 : _result$data$8$body$s.free_shipping,
                sold_quantity: result === null || result === void 0 ? void 0 : (_result$data$9 = result.data[0]) === null || _result$data$9 === void 0 ? void 0 : (_result$data$9$body = _result$data$9.body) === null || _result$data$9$body === void 0 ? void 0 : _result$data$9$body.sold_quantity,
                description: result2 === null || result2 === void 0 ? void 0 : (_result2$data$ = result2.data[0]) === null || _result2$data$ === void 0 ? void 0 : (_result2$data$$body = _result2$data$.body) === null || _result2$data$$body === void 0 ? void 0 : _result2$data$$body.plain_text
              }
            };
            return _context.abrupt("return", item);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getItemByID(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  getItemByID: getItemByID
};