import "../../../App.css";
import "../pattern-list/Patterns.css"
import patternTileImg from "../profile-assets/fabric-2892492_1280.jpg";
import BinSvgIcon from "../profile-assets/trash-svgrepo-com.svg?react";
import useInView from "../../../custom-hooks/useInView";

const jumperShapes = {
  "top-down-raglan": "Top-down Raglan",
  "drop-shoulder": "Drop-shoulder Seamed Jumper",
  "bottom-up": "Bottom-up Raglan Jumper"
}

const easeAmounts = {
  0: "Fitted",
  7: "Standard Fit",
  12: "Loose Fit",
  20: "Oversized Fit"
}

const PatternTile = ({ pattern, navigate }) => {
  const { patternName, jumperShape, easeAmount } = pattern;
  const [patternTileRef, isVisible] = useInView({threshold: 0.1});

  const handleClickTile = () => {
    navigate(`/knitting-pattern/${pattern._id}`);
  }

  const handleClickDeletePattern = () => {

  }

  return (
    <div ref={patternTileRef} className={`pattern-tile ${isVisible ? "visible" : ""}`} onClick={handleClickTile}>
      <img src={patternTileImg} className="pattern-tile-img"></img>
       <div className="pattern-tile-button-section">
      <button
        onClick={handleClickDeletePattern}
        className="main-button-style edit-profile-button button-style-red pattern-tile-button">
        <BinSvgIcon className="edit-icon" />
        <span className="edit-label">Delete pattern</span>
        </button>
        </div>
      <p className="pattern-tile-label">
        <b>{patternName}</b>
      </p>
      <div className="pattern-tile-description" >
        <p className="pattern-tile-description-row"><b>{jumperShapes[jumperShape]}</b></p>
        <p className="pattern-tile-description-row"><b>{easeAmounts[easeAmount]}</b></p></div>
    </div>
  );
};

export default PatternTile;
