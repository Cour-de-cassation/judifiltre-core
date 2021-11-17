"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePublicityInfo = void 0;
const id_1 = require("../../id");
function generatePublicityInfo(fields) {
    const randJurisdiction = Math.random();
    return Object.assign({ _id: id_1.idModule.lib.buildId(), codeField: `${Math.floor(Math.random() * 99)}A`, jurisdiction: randJurisdiction > 0.66 ? "CA" : randJurisdiction > 0.33 ? "CC" : "TJ", sourceDb: Math.random() > 0.5 ? "jurinet" : "jurica", sourceId: Math.floor(Math.random() * 2300000), releasabilityStatus: "undetermined" }, fields);
}
exports.generatePublicityInfo = generatePublicityInfo;
//# sourceMappingURL=generatePublicityInfo.js.map