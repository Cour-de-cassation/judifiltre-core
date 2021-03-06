import { randomInt } from "crypto";
import { juricaDecisionType } from "../juricaDecisionType";

export { generateJuricaDecision };

const MAX_RAND_NUMBER = 1000000;

function generateJuricaDecision(
  decisionFields: Partial<juricaDecisionType> = {}
): juricaDecisionType {
  return {
    _id: randomInt(1000),
    JDEC_HTML_SOURCE:
      "<html>Titre décisions\r\nC'est dans ces conditions que, par jugement du 21 novembre 2018, le Tribunal de grande instance de Fontainebleau a :\n- dit que l'appartement constituant le lot no 1 était atteint de vices cachés au sens de l'article 1641 du code civil,\n - fait droit à l'action rédhibitoire formée par les époux Crespond,\n - dit que les époux Crespond restitueraient le bien à la société Faame,\n - dit que la société Faame restituerait aux époux Crespond la somme de 195 000 € correspondant au prix et, en tant que de besoin, condamné cette société à payer cette somme aux époux Crespond,\n - dit que la société Faame avait connaissance des vices affectant le bien,\n - condamné la société Faame à payer aux époux Crespond les sommes totales de 1 656 € en indemnisation des frais de déménagement et de 2 000 € en indemnisation du préjudice moral subi, avec intérêts au taux légal à compter du jugement,\n - dit n'y avoir lieu à capitalisation,\n - débouté les époux Crespond du surplus de leurs demandes indemnitaires,\n - condamné la société Faame à supporter les dépens en ce compris les frais d'expertise,\n - condamné la société Faame à payer aux époux Crespond la somme de 3 000 € sur le fondement de l'article 700 du Code de procédure civile,\n - débouté les parties du surplus de leurs demandes. Par dernières conclusions, la société Faame, appelante, demande à la Cour de :\n - vu les articles 1641, 1644, 1143 ancien, 1147 ancien, 1184 ancien du code civil :\n - réformer jugement entrepris et statuant à nouveau :\n - dire que l'appartement n'est pas atteint de vices cachés,\n - dire n'y avoir lieu à résolution de la vente,\n - rejeter toutes les demandes des époux Crespond,\n - condamner solidairement les époux Crespond à lui payer la somme de 4 000 € au titre de l'article 700 du Code de procédure civile, dépens en sus comprenant les frais d'expertise. dit n'y avoir lieu à capitalisation,\n - débouté les époux Crespond du surplus de leurs demandes indemnitaires,\n - condamné la société Faame à supporter les dépens en ce compris les frais d'expertise,\n - condamné la société Faame à payer aux époux Crespond la somme de 3 000 € sur le fondement de l'article 700 du Code de procédure civile,\n - débouté les parties du surplus de leurs demandes. </html>",
    ...decisionFields,
  };
}
