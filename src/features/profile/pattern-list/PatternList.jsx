import "../../../App.css";
import "../pattern-list/Patterns.css";
import PatternTile from "./PatternTile";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import { useContext, useState, useEffect } from "react";
import { getPatternsByUser } from "../../../services-and-util-functions/patterns-services";
import CreateNewPatternSvg from "../profile-assets/circle-plus-svgrepo-com.svg?react";

const PatternList = ({setPatternToDeletePopUpData, patternList}) => {
  const { signedInUserData, setSignedInUserData } =
    useContext(SignedInUserContext);
  
  const navigate = useNavigate();

  const handleClickCreateNewPattern = () => {
    navigate("/data-entry");
  }
  
  return (
    <div className="pattern-list">
      <h2 style={{marginBottom: "10%", marginTop: "5%"}}>Your Patterns:</h2>
      <div className="pattern-list-container">
        {/* <div className="pattern-tile" onClick={handleClickCreateNewPattern} style={{ backgroundColor: "rgb(126, 70, 136)" }}>
          <CreateNewPatternSvg className="pattern-tile-img" />
        </div> */}
        {patternList.map((pattern) => {
          return <PatternTile pattern={pattern} navigate={navigate} setPatternToDeletePopUpData={setPatternToDeletePopUpData} />
        })}
      </div>
    </div>
  );
};

export default PatternList;
