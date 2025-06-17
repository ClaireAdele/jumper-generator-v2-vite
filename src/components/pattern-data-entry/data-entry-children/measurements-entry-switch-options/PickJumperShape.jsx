import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";import NavigationArrows from "./NavigationArrows";
;

const jumperShapes = [
  { value: "top-down-raglan", label: "Top-down Raglan Jumper" },
  { value: "drop-shoulder", label: "Drop-shoulder Seamed Jumper" },
  { value: "bottom-up", label: "Bottom-up Raglan Jumper" },
];

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
    <div className="jumper-selection-form-section">
      <div className="jumper-selection-form-buttons-collection">
        {jumperShapes.map(({ value, label }) => (
          <button
            key={value}
            value={value}
            onClick={handleInput}
            name="jumperShape"
            className={
              finalJumperData.jumperShape === value
                ? "pick-jumper-button-selected"
                : "pick-jumper-button"
            }
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
