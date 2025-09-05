import "../../../App.css";
import "../Profile.css";
import PatternList from "../pattern-list/PatternList";
import ProfileMenu from "./ProfileMenu";

import { useState } from "react";
import useInView from "../../../custom-hooks/useInView";
import MyMeasurementsSection from "./MyMeasurementsSection";


const ProfilePage = ({ measurementsList, username, patternList, setPatternToDeletePopUpData, setToggleDeletePopUp, setToggleLogOutPopUp }) => {
  const [toggleDisplay, setToggleDisplay] = useState("pattern-list");
  
  return (
    <div className="profile-page-menu-and-toggable-section-container">
      <ProfileMenu setToggleDisplay={setToggleDisplay} toggleDisplay={toggleDisplay} setToggleDeletePopUp={setToggleDeletePopUp} setToggleLogOutPopUp={setToggleLogOutPopUp} />
      <div className="profile-page-toggable-section">
        {toggleDisplay === "pattern-list" &&
          <div className="profile-page-toggable-content">
            <h1>My Patterns</h1>
            <PatternList setPatternToDeletePopUpData={setPatternToDeletePopUpData} patternList={patternList} />
          </div>
        }
        {toggleDisplay === "user-measurements" &&
          <div className="profile-page-toggable-content">
            <h1>My Measurements</h1>
            <MyMeasurementsSection measurementsList={measurementsList} />
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
