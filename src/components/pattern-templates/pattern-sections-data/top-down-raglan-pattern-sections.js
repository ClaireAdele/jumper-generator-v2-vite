import suppliesMarkdown from "../pattern-md-text-files/top-down-raglan/TDR_Supplies.md?raw";
import raglanIncreasesMarkdown from "../pattern-md-text-files/top-down-raglan/TDR_Raglan_Increases_and_Sleeve_Division.md?raw";
import abbreviationAndGlossaryMarkdown from "../pattern-md-text-files/top-down-raglan/TDR_Abbreviations_and_Glossary.md?raw";
import collarAndNecklineShapinMarkdown from "../pattern-md-text-files/top-down-raglan/TDR_Collar_and_Neckline_Shaping.md?raw";
import bodyAndBottomRibbingMarkdown from "../pattern-md-text-files/top-down-raglan/TDR_Body_and_Bottom_Ribbing.md?raw";
import knittingTheSleevesMarkdown from "../pattern-md-text-files/top-down-raglan/TDR_Knitting_the_Sleeves.md?raw";
import patternOverviewMarkdown from "../pattern-md-text-files/top-down-raglan/TDR_Pattern_Overview.md?raw";

const topDownRaglanPatternSections = [
  { sectionTitle: "Pattern Overview", markdown: patternOverviewMarkdown },
  { sectionTitle: "Supplies", markdown: suppliesMarkdown },
  { sectionTitle: "Abbreviations and Glossary", markdown: abbreviationAndGlossaryMarkdown },
  { sectionTitle: "Collar & Neckline Shaping", markdown: collarAndNecklineShapinMarkdown },
  { sectionTitle: "Raglan Increases & Sleeve Division", markdown: raglanIncreasesMarkdown },
  { sectionTitle: "Body & Bottom Ribbing", markdown: bodyAndBottomRibbingMarkdown },
  { sectionTitle: "Knitting the Sleeves", markdown: knittingTheSleevesMarkdown }
];

export default topDownRaglanPatternSections;