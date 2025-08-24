import "../../../App.css";
import "../Profile.css";
import UserData from "./profile-page-children/UserData";
import HowToTakeMeasurements from "../../pattern-data-entry/data-entry-children/HowToTakeMeasurements";
import PatternList from "../pattern-list/PatternList";

import React, { useState, useContext } from "react";
import DeleteProfilePopUp from "./profile-page-children/DeleteProfilePopUp";

const ProfilePage = ({ measurementsList, username }) => {
  const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState(false);
  const [togglePopUp, setTogglePopUp] = useState(false);

    const handleClickShowHowTo = () => {
        if (showHowToTakeMeasurements === false) {
            setShowHowtoTakeMeasurements(true);
        } else {
            setShowHowtoTakeMeasurements(false);
        }
    };

  return (
      <div className="pageBackground">
        <div className="pageShaper">
          <div id="profile-page">
            <h2 style={{ alignSelf: "center" }}>Welcome back, {username} !</h2>
            <UserData measurementsList={measurementsList} setTogglePopUp={setTogglePopUp} />
            {showHowToTakeMeasurements ? (
              <>
                <button
                  className="main-button-style button-style-green"
                  id="show-how-to-measurements"
                  onClick={handleClickShowHowTo}
                >
                  Hide how to take measurements
                </button>
                <HowToTakeMeasurements />
              </>
            ) : (
              <button
                id="show-how-to-measurements"
                className="main-button-style button-style-green"
                onClick={handleClickShowHowTo}
              >
                Show how to take measurements
              </button>
            )}
            <PatternList />
            {togglePopUp && <DeleteProfilePopUp togglePopUp={togglePopUp} setTogglePopUp={setTogglePopUp} />}
          </div>
        </div>
      </div>
    );
};

export default ProfilePage;
