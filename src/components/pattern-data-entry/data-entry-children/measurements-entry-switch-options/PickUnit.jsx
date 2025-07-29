import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import rightArrow from "../../data-entry-assets/right-arrow.svg";
import NavigationArrows from "./NavigationArrows";


const PickUnit = ({ setToggleComponent }) => {
  const { setFinalJumperData, finalJumperData } = useContext(FinalJumperDataContext);

  const handleInput = (event) => {
    const { value } = event.target;
    setFinalJumperData((prevData) => ({ ...prevData, selectedUnit: value }));
  };

  const submitUnit = () => {
    setToggleComponent("pick-jumper-shape");
  };

  const units = ["centimetres", "inches"];

  return (
    <div className="jumper-selection-form-section">
      <div className="jumper-selection-form-buttons-collection">
      {units.map((unit) => (
          <button
            key={unit}
            value={unit}
            onClick={handleInput}
            name="unit"
            className={
              finalJumperData.selectedUnit === unit
                ? "pick-jumper-button-selected"
                : "pick-jumper-button"
            }
          >
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </button>
      ))}
      </div>

      <NavigationArrows handleClickRightArrow={submitUnit}/>
    </div>
  );
};

export default PickUnit;
