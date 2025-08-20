import suppliesMarkdown from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Supplies.md?raw";
import sleeveSeparationAndFrontPanelMarkdown from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Sleeve_Separation_and_Front_Panel.md?raw";
import abbreviationAndGlossaryMarkdown from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Abbreviations_and_Glossary.md?raw";
import knittingTheNeckline from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Knitting_the_Neckline.md?raw";
import bodyAndBottomRibbingMarkdown from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Body_and_Bottom_Ribbing.md?raw";
import knittingTheSleevesMarkdown from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Knitting_the_Sleeves.md?raw";
import patternOverviewMarkdown from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Pattern_Overview.md?raw";
import backPanelMarkdown from "../pattern-md-text-files/drop-shoulder-seamed/DSS_Back_Panel.md?raw"

const dropShoulderSeamedPatternSections = [
  { sectionTitle: "Pattern Overview", markdown: patternOverviewMarkdown },
  { sectionTitle: "Supplies", markdown: suppliesMarkdown },
  { sectionTitle: "Abbreviations and Glossary", markdown: abbreviationAndGlossaryMarkdown },
  { sectionTitle: "Body & Bottom Ribbing", markdown: bodyAndBottomRibbingMarkdown },
  { sectionTitle: "Sleeve Separation and Front Panel", markdown: sleeveSeparationAndFrontPanelMarkdown },
  { sectionTitle: "Back Panel", markdown: backPanelMarkdown },
  { sectionTitle: "Knitting the Neckline", markdown: knittingTheNeckline },
  { sectionTitle: "Knitting the Sleeves", markdown: knittingTheSleevesMarkdown }
];

export default dropShoulderSeamedPatternSections;