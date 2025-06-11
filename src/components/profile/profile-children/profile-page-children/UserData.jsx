import { useState, useContext } from "react";
import Measurement from "./Measurement";
import editSvgIcon from "../../profile-assets/pen-square-svgrepo-com.svg";
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
        onClick={handleClickEditProfile}
        className="secondary-button-style"
        style={{ alignSelf: "center", marginBottom: "3%", marginTop: "10%" }}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default UserData;
