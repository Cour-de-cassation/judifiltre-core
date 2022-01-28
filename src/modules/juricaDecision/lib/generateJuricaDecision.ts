import { idModule } from "../../id";
import { juricaDecisionType } from "../juricaDecisionType";

export { generateJuricaDecision };

const MAX_RAND_NUMBER = 1000000;

function generateJuricaDecision(
  decisionFields: Partial<juricaDecisionType> = {}
): juricaDecisionType {
  return {
    _id: idModule.lib.buildId(),
    JDEC_HTML_SOURCE: "<html>HTML_SOURCE</html>",
    ...decisionFields,
  };
}
