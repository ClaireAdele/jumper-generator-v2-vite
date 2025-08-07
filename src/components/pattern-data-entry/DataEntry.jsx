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

  //TODO: add some kind of user data check - if there is a token valid, I will refresh the user data that's in the contex at this point.
  //This is someplace where the user might press refresh and that would mess me up, so it's where context needs refreshing

  useEffect(() => { 
    const isUserLoggedIn = async () => {
      try {
        const signedInUser = await getSignedInUserData();
        console.log(signedInUser)
        setSignedInUserData(signedInUser);
      } catch (error) { 
        console.log(error)
      }
    };

    isUserLoggedIn();
  }, []);

  return (
    <FinalJumperDataContextProvider value={{}}>
      <div className="pageBackground">
        <div className="pageShaper">
          <div id="data-entry-page">
            <div id="data-entry-container">
              <div id="data-entry-form-and-nav-container" >
                <NavigationTabs toggleComponent={toggleComponent} setToggleComponent={setToggleComponent}/>
                <MeasurementsEntry toggleComponent={toggleComponent} setToggleComponent={setToggleComponent} />
              </div>
              <JumperSelectionCanvas />
            </div>
            <h2>How to take your measurements</h2>
            <HowToTakeMeasurements />
          </div>
        </div>
      </div>
    </FinalJumperDataContextProvider>
  );
};

export default DataEntry;



