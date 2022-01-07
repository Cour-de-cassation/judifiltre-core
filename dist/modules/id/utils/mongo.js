"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areMongoIdEqual = exports.buildMongoId = void 0;
const bson_1 = require("bson");
function buildMongoId(id) {
    return new bson_1.ObjectId(id);
}
exports.buildMongoId = buildMongoId;
function areMongoIdEqual(id1, id2) {
    return id1.equals(id2);
}
exports.areMongoIdEqual = areMongoIdEqual;
//# sourceMappingURL=mongo.js.map