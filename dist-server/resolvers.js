"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/* src/resolvers.js */
var resolvers = {
  users: function () {
    var _users = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, context) {
      var _yield$context, db;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return context();

            case 2:
              _yield$context = _context.sent;
              db = _yield$context.db;
              return _context.abrupt("return", db.collection("users").find().toArray());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function users(_x, _x2) {
      return _users.apply(this, arguments);
    }

    return users;
  }(),
  user: function () {
    var _user = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref, context) {
      var id, _yield$context2, db;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _ref.id;
              _context2.next = 3;
              return context();

            case 3:
              _yield$context2 = _context2.sent;
              db = _yield$context2.db;
              return _context2.abrupt("return", db.collection("users").findOne({
                id: id
              }));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function user(_x3, _x4) {
      return _user.apply(this, arguments);
    }

    return user;
  }()
};
var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map