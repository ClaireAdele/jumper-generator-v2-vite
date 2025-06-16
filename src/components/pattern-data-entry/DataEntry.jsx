import "../../App.css";
import "./DataEntry.css";

import MeasurementsEntry from "./data-entry-children/MeasurementsEntry";
import HowToTakeMeasurements from "./data-entry-children/HowToTakeMeasurements";
import JumperSelectionCanvas from "./data-entry-children/JumperSelectionCanvas";
import { FinalJumperDataContextProvider } from "../../contexts/FinalJumperDataContext";
import NavigationTabs from "./data-entry-children/NavigationTabs";
import { useState } from "react";

const DataEntry = () => {
  const [toggleComponent, setToggleComponent] = useState("pick-unit");


  return (
    <FinalJumperDataContextProvider value={{}}>
      <div className="pageBackground">
        <div className="pageShaper">
          <div id="data-entry-page">
            <div id="data-entry-container">
            <NavigationTabs toggleComponent={toggleComponent} setToggleComponent={setToggleComponent}/>
              <MeasurementsEntry toggleComponent={toggleComponent} setToggleComponent={setToggleComponent} />
              <JumperSelectionCanvas />
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



