"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemsData = exports.getItems = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _config = require("../../config/config");

var getItems = _axios["default"].get("".concat(_config.config.items_url, "?q=vasos")).then(function (res) {
  var itemsArray = [];
  return itemsArray = {
    author: {
      "name": "Agustina",
      "lastname": "Martínez"
    },
    categories: res.data.filters[0].values[0].path_from_root.map(function (path) {
      return path.name;
    }),
    items: res.data.results.map(function (result) {
      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimal: result.price * 100 % 100
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
      };
    })
  };
})["catch"](function (error) {
  console.log(error);
});

exports.getItems = getItems;

var getItemsData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var items;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getItems;

          case 2:
            items = _context.sent;
            res.status(200).json(items);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getItemsData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getItemsData = getItemsData;