"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLib = void 0;
const authenticator_1 = require("./authenticator");
const buildUser_1 = require("./buildUser");
const userLib = {
    assertAuthorization: authenticator_1.authenticator.assertAuthorization,
    buildUser: buildUser_1.buildUser,
    computeHashedPassword: authenticator_1.authenticator.computeHashedPassword,
    extractUserIdFromAuthorizationHeader: authenticator_1.authenticator.extractUserIdFromAuthorizationHeader,
    formatEmail: authenticator_1.authenticator.formatEmail,
    getTokenForUser: authenticator_1.authenticator.getTokenForUser,
    passwordHandler: authenticator_1.authenticator.passwordHandler,
};
exports.userLib = userLib;
//# sourceMappingURL=index.js.map