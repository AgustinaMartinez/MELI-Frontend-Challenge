"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var express = require('express');

var _require = require('../controllers/items.controllers'),
    getItems = _require.getItems;

var router = express.Router();
router.get('/items', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var q, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            q = req.query.q;
            _context.next = 3;
            return getItems(q);

          case 3:
            result = _context.sent;

            if (result.items.length) {
              res.status(200).json(result);
            } else {
              res.status(404).json({
                message: 'Not found'
              });
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;