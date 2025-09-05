import { useState, useContext } from "react";
import Measurement from "./Measurement";
import EditSvgIcon from "./../profile-assets/pen-square-svgrepo-com.svg?react";
import { editUserDetails } from "../../../services-and-util-functions/user-services";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext";

const UserData = ({ measurementsList }) => {
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);

  const handleClickEditProfile = async () => {
    setIsUserEditing(true);
  };

  const handleClickApplyChanges = async () => {
    const user = await editUserDetails(updatedUserData);
    console.log("user", user);
    setSignedInUserData(user)
    setIsUserEditing(false);
  }

  if (isUserEditing) {
    return (
      <div className="profile-page-measurements-block">
        <div style={{ marginTop: "5%" }}>
          {measurementsList.map((measurement) => {
            return (
              <Measurement
                key={measurement.name}
                measurement={measurement}
                isUserEditing={isUserEditing}
                setIsUserEditing={setIsUserEditing}
                updatedUserData={updatedUserData}
                setUpdatedUserData={setUpdatedUserData}
              />
            );
          })}
        </div>
        <button
          onClick={handleClickApplyChanges}
          className="main-button-style edit-profile-button  button-style-purple"
        >
          Apply Changes
        </button>
      </div>
    );
  } else {
    return (
      <div className="profile-page-measurements-block">
        <div className="edit-profile-button-section">
          <button
            onClick={handleClickEditProfile}
            className="main-button-style edit-profile-button"
            style={{ backgroundColor: "rgb(126, 70, 136)" }}
          >
            <EditSvgIcon className="edit-icon" />
            <span className="edit-label">Edit Profile</span>
          </button>
        </div>
      
        <div className="profile-page-measurements-list">
          {measurementsList.map((measurement) => {
            return (
              <Measurement
                key={measurement.name}
                measurement={measurement}
                isUserEditing={isUserEditing}
                setIsUserEditing={setIsUserEditing}
                updatedUserData={updatedUserData}
                setUpdatedUserData={setUpdatedUserData}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default UserData;
