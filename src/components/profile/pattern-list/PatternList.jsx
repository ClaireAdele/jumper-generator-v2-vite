import "../../../App.css";
import "../pattern-list/Patterns.css";
import PatternTile from "./PatternTile";
import { Link } from "react-router-dom";

const PatternList = () => {
  return (
    <div id="pattern-list-container">
      <div className="pattern-tile">
        <Link className="pattern-link" id="create-new-pattern" to="/data-entry">
          Create new pattern
        </Link>
      </div>
      <PatternTile />
      <PatternTile />
      <PatternTile />
    </div>
  );
};

export default PatternList;
