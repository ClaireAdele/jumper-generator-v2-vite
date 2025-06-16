import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import rightArrow from "../../data-entry-assets/right-arrow.svg";


const PickUnit = ({ setToggleComponent }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const { setFinalJumperData } = useContext(FinalJumperDataContext);

  const handleInput = (event) => {
    const { value } = event.target;
    setSelectedUnit(value);
  };

  const submitUnit = () => {
    if (!selectedUnit) {
      setErrorMessage("You must pick a unit");
      return;
    }

    setFinalJumperData({ selectedUnit });
    setToggleComponent("pick-shape");
  };

  const units = ["centimetres", "inches"];

  return (
    <div className="jumper-selection-form-section">
      {units.map((unit) => (
          <button
            key={unit}
            value={unit}
            onClick={handleInput}
            name="unit"
            className={
              selectedUnit === unit
                ? "pick-jumper-button-selected"
                : "pick-jumper-button"
            }
          >
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </button>
      ))}
      
      {selectedUnit &&  (
        <img
          src={rightArrow}
          onClick={submitUnit}
          style={{ maxWidth: "10%" }}
        >
        </img>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default PickUnit;
