"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildId = void 0;
const utils_1 = require("../utils");
function buildId(id) {
    return (0, utils_1.buildMongoId)(id);
}
exports.buildId = buildId;
//# sourceMappingURL=buildId.js.map