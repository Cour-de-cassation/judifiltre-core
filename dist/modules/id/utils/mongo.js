"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areMongoIdEqual = exports.buildMongoId = void 0;
const mongodb_1 = require("mongodb");
function buildMongoId(id) {
    return new mongodb_1.ObjectId(id);
}
exports.buildMongoId = buildMongoId;
function areMongoIdEqual(id1, id2) {
    return id1.equals(id2);
}
exports.areMongoIdEqual = areMongoIdEqual;
//# sourceMappingURL=mongo.js.map