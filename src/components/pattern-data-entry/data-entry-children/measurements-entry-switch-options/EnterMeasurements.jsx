import { useState, useContext } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import { validateData, formatShapeName } from "../../../../services-and-util-functions/utils";
import InputMeasurement from "./InputMeasurement";

const EnterMeasurements = ({ setToggleComponent }) => {
  const [jumperData, setJumperData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const { finalJumperData, setFinalJumperData } = useContext(
    FinalJumperDataContext
  );

  const handleClickPickDifferentShape = () => setToggleComponent("pick-shape");

  const handleInput = (event) => {
    const { name, value } = event.target;
    setJumperData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitData = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }

    if (!validateData(finalJumperData, jumperData)) {
      setErrorMessage("You must enter the relevant data");
    } else {
      const updatedFinalJumperData = { ...finalJumperData, ...jumperData };
      setFinalJumperData(updatedFinalJumperData);
      setToggleComponent("review-data");
    }
  };

  // Define shapes and corresponding fields
  const shapeFields = {
    "top-down-raglan": [
      { label: "Knitting Gauge", name: "knittingGauge" },
      { label: "Chest Circumference", name: "chestCircumference" },
      { label: "Arm Length", name: "armLength" },
      { label: "Body Length", name: "bodyLength" },
    ],
    "drop-shoulder": [
      { label: "Knitting Gauge", name: "knittingGauge" },
      { label: "Chest Circumference", name: "chestCircumference" },
      { label: "Body Length", name: "bodyLength" },
      { label: "Bottom of Neckline to Chest Line", name: "necklineToChest" },
      { label: "Shoulder Width", name: "shoulderWidth" },
      { label: "Arm Length", name: "armLength" },
    ],
    "bottom-up": [
      { label: "Knitting Gauge", name: "knittingGauge" },
      { label: "Chest Circumference", name: "chestCircumference" },
      { label: "Body Length", name: "bodyLength" },
      { label: "Bottom of Neckline to Chest Line", name: "necklineToChest" },
      { label: "Shoulder Width", name: "shoulderWidth" },
      { label: "Arm Length", name: "armLength" },
    ],
  };

  const currentShape = finalJumperData.jumperShape;
  const fields = shapeFields[currentShape]; 
  const formattedShapeName = formatShapeName(currentShape);
  

  if (!fields) return null; // Handle case where jumperShape is invalid

  return (
    <div className="measurements-entry-tile">
      <h3>{formattedShapeName}</h3>

      {fields.map((field) => (
        <InputMeasurement
          key={field.name}
          label={field.label}
          name={field.name}
          handleInput={handleInput}
        />
      ))}

      <div className="buttons-section">
        <button
          className="pick-jumper-button"
          id="pick-different-shape"
          onClick={handleClickPickDifferentShape}
        >
          Pick different shape
        </button>
        <button className="main-button-style" onClick={handleSubmitData}>
          Submit data
        </button>
      </div>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default EnterMeasurements;