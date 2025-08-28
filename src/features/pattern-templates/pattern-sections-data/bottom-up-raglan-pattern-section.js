import suppliesMarkdown from "../pattern-md-text-files/bottom-up-raglan/BUR_Supplies.md?raw";
import raglanIncreasesMarkdown from "../pattern-md-text-files/bottom-up-raglan/BUR_Raglan_Decreases_and_Sleeve_Division.md?raw";
import abbreviationAndGlossaryMarkdown from "../pattern-md-text-files/bottom-up-raglan/BUR_Abbreviations_and_Glossary.md?raw";
import collarAndNecklineShapinMarkdown from "../pattern-md-text-files/bottom-up-raglan/BUR_Collar_and_Neckline_Shaping.md?raw";
import bodyAndBottomRibbingMarkdown from "../pattern-md-text-files/bottom-up-raglan/BUR_Body_and_Bottom_Ribbing.md?raw";
import knittingTheSleevesMarkdown from "../pattern-md-text-files/bottom-up-raglan/BUR_Knitting_the_Sleeves.md?raw";
import patternOverviewMarkdown from "../pattern-md-text-files/bottom-up-raglan/BUR_Pattern_Overview.md?raw";

const bottomUpRaglanPatternSections = [
  { sectionTitle: "Pattern Overview", markdown: patternOverviewMarkdown },
  { sectionTitle: "Supplies", markdown: suppliesMarkdown },
  { sectionTitle: "Abbreviations and Glossary", markdown: abbreviationAndGlossaryMarkdown },
  { sectionTitle: "Collar & Neckline Shaping", markdown: collarAndNecklineShapinMarkdown },
  { sectionTitle: "Raglan Decreases & Sleeve Division", markdown: raglanIncreasesMarkdown },
  { sectionTitle: "Body & Bottom Ribbing", markdown: bodyAndBottomRibbingMarkdown },
  { sectionTitle: "Knitting the Sleeves", markdown: knittingTheSleevesMarkdown }
];

export default bottomUpRaglanPatternSections;