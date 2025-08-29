import "../../App.css";
import "./DataEntry.css";

import MeasurementsEntry from "./data-entry-children/MeasurementsEntry";
import HowToTakeMeasurements from "./data-entry-children/HowToTakeMeasurements";
import JumperSelectionCanvas from "./data-entry-children/JumperSelectionCanvas";
import { FinalJumperDataContextProvider } from "../../contexts/FinalJumperDataContext";
import { getSignedInUserData } from "../../services-and-util-functions/user-services.js";
import { SignedInUserContext } from "../../contexts/SignedInUserContext";
import NavigationTabs from "./data-entry-children/NavigationTabs";
import { useState, useEffect, useContext } from "react";

const DataEntry = () => {
  const [toggleComponent, setToggleComponent] = useState("pick-unit");
  const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);

  useEffect(() => { 
    const isUserLoggedIn = async () => {
      try {
        const signedInUser = await getSignedInUserData();
        setSignedInUserData(signedInUser);
      } catch (error) { 
        //The user is not logged in, just making sure there's not data left over from expired sessions
        setSignedInUserData(null);
      }
    };

    isUserLoggedIn();
  }, []);

  return (
    <FinalJumperDataContextProvider value={{}}>
      <div className="pageBackground">
        <div className="pageShaper">
          <div id="data-entry-page">
            <h1>Generate your pattern</h1>
            <div id="data-entry-container">
              <div id="data-entry-form-and-nav-container" >
                <NavigationTabs toggleComponent={toggleComponent} setToggleComponent={setToggleComponent}/>
                <MeasurementsEntry toggleComponent={toggleComponent} setToggleComponent={setToggleComponent} />
              </div>
              <JumperSelectionCanvas />
            </div>
            <h2>How to take your measurements</h2>
            <HowToTakeMeasurements className="measurement-taking-explanation-data-entry" />
          </div>
        </div>
      </div>
    </FinalJumperDataContextProvider>
  );
};

export default DataEntry;



