import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import { getPatternsByUser } from "../../../services-and-util-functions/patterns-services";
import useInView from "../../../custom-hooks/useInView";

import CreateNewPatternSvg from "../profile-assets/circle-plus-svgrepo-com.svg?react";
import PatternTile from "./PatternTile";

import "../../../App.css";
import "../pattern-list/Patterns.css";


const PatternList = ({ setPatternToDeletePopUpData, patternList }) => {
  const { signedInUserData, setSignedInUserData } =
    useContext(SignedInUserContext);
  const [patterns, setPatterns] = useState(patternList);
    const [patternListContainerRef, isVisible] = useInView();
  
  const navigate = useNavigate();

  const handleClickCreateNewPattern = () => {
    navigate("/data-entry");
  };

  const handleClickJumperType = (event) => {
    const jumperShape = event.target.value;

    if (jumperShape === "all") {
      setPatterns(patternList);
      return;
    }

    const updatedPatternList = patternList.filter((pattern) => {
      return pattern.jumperShape === jumperShape;
    });

    setPatterns(updatedPatternList);
  };

  const handleSearchPatterns = () => {
    const searchTerm = event.target.value.trim();

    if (searchTerm === "") {
      setPatterns(patternList);
      return;
    }

    const regex = new RegExp(searchTerm, "i");

    const filteredPatterns = patternList.filter((pattern) =>
      regex.test(pattern.patternName)
    );

    setPatterns(filteredPatterns);
  };
  
  return (
    <div className="pattern-list">
      <div ref={patternListContainerRef} className={`pattern-list-container ${isVisible ? "visible" : ""}`}>
        <div className="pattern-list-organisers">
          <div>
            <label for="jumper-type">Choose a jumper type:</label>
            <select id="jumper-type" name="jumper-type" onChange={handleClickJumperType}>
              <option value="all" >All types</option>
              <option value="bottom-up" >Bottom-up raglan jumpers</option>
              <option value="top-down-raglan" >Top-down raglan jumpers</option>
              <option value="drop-shoulder" >Seamed drop-shoulder jumpers</option>
            </select>
          </div>
          <div>
            <label>Search Patterns:</label>
            <input className="pattern-list-search-patterns" type="text" onChange={handleSearchPatterns} />
          </div>
        </div>
        {/* <div className="pattern-tile" onClick={handleClickCreateNewPattern} style={{ backgroundColor: "rgb(126, 70, 136)" }}>
          <CreateNewPatternSvg className="pattern-tile-img" />
        </div> */}
        {patterns.map((pattern) => {
          return <PatternTile pattern={pattern} navigate={navigate} setPatternToDeletePopUpData={setPatternToDeletePopUpData} />
        })}
      </div>
    </div>
  );
};

export default PatternList;