import { idModule } from "../../id";
import { juricaDecisionType } from "../juricaDecisionType";

export { generateJuricaDecision };

const MAX_RAND_NUMBER = 1000000;

function generateJuricaDecision(
  decisionFields: Partial<juricaDecisionType> = {}
): juricaDecisionType {
  return {
    _id: idModule.lib.buildId(),
    DOCUMENT_ID: Math.floor(Math.random() * MAX_RAND_NUMBER),
    JDEC_HTML_SOURCE: "<html>HTML_SOURCE</html>",
    ...decisionFields,
  };
}
