import { idModule } from "../../id";
import { publicityInfoType } from "../types";

export { generatePublicityInfo };

function generatePublicityInfo(
  fields: Partial<publicityInfoType>
): publicityInfoType {
  const randJurisdiction = Math.random();
  const randClerkRequest = Math.random();
  return {
    _id: idModule.lib.buildId(),
    fieldCode: `${Math.floor(Math.random() * 99)}A`,
    jurisdiction:
      randJurisdiction > 0.66
        ? "CA_ROUEN"
        : randJurisdiction > 0.33
        ? "CC"
        : "TJ",
    sourceDb: Math.random() > 0.5 ? "jurinet" : "jurica",
    sourceId: Math.floor(Math.random() * 2300000),
    publicity: {
      assessment: undefined,
      clerkRequest:
        randClerkRequest > 0.66
          ? "public"
          : randClerkRequest > 0.33
          ? "notPublic"
          : "unspecified",
      isFrozen: false,
    },
    decisionDate: new Date().getTime(),
    ...fields,
  };
}
