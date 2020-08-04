"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _database = require("./database");

var _graphqlPlaygroundMiddlewareExpress = _interopRequireDefault(require("graphql-playground-middleware-express"));

/* src/server.js */
// Create a context for holding contextual data (db info in this case)
var context = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var db;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.startDatabase)();

          case 2:
            db = _context.sent;
            return _context.abrupt("return", {
              db: db
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function context() {
    return _ref.apply(this, arguments);
  };
}();

var app = (0, _express["default"])();
app.use("/graphql", (0, _expressGraphql.graphqlHTTP)({
  schema: _schema["default"],
  rootValue: _resolvers["default"],
  context: context
})); //Graphql Playground route

app.get("/playground", (0, _graphqlPlaygroundMiddlewareExpress["default"])({
  endpoint: "/graphql"
}));
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=server.js.map