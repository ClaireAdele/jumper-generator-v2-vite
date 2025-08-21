import { useState, useContext } from "react";
import Measurement from "./Measurement";
import EditSvgIcon from "../../profile-assets/pen-square-svgrepo-com.svg?react";
import BinSvgIcon from "../../profile-assets/trash-svgrepo-com.svg?react";
import { editUserDetails } from "../../../../services-and-util-functions/user-services";
import { SignedInUserContext } from "../../../../contexts/SignedInUserContext";

const UserData = ({ measurementsList }) => {
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const { signedInUserData, setSignedInUserData } =
    useContext(SignedInUserContext);

  const handleClickEditProfile = async () => {
    setIsUserEditing(true);
  };

  const handleClickApplyChanges = async () => {
    const user = await editUserDetails(updatedUserData);
    console.log("user", user);
    setSignedInUserData(user)
    setIsUserEditing(false);
  }

  return isUserEditing ? (
    <div id="profile-info-style">
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
        className="secondary-button-style"
        style={{ alignSelf: "center", marginBottom: "3%", marginTop: "10%" }}
      >
        Apply Changes
      </button>
    </div>
  ) : (
    <div id="profile-info-style">
      <button
        onClick={handleClickEditProfile}
        className="edit-profile-button"
        style={{ alignSelf: "flex-end", marginBottom: "1%", marginTop: "1%", marginRight: "2%" }}
      >
        <EditSvgIcon className="edit-icon"/>
          <span className="edit-label" >Edit Profile</span>
        </button>
        <button
        onClick={handleClickEditProfile}
        className="edit-profile-button"
        style={{ alignSelf: "flex-end", marginBottom: "1%", marginTop: "1%", marginRight: "2%", backgroundColor:"#A30000" }}
      >
        <BinSvgIcon className="edit-icon"/>
          <span className="edit-label" >Delete Account</span>
      </button>
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
    </div>
  );
};

export default UserData;
