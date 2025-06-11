import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";;


const PickShape = ({ setToggleComponent }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [jumperData, setJumperData] = useState({});
  const { setFinalJumperData } = useContext(FinalJumperDataContext);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setJumperData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClickPickDifferentUnit = () => setToggleComponent("pick-unit");


  const submitJumperAndNeckShape = () => {
    const { jumperShape, necklineShape } = jumperData;

    if (!jumperShape || !necklineShape) {
      setErrorMessage("You must pick a jumper and neckline shape");
      return;
    }

    setFinalJumperData((prevData) => ({ ...prevData, jumperShape, necklineShape }));
    setToggleComponent("measurements-entry");
  };

  // Configurations for buttons
  const jumperShapes = [
    { value: "top-down-raglan", label: "Top-down Raglan Jumper" },
    { value: "drop-shoulder", label: "Drop-shoulder Seamed Jumper" },
    { value: "bottom-up", label: "Bottom-up Raglan Jumper" },
  ];
  const necklineShapes = [
    { value: "folded-neckline", label: "Folded Round Neckline" },
    { value: "v-shape", label: "V-Shape Neckline" },
    { value: "boat-neck", label: "Boat Neckline" },
    { value: "round-neck", label: "Round Neckline" },
  ];

  return (
    <div id="pick-shape-container">
      <h3>Pick a Jumper Shape</h3>
      {jumperShapes.map(({ value, label }) => (
        <div>
          <button
            key={value}
            value={value}
            onClick={handleInput}
            name="jumperShape"
            className={
              jumperData.jumperShape === value
                ? "pick-jumper-button-selected"
                : "pick-jumper-button"
            }
          >
            {label}
          </button>
        </div>
      ))}

      <h3>Pick a Neckline Shape</h3>
      {necklineShapes.map(({ value, label }) => (
        <div>
          <button
            key={value}
            value={value}
            onClick={handleInput}
            name="necklineShape"
            className={
              jumperData.necklineShape === value
                ? "pick-jumper-button-selected"
                : "pick-jumper-button"
            }
          >
            {label}
          </button>
        </div>
      ))}

      <button className="main-button-style" onClick={handleClickPickDifferentUnit}>Pick a different unit</button>

      {jumperData.necklineShape && jumperData.jumperShape && (
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


export default PickShape;
