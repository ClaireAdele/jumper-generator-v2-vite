import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";


const PickUnit = ({ setToggleComponent }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const { setFinalJumperData } = useContext(FinalJumperDataContext);

  const handleInput = (event) => {
    const { value } = event.target;
    setSelectedUnit(value);
  };

  const submitJumperAndNeckShape = () => {
    if (!selectedUnit) {
      setErrorMessage("You must pick a unit");
      return;
    }
    console.log(selectedUnit)

    setFinalJumperData({ selectedUnit });
    console.log(FinalJumperDataContext)
    setToggleComponent("pick-shape");
  };

  const units = ["centimetres", "inches"];

  return (
    <div id="pick-shape-container">
      <h3>Pick Unit</h3>
      {units.map((unit) => (
        <div>
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
        </div>
      ))}

      {selectedUnit &&  (
        <button
          className="main-button-style"
          onClick={submitJumperAndNeckShape}
        >
          Validate Selection
        </button>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default PickUnit;
