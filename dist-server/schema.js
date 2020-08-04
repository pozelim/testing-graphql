"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

/* src/schema.js */
var schema = (0, _graphql.buildSchema)("\n    type Query {\n        users: [User!]!,\n        user(id: Int!): User!\n    }\n\n    type User {\n        id: ID! \n        name: String!\n        email: String\n        posts: [Post!]\n    }\n\n    type Post {\n        id: ID!\n        title: String!\n        published: Boolean!\n        link: String\n        author: User!\n    }\n");
var _default = schema;
exports["default"] = _default;
//# sourceMappingURL=schema.js.map