import "../../../App.css";
import "../Profile.css";
import UserData from "./UserData";
import HowToTakeMeasurements from "../../pattern-data-entry/data-entry-children/HowToTakeMeasurements";
import PatternList from "../pattern-list/PatternList";
import ProfileMenu from "./ProfileMenu";

import { useState } from "react";
import DropDownItem from "../../../components/DropDownItem";

const showHowToTakeMeasurementsButton = {
  "hide-measurements": "Hide How to Take Measurements",
  "show-measurements": "Show How to Take Measurements"
}

const ProfilePage = ({ measurementsList, username, patternList, setPatternToDeletePopUpData, setToggleDeletePopUp, setToggleLogOutPopUp }) => {
  const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState("show-measurements");
  const [toggleDisplay, setToggleDisplay] = useState("pattern-list");

  const handleClickShowHowTo = () => {
    if (showHowToTakeMeasurements === "hide-measurements") {
      setShowHowtoTakeMeasurements("show-measurements");
    } else {
      setShowHowtoTakeMeasurements("hide-measurements");
    }
  };

  return (
    <div className="profile-page-menu-and-toggable-section-container">
      <ProfileMenu setToggleDisplay={setToggleDisplay} toggleDisplay={toggleDisplay} setToggleDeletePopUp={setToggleDeletePopUp} setToggleLogOutPopUp={setToggleLogOutPopUp} />
      <div className="profile-page-toggable-section">
        {toggleDisplay === "pattern-list" &&
          <div className="profile-page-toggable-content">
            <h1>Your Patterns</h1>
            <PatternList setPatternToDeletePopUpData={setPatternToDeletePopUpData} patternList={patternList} />
          </div>
        }
        {toggleDisplay === "user-measurements" &&
          <div className="profile-page-toggable-content" >
            <h1>Your Measurements</h1>
            <UserData measurementsList={measurementsList} />
            <DropDownItem className="drop-down-profile-page" title={showHowToTakeMeasurementsButton[showHowToTakeMeasurements]}><HowToTakeMeasurements /></DropDownItem>
          </div>
        }
        {toggleDisplay === "edit-account-settings" &&
          <h1 className="profile-page-toggable-content" >TODO</h1>
        }
      </div>
    </div>
  );
};

export default ProfilePage;
