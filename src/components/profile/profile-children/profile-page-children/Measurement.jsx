import React, { useState, useContext, useEffect } from "react";
import { SignedInUserContext, SignedInUserContextProvider } from "../../../../contexts/SignedInUserContext";

const Measurement = ({ measurement, isUserEditing, updatedUserData, setUpdatedUserData }) => {
  const [preferredUnit, setPreferredUnit] = useState("cm");
  const { signedInUserData, setSignedInUserData } = useContext(
       SignedInUserContext
     );
  
  useEffect(() => {
    if (signedInUserData.selectedUnit) {
      setPreferredUnit(signedInUserData.selectedUnit);
    }
  }, []);

  const handleChangeUserMeasurement = (event) => {
    const newMeasurementValue = event.target.value;
    const key = measurement.name;
    const userData = { ...updatedUserData, [key]: newMeasurementValue };
    setUpdatedUserData(userData);
  };

  return isUserEditing ? (
    <div className="profile-row">
      <p id="profile-label">
        <b>{measurement.label}</b>
      </p>
      <input
        onChange={handleChangeUserMeasurement}
        name={measurement.label}
        type="number"
        className="fit-and-measurements-input"
      />
      <p>{preferredUnit}</p>
    </div>
  ) : (
    <div className="profile-row">
      <p id="profile-label">
        <b>{measurement.label}</b>
      </p>
      <p id="profile-value">{measurement.value + " " + preferredUnit}</p>
    </div>
  );
};

export default Measurement;
