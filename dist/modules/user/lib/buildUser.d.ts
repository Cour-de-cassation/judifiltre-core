import { userType } from "../../user";
export { buildUser };
declare function buildUser({ email, name, password, }: {
    email: string;
    name: string;
    password: string;
}): Promise<userType>;
