import { idType } from "../id";
export type { publicityInfoType };
declare type publicityInfoType = {
    _id: idType;
    sourceId: number;
    sourceDb: "jurinet" | "jurica";
    decisionDate?: number;
    publicity: {
        clerkRequest: "public" | "notPublic" | "unspecified";
        assessment: "public" | "notPublic" | "partiallyPublic" | undefined;
        isFrozen: boolean;
    };
    jurisdiction: string;
    fieldCode: string;
};
