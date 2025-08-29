import PatternSection from "./PatternSection";

//Each pattern section is being rendered from the sectionTitle, the markdown above and the pattern data. 
const genericPatternTitle = {
  "top-down-raglan": "Top-Down Raglan Pattern",
  "bottom-up": "Bottom-up Raglan Pattern",
  "drop-shoulder": "Drop-shoulder Seamed Jumper"
}

const PatternTemplate = ({ patternData, patternSections }) => {
  return (
        <div className="pattern-template-container">
          <h1 style={{ textAlign: "center", marginBottom: "10%" }}>{patternData?.patternName || genericPatternTitle[patternData.jumperShape]}</h1>
          {patternSections.map((patternSection) => {
            return <PatternSection id={patternSection.sectionTitle} patternSection={patternSection} patternData={patternData} />
          })}
        </div>
  );
};

export default PatternTemplate;
