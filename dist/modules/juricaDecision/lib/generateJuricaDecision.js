"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJuricaDecision = void 0;
const MAX_RAND_NUMBER = 1000000;
function generateJuricaDecision(decisionFields = {}) {
    return Object.assign({ _id: Math.floor(Math.random() * MAX_RAND_NUMBER), JDEC_HTML_SOURCE: '<html>HTML_SOURCE</html>' }, decisionFields);
}
exports.generateJuricaDecision = generateJuricaDecision;
//# sourceMappingURL=generateJuricaDecision.js.map