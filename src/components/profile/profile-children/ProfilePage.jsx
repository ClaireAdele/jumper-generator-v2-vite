import "../../../App.css";
import "../Profile.css";
import UserData from "./profile-page-children/UserData";
import HowToTakeMeasurements from "../../pattern-data-entry/data-entry-children/HowToTakeMeasurements";
import PatternList from "../pattern-list/PatternList";

import React, { useState, useContext } from "react";

const ProfilePage = ({ measurementsList, username }) => {
    const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState(false);

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
            <UserData measurementsList={measurementsList} />
            {showHowToTakeMeasurements ? (
              <>
                <button
                  className="main-button-style"
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
                className="main-button-style"
                onClick={handleClickShowHowTo}
              >
                Show how to take measurements
              </button>
            )}
            <PatternList />
          </div>
        </div>
      </div>
    );
};

export default ProfilePage;
