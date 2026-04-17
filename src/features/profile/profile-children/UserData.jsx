import { useState, useContext } from "react";

import { editUserDetails } from "../../../services-and-util-functions/user-services";


import Measurement from "./Measurement";
import EditSvgIcon from "./../profile-assets/pen-square-svgrepo-com.svg?react";
import CancelEditSvg from "./../profile-assets/cancel-close-delete-svgrepo-com.svg?react";

const UserData = ({
  measurementsList,
  setToggleValidateNewMeasurementsPopUp,
  updatedUserData,
  setUpdatedUserData,
  setisUserEditingMeasurements,
  isUserEditingMeasurements
}) => {

  const handleClickEditProfile = async () => {
    setisUserEditingMeasurements(true);
  };

  const handleClickCancelEditProfile = async () => {
    setisUserEditingMeasurements(false);
  };

  const handleClickApplyChanges = async () => {
    setToggleValidateNewMeasurementsPopUp(true);
  }

  if (isUserEditingMeasurements) {
    return (
      <div className="profile-page-measurements-block">
        <div className="edit-profile-button-section">
          <button
            onClick={handleClickCancelEditProfile}
            className="main-button-style edit-profile-button button-style-red"
          >
            <CancelEditSvg className="edit-icon" />
            <span className="edit-label">Cancel Changes</span>
          </button>
        </div>

        <div className="profile-page-measurements-list">
          {measurementsList.map((measurement) => {
            return (
              <Measurement
                key={measurement.name}
                measurement={measurement}
                isUserEditingMeasurements={isUserEditingMeasurements}
                setisUserEditingMeasurements={setisUserEditingMeasurements}
                updatedUserData={updatedUserData}
                setUpdatedUserData={setUpdatedUserData}
              />
            );
          })}
        </div>
        <button
          onClick={handleClickApplyChanges}
          className="main-button-style button-style-purple edit-profile-apply-changes-button"
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
            className="main-button-style edit-profile-button button-style-purple"
          >
            <EditSvgIcon className="edit-icon" />
            <span className="edit-label">Edit Measurements</span>
          </button>
        </div>
      
        <div className="profile-page-measurements-list">
          {measurementsList.map((measurement) => {
            return (
              <Measurement
                key={measurement.name}
                measurement={measurement}
                isUserEditingMeasurements={isUserEditingMeasurements}
                setisUserEditingMeasurements={setisUserEditingMeasurements}
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
