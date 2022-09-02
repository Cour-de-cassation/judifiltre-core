import { idType } from "../id";

export type { publicityInfoType };

type publicityInfoType = {
  _id: idType;
  sourceId: number;
  sourceDb: "jurinet" | "jurica";
  decisionDate?: number;
  creationDate?: number;
  publicity: {
    clerkRequest: "public" | "notPublic" | "unspecified";
    assessment: "public" | "notPublic" | "partiallyPublic" | undefined;
    isFrozen: boolean;
  };
  jurisdiction: string;
  fieldCode: string;
};
