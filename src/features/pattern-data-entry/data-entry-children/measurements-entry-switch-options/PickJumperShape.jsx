import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";import NavigationArrows from "./NavigationArrows";
import { jumperShapes } from "../utils/data_to_text_objects";


const PickShape = ({ setToggleComponent }) => {
  const { setFinalJumperData, finalJumperData } = useContext(FinalJumperDataContext);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFinalJumperData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClickPickDifferentUnit = () => setToggleComponent("pick-unit");

  const submitJumperShape = () => {
    setToggleComponent("pick-neckline-shape");
  };

  return (
    <div className="jumper-selection-form-box">
      <div className="jumper-selection-form-section">
        {jumperShapes.map(({ value, label }) => (
          <button
            key={value}
            value={value}
            onClick={handleInput}
            name="jumperShape"
            className={`pick-jumper-button
          ${finalJumperData.jumperShape === value
                ? "selected"
                : ""
              }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      <NavigationArrows handleClickLeftArrow={handleClickPickDifferentUnit} handleClickRightArrow={submitJumperShape} />
    </div>
  );
};


export default PickShape;
