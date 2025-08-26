import "../../../App.css";
import "../pattern-list/Patterns.css"
import patternTileImg from "../profile-assets/fabric-2892492_1280.jpg";

const PatternTile = ({ patternName, patternId, navigate }) => {

  const handleClickTile = () => {
    navigate(`/knitting-pattern/${patternId}`);
  }

  return (
    <div className="pattern-tile" onClick={handleClickTile}>
       <p className="pattern-tile-label">
        <b>{patternName}</b>
      </p>
      <img src={patternTileImg} className="pattern-tile-img"></img>
    </div>
  );
};

export default PatternTile;
