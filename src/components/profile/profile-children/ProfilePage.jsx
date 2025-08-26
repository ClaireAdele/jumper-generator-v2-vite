import "../../../App.css";
import "../Profile.css";
import UserData from "./profile-page-children/UserData";
import HowToTakeMeasurements from "../../pattern-data-entry/data-entry-children/HowToTakeMeasurements";
import PatternList from "../pattern-list/PatternList";

import React, { useState, useContext } from "react";
import DeleteProfilePopUp from "./profile-page-children/DeleteProfilePopUp";
import LogOutPopUp from "./profile-page-children/LogOutPopUp";
import useInView from "../../../custom-hooks/useInView";

const showHowToTakeMeasurementsButton = {
  "hide-measurements": "Hide How to Take Measurements",
  "show-measurements": "Show How to Take Measurements"
}

const ProfilePage = ({ measurementsList, username }) => {
  const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState("show-measurements");
  const [toggleDeletePopUp, setToggleDeletePopUp] = useState(false);
  const [toggleLogOutPopUp, setToggleLogOutPopUp] = useState(false);
  const [profilePageTitleRef, isVisible] = useInView();

  const handleClickShowHowTo = () => {
    if (showHowToTakeMeasurements === "hide-measurements") {
      setShowHowtoTakeMeasurements("show-measurements");
    } else {
      setShowHowtoTakeMeasurements("hide-measurements");
    }
  };

  return (
    <div className="pageBackground">
      <div className="pageShaper">
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
          <PatternList />
          {toggleDeletePopUp && <DeleteProfilePopUp togglePopUp={toggleDeletePopUp} setTogglePopUp={setToggleDeletePopUp} />}
          {toggleLogOutPopUp && <LogOutPopUp togglePopUp={toggleLogOutPopUp} setTogglePopUp={setToggleLogOutPopUp} />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
