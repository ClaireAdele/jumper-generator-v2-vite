import "../../../App.css";
import "../Profile.css";
import PatternList from "../pattern-list/PatternList";
import ProfileMenu from "./ProfileMenu";
import MyMeasurementsSection from "./MyMeasurementsSection";
import EditAccountSettings from "./EditAccountSettings";

import { useState } from "react";

const ProfilePage = ({
  editEmailAddressForm,
  setEditEmailAddressForm,
  measurementsList,
  patternList,
  setPatternToDeletePopUpData,
  updatedUserData,
  setUpdatedUserData,
  isUserEditingMeasurements,
  setisUserEditingMeasurements,
  editPasswordForm,
  setEditPasswordForm
}) => {

  const [toggleDisplay, setToggleDisplay] = useState("pattern-list");
  
  return (
    <div className="profile-page-menu-and-toggable-section-container">
      <ProfileMenu setToggleDisplay={setToggleDisplay} toggleDisplay={toggleDisplay} />
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
            <MyMeasurementsSection
              measurementsList={measurementsList}
              isUserEditingMeasurements={isUserEditingMeasurements}
              setisUserEditingMeasurements={setisUserEditingMeasurements}
              updatedUserData={updatedUserData }
              setUpdatedUserData={setUpdatedUserData} />
          </div>
        }
        {toggleDisplay === "edit-account-settings" &&
          <div className="profile-page-toggable-content">
            <h1>Edit Account Settings</h1>
            <EditAccountSettings
              editPasswordForm={editPasswordForm}
              setEditPasswordForm={setEditPasswordForm}
              editEmailAddressForm={editEmailAddressForm}
              setEditEmailAddressForm={setEditEmailAddressForm}
            />
          </div>
        }
      </div>
    </div>
  );
};

export default ProfilePage;
