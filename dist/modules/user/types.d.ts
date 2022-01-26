import { idType } from "../id";
export type { userType };
declare type userType = {
    _id: idType;
    deletionDate: number | undefined;
    email: string;
    hashedPassword: string;
    isActivated: boolean;
    name: string;
    passwordLastUpdateDate: number;
};
