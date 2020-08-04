"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startDatabase = startDatabase;
exports.stopDatabase = stopDatabase;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongodbMemoryServer = require("mongodb-memory-server");

var _mongodb = require("mongodb");

var _data = require("./data");

/* src/database.js */
var database = null;
var mongo = new _mongodbMemoryServer.MongoMemoryServer();

function startDatabase() {
  return _startDatabase.apply(this, arguments);
}

function _startDatabase() {
  _startDatabase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var mongoDBURL, connection;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mongo.getConnectionString();

          case 2:
            mongoDBURL = _context.sent;
            _context.next = 5;
            return _mongodb.MongoClient.connect(mongoDBURL, {
              useNewUrlParser: true
            });

          case 5:
            connection = _context.sent;

            if (database) {
              _context.next = 10;
              break;
            }

            database = connection.db();
            _context.next = 10;
            return database.collection("users").insertMany(_data.Users);

          case 10:
            return _context.abrupt("return", database);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startDatabase.apply(this, arguments);
}

function stopDatabase() {
  return _stopDatabase.apply(this, arguments);
}

function _stopDatabase() {
  _stopDatabase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return mongo.stop();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _stopDatabase.apply(this, arguments);
}
//# sourceMappingURL=database.js.map