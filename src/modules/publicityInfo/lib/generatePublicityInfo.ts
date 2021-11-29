import { idModule } from "../../id";
import { publicityInfoType } from "../types";

export { generatePublicityInfo };

function generatePublicityInfo(
  fields: Partial<publicityInfoType>
): publicityInfoType {
  const randJurisdiction = Math.random();
  return {
    _id: idModule.lib.buildId(),
    codeField: `${Math.floor(Math.random() * 99)}A`,
    jurisdiction:
      randJurisdiction > 0.66 ? "CA" : randJurisdiction > 0.33 ? "CC" : "TJ",
    sourceDb: Math.random() > 0.5 ? "jurinet" : "jurica",
    sourceId: Math.floor(Math.random() * 2300000),
    releasabilityStatus: "undetermined",
    publicityRequest: undefined,
    ...fields,
  };
}
