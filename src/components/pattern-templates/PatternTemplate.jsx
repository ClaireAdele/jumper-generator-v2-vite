import PatternSection from "./PatternSection";

//Each pattern section is being rendered from the sectionTitle, the markdown above and the pattern data. 
const PatternTemplate = ({ patternData, patternSections }) => {
  console.log(patternData)
  return (
    <div className="pageBackground">
      <div className="pageShaper">
        <div className="pattern-template-container">
          <h1 style={{ textAlign: "center", marginBottom: "10%" }}>{patternData.patternName}</h1>
          {patternSections.map((patternSection) => {
            return <PatternSection id={patternSection.sectionTitle} patternSection={patternSection} patternData={patternData} />
          })}
        </div>
      </div>
    </div>
  );
};

export default PatternTemplate;
