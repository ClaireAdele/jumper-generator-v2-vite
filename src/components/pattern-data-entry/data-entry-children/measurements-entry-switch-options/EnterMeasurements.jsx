import { useState, useContext } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import { checkAllMeasurementsEntered } from "../../../../services-and-util-functions/utils";
import InputMeasurement from "./InputMeasurement";
import NavigationArrows from "./NavigationArrows";

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

const EnterMeasurements = ({ setToggleComponent }) => {
  const [errorMessage, setErrorMessage] = useState(null)

  const { finalJumperData, setFinalJumperData } = useContext(
    FinalJumperDataContext
  );

  const handleClickPickDifferentFit = () => setToggleComponent("pick-fit");

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFinalJumperData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitData = () => {
    if (errorMessage)
      setErrorMessage(null);
    
    if (!checkAllMeasurementsEntered(finalJumperData, shapeFields)) { 
      setErrorMessage("You must fill all the measurement information to progress.");
      return;
    }

    setToggleComponent("review-data");
  };

  const currentShape = finalJumperData.jumperShape;
  const fields = shapeFields[currentShape];

  return (
    <div className="jumper-selection-form-section">
      <div id="enter-measurements-section">
        {!currentShape}
        {fields.map((field) => (
           <InputMeasurement
            key={field.name}
            label={field.label}
            name={field.name}
            handleInput={handleInput}
            value={finalJumperData[field.name] ? finalJumperData[field.name] : "" }
          />
        ))}
        {errorMessage && <p style={{color:"rgb(126, 70, 136)", fontSize:"small"}}>{errorMessage}</p>}
      </div>
      <NavigationArrows handleClickLeftArrow={handleClickPickDifferentFit} handleClickRightArrow={handleSubmitData}/>
    </div>
  );
};

export default EnterMeasurements;