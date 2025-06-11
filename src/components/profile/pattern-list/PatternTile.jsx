import "../../../App.css";
import "../pattern-list/Patterns.css"
import { Link } from "react-router-dom";

const PatternTile = () => {
  return (
    <div className="pattern-tile">
      <Link className="pattern-link" to="/yoke-pattern">
        Pattern Name
      </Link>
    </div>
  );
};

export default PatternTile;
