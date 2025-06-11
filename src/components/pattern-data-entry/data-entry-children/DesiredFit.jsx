import { useEffect, useState, useContext } from "react";
import { FinalJumperDataContext } from "../../../contexts/FinalJumperDataContext";
import DesiredFitButton from "./desired-fit-children/DesiredFitButton";
import "../../../App.css";
import "../DataEntry.css";

const DesiredFit = () => {
  const [easeAmount, setEaseAmount] = useState(null);
  const { finalJumperData, setFinalJumperData } = useContext(
      FinalJumperDataContext
  );

  useEffect(() => {
    if (easeAmount === "") {
      setEaseAmount(null);
    }
  }, [easeAmount]);

  const handleEaseInput = (event) => {
    setEaseAmount(event.target.value);
    const updatedFinalJumperData = finalJumperData;
    updatedFinalJumperData.easeAmount = easeAmount;
    setFinalJumperData(updatedFinalJumperData);
  };

  const easeAmountOptions = [
      { ease: 0, text: "Fitted - 0 cm ease" },
      { ease: 7, text: "Standard - 7 cm ease" },
      { ease: 12, text: "Loose - 12cm ease" },
      { ease: 20, text: "Oversized - 20cm ease" },
  ];

  return (
    <div id="ease-selection-container">
      <h3>Desired Fit</h3>
      <h4>Pick a standard amount of ease:</h4>
      <div id="ease-buttons-list">
        {easeAmountOptions.map((easeAmountOption) => {
          return (
            <DesiredFitButton
              key={easeAmountOption.ease}
              easeAmountOption={easeAmountOption}
              setEaseAmount={setEaseAmount}
              finalJumperData={finalJumperData}
              setFinalJumperData={setFinalJumperData}
            />
          );
        })}
      </div>
      <h4>Or add a custom amount:</h4>
      <input type="number" className="fit-and-measurements-input" onChange={handleEaseInput}></input>
    </div>
  );
};

export default DesiredFit;
