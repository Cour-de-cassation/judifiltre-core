"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticator = void 0;
const sder_core_1 = require("sder-core");
const privateKey_1 = require("./privateKey");
const authenticator = (0, sder_core_1.buildAuthenticator)(privateKey_1.privateKey);
exports.authenticator = authenticator;
//# sourceMappingURL=authenticator.js.map