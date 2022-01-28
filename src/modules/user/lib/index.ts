import { authenticator } from "./authenticator";
import { buildUser } from "./buildUser";

const userLib = {
  assertAuthorization: authenticator.assertAuthorization,
  buildUser,
  computeHashedPassword: authenticator.computeHashedPassword,
  extractUserIdFromAuthorizationHeader:
    authenticator.extractUserIdFromAuthorizationHeader,
  formatEmail: authenticator.formatEmail,
  getTokenForUser: authenticator.getTokenForUser,
  passwordHandler: authenticator.passwordHandler,
};

export { userLib };
