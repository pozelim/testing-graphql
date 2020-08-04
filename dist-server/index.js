"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _server = _interopRequireDefault(require("./server"));

/* src/index.js */
var port = process.env.PORT || "4000";

_server["default"].listen(port);

console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(port, "/graphql"));
//# sourceMappingURL=index.js.map