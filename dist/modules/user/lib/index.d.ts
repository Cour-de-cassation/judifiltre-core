import { buildUser } from "./buildUser";
declare const userLib: {
    assertAuthorization: typeof import("sder-core/dist/modules/authenticator/lib/assertAuthorization").assertAuthorization;
    buildUser: typeof buildUser;
    computeHashedPassword: typeof import("sder-core/dist/modules/authenticator/lib/computeHashedPassword").computeHashedPassword;
    extractUserIdFromAuthorizationHeader: (authorization: string | undefined) => string;
    formatEmail: typeof import("sder-core/dist/modules/authenticator/lib/formatEmail").formatEmail;
    getTokenForUser: (user: {
        _id: unknown;
    }) => Promise<string>;
    passwordHandler: {
        checkUser(user: {
            hashedPassword: string;
        }, password: string): Promise<boolean>;
        getPasswordTimeValidityStatus(user: {
            passwordLastUpdateDate: number;
        }): "valid" | "outdated";
        generate(): string;
        isValid(password: string): boolean;
    };
};
export { userLib };
