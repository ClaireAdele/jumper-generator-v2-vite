import Supplies from "./pattern-sections/Supplies"

// const patternSections = [
//   "Supplies"
//   "Abbreviations and Glossary",
//   "Pattern Overview",
//   "Collar & neckline shaping",
//   "Raglan Increases & sleeve division",
//   "Body & bottom ribbing",
//   "Knitting the sleeves"
// ];

//I think that I will handle each section in markdown, then show it in my component. 
//I will use react-markdown
//I can probably load each file dynamically in the children component, for example pulling the "neckline" text
//from the relevant markdown file when I load a future Neckline component. 

const TopDownRaglanPattern = () => {
  return (
    <div className="pageBackground">
      <div className="pageShaper">

      </div>
    </div>
  );
};

export default TopDownRaglanPattern;
