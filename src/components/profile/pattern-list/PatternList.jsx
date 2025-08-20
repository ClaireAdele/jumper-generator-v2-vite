import "../../../App.css";
import "../pattern-list/Patterns.css";
import PatternTile from "./PatternTile";
import { Link } from "react-router-dom";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import { useContext, useState, useEffect } from "react";
import { getPatternsByUser } from "../../../services-and-util-functions/patterns-services";

const PatternList = () => {
    const { signedInUserData, setSignedInUserData } =
      useContext(SignedInUserContext);
  
  const [patternList, setPatternList] = useState([]);
  
  useEffect(() => {
    const fetchPatternData = async () => {
      const { patterns } = await getPatternsByUser();
      console.log(patterns)
      setPatternList(patterns);
    }

    fetchPatternData();
  }, []);
  
  return (
    <div id="pattern-list-container">
      <div className="pattern-tile">
        <Link className="pattern-link" id="create-new-pattern" to="/data-entry">
          Create new pattern
        </Link>
      </div>
      {patternList.map((pattern) => {
        return <PatternTile patternName={pattern.patternName} patternId={pattern._id} />
      })}
    </div>
  );
};

export default PatternList;
