import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";import NavigationArrows from "./NavigationArrows";
;

const necklineShapes = [
    { value: "folded-neckline", label: "Folded Round Neckline" },
    { value: "v-shape", label: "V-Shape Neckline" },
    { value: "boat-neck", label: "Boat Neckline" },
    { value: "round-neck", label: "Round Neckline" },
];

const PickNeckLineShape = ({ setToggleComponent }) => {
  const { setFinalJumperData, finalJumperData } = useContext(FinalJumperDataContext);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFinalJumperData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClickPickDifferentShape = () => setToggleComponent("pick-jumper-shape");

  const submitNecklineShape = () => {
    setToggleComponent("pick-fit");
  };

  return (
    <div className="jumper-selection-form-section">
      <div className="jumper-selection-form-buttons-collection">

        {necklineShapes.map(({ value, label }) => (
          <button
            key={value}
            value={value}
            onClick={handleInput}
            name="necklineShape"
            className={
              finalJumperData.necklineShape === value
                ? "pick-jumper-button-selected"
                : "pick-jumper-button"
            }
          >
            {label}
          </button>
        ))}
      </div>
      
      <NavigationArrows handleClickLeftArrow={handleClickPickDifferentShape} handleClickRightArrow={submitNecklineShape} />
    </div>
  );
};


export default PickNeckLineShape;
