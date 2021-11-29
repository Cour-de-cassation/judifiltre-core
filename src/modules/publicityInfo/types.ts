import { idType } from "../id";

export type { publicityInfoType };

type publicityInfoType = {
  _id: idType;
  sourceId: number;
  sourceDb: "jurinet" | "jurica";
  publicityRequest: "public" | "nonPublic" | undefined;
  releasabilityStatus:
    | "releasable"
    | "partiallyReleasable"
    | "nonReleasable"
    | "undetermined";
  jurisdiction: "CC" | "CA" | "TJ";
  codeField: string;
};
