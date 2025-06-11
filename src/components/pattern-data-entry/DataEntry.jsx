import "../../App.css";
import "./DataEntry.css";

import MeasurementsEntry from "./data-entry-children/MeasurementsEntry";
import HowToTakeMeasurements from "./data-entry-children/HowToTakeMeasurements";
import DesiredFit from "./data-entry-children/DesiredFit";
import { FinalJumperDataContextProvider } from "../../contexts/FinalJumperDataContext";

const DataEntry = () => {

  return (
    <FinalJumperDataContextProvider value={{}}>
      <div className="pageBackground">
        <div className="pageShaper">
          <div id="data-entry-page">
            <div id="data-entry-container">
              <MeasurementsEntry />
              <DesiredFit />
            </div>
            <button className="main-button-style">Generate Pattern</button>
            <h2>How to take your measurements</h2>
            <HowToTakeMeasurements />
          </div>
        </div>
      </div>
    </FinalJumperDataContextProvider>
  );
};

export default DataEntry;



