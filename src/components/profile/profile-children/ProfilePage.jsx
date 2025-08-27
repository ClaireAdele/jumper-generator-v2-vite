import "../../../App.css";
import "../Profile.css";
import UserData from "./profile-page-children/UserData";
import HowToTakeMeasurements from "../../pattern-data-entry/data-entry-children/HowToTakeMeasurements";
import PatternList from "../pattern-list/PatternList";

import { useState } from "react";
import useInView from "../../../custom-hooks/useInView";

const showHowToTakeMeasurementsButton = {
  "hide-measurements": "Hide How to Take Measurements",
  "show-measurements": "Show How to Take Measurements"
}

const ProfilePage = ({ measurementsList, username, patternList, setPatternToDeletePopUpData, setToggleDeletePopUp, setToggleLogOutPopUp }) => {
  const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState("show-measurements");
  const [profilePageTitleRef, isVisible] = useInView();

  const handleClickShowHowTo = () => {
    if (showHowToTakeMeasurements === "hide-measurements") {
      setShowHowtoTakeMeasurements("show-measurements");
    } else {
      setShowHowtoTakeMeasurements("hide-measurements");
    }
  };

  return (
        <div id="profile-page">
          <h1 ref={profilePageTitleRef} className={`profile-page-title ${isVisible ? "visible" : ""}`}>Welcome back, {username} !</h1>
          <UserData measurementsList={measurementsList} setToggleDeletePopUp={setToggleDeletePopUp} setToggleLogOutPopUp={setToggleLogOutPopUp} />
          <button
            className="main-button-style button-style-green"
            id="show-how-to-measurements"
            onClick={handleClickShowHowTo}
          >
            {showHowToTakeMeasurementsButton[showHowToTakeMeasurements]}
          </button>
          <HowToTakeMeasurements isVisible={showHowToTakeMeasurements} />
          <PatternList setPatternToDeletePopUpData={setPatternToDeletePopUpData} patternList={patternList} />
        </div>
  );
};

export default ProfilePage;
