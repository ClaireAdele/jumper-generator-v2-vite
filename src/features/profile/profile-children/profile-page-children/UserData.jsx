import { useState, useContext } from "react";
import Measurement from "./Measurement";
import EditSvgIcon from "../../profile-assets/pen-square-svgrepo-com.svg?react";
import BinSvgIcon from "../../profile-assets/trash-svgrepo-com.svg?react";
import LogOutSvgIcon from "../../profile-assets/sign-out-svgrepo-com.svg?react";
import { editUserDetails } from "../../../../services-and-util-functions/user-services";
import { signOutUser } from "../../../../services-and-util-functions/auth-services";
import { SignedInUserContext } from "../../../../contexts/SignedInUserContext";

const UserData = ({ measurementsList, setToggleDeletePopUp, setToggleLogOutPopUp }) => {
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const { signedInUserData, setSignedInUserData } =
    useContext(SignedInUserContext);

  const handleClickEditProfile = async () => {
    setIsUserEditing(true);
  };

  const handleClickDeleteProfile = async () => {
    setToggleDeletePopUp(true);
  }

  const handleClickLogOut = async () => {
    setToggleLogOutPopUp(true);
  }

  const handleClickApplyChanges = async () => {
    const user = await editUserDetails(updatedUserData);
    console.log("user", user);
    setSignedInUserData(user)
    setIsUserEditing(false);
  }

  if (isUserEditing) {
    return (
      <div className="profile-info-style">
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
      <div className="profile-info-style">
        <div className="edit-profile-button-section">
          <button
            onClick={handleClickEditProfile}
            className="main-button-style edit-profile-button"
            style={{ backgroundColor: "rgb(126, 70, 136)" }}
          >
            <EditSvgIcon className="edit-icon" />
            <span className="edit-label">Edit Profile</span>
          </button>
          <button
            onClick={handleClickLogOut}
            className="main-button-style edit-profile-button"
            style={{ backgroundColor: "rgb(126, 70, 136)" }}
          >
            <LogOutSvgIcon className="edit-icon" />
            <span className="edit-label">Log-out</span>
          </button>
          
          <button
            onClick={handleClickDeleteProfile}
            className="main-button-style edit-profile-button button-style-red"
          >
            <BinSvgIcon className="edit-icon" />
            <span className="edit-label">Delete Account</span>
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
