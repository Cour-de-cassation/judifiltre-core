import { idType } from "../id";
export type { publicityInfoType };
declare type publicityInfoType = {
    _id: idType;
    sourceId: number;
    sourceDb: "jurinet" | "jurica";
    decisionDate?: number;
    publicity: {
        clerkRequest: "public" | "notPublic" | "unspecified";
        assessment: {
            kind: "public";
        } | {
            kind: "notPublic";
        } | {
            kind: "partiallyPublic";
            publicExtract: string;
        } | undefined;
        isFrozen: boolean;
    };
    jurisdiction: string;
    fieldCode: string;
};
