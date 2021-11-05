"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converter = void 0;
const converter = {
    convertParameters,
};
exports.converter = converter;
function convertParameters(params) {
    const _id = parseInt(params._id);
    const sourceDb = params.sourceDb === "jurica" || params.sourceDb === "jurinet"
        ? params.sourceDb
        : undefined;
    if (isNaN(_id) || sourceDb === undefined) {
        return undefined;
    }
    return { _id, sourceDb };
}
//# sourceMappingURL=converter.js.map