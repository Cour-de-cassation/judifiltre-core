"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUser = void 0;
const id_1 = require("../../id");
const authenticator_1 = require("./authenticator");
function buildUser({ email, name, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUser = yield authenticator_1.authenticator.buildBaseUser({ email, name, password });
        return Object.assign(Object.assign({}, baseUser), { _id: id_1.idModule.lib.buildId() });
    });
}
exports.buildUser = buildUser;
//# sourceMappingURL=buildUser.js.map