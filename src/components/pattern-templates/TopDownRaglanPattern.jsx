import PatternSection from "./pattern-sections/PatternSection";

import suppliesMarkdown from "./pattern-md-text-files/top-down-raglan/TDR_Supplies.md?raw";
import raglanIncreasesMarkdown from "./pattern-md-text-files/top-down-raglan/TDR_Raglan_Increases_and_Sleeve_Division.md?raw";
import abbreviationAndGlossaryMarkdown from "./pattern-md-text-files/top-down-raglan/TDR_Abbreviations_and_Glossary.md?raw";
import collarAndNecklineShapinMarkdown from "./pattern-md-text-files/top-down-raglan/TDR_Collar_and_Neckline_Shaping.md?raw";
import bodyAndBottomRibbingMarkdown from "./pattern-md-text-files/top-down-raglan/TDR_Body_and_Bottom_Ribbing.md?raw";
import knittingTheSleevesMarkdown from "./pattern-md-text-files/top-down-raglan/TDR_Knitting_the_Sleeves.md?raw";
import patternOverviewMarkdown from "./pattern-md-text-files/top-down-raglan/TDR_Pattern_Overview.md?raw";

const patternSections = [
  { sectionTitle: "Supplies", markdown: suppliesMarkdown },
  { sectionTitle: "Abbreviations and Glossary", markdown: abbreviationAndGlossaryMarkdown },
  { sectionTitle: "Pattern Overview", markdown: patternOverviewMarkdown },
  { sectionTitle: "Collar & Neckline Shaping", markdown: collarAndNecklineShapinMarkdown },
  { sectionTitle: "Raglan Increases & Sleeve Division", markdown: raglanIncreasesMarkdown},
  { sectionTitle: "Body & Bottom Ribbing", markdown: bodyAndBottomRibbingMarkdown },
  { sectionTitle: "Knitting the Sleeves", markdown: knittingTheSleevesMarkdown }
];

//I think that I will handle each section in markdown, then show it in my component. 
//I will use react-markdown
//I can probably load each file dynamically in the children component, for example pulling the "neckline" text
//from the relevant markdown file when I load a future Neckline component. 

const TopDownRaglanPattern = ({ patternData }) => {
  return (
    <div className="pageBackground">
      <div className="pageShaper">
        {patternSections.map(( patternSection ) => {
          return <PatternSection patternSection={patternSection} patternData={patternData} />
        })}
      </div>
    </div>
  );
};

export default TopDownRaglanPattern;
