import "../../../App.css";
import "../pattern-list/Patterns.css"
import { Link } from "react-router-dom";

const PatternTile = ({patternName, patternId}) => {
  return (
    <div className="pattern-tile">
      <Link className="pattern-link" to={`/knitting-pattern/${patternId}`}>
        {patternName}
      </Link>
    </div>
  );
};

export default PatternTile;
