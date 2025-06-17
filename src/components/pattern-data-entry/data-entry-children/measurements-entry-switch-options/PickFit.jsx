import { useEffect, useState, useContext } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import PickFitButton from "./PickFitButton";
import NavigationArrows from "./NavigationArrows";
import "../../../../App.css";
import "../../DataEntry.css";

const PickFit = () => {
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
    <div className="jumper-selection-form-section">
      <div className="jumper-selection-form-buttons-collection">
      <h4>Pick a standard amount of ease:</h4>
        {easeAmountOptions.map((easeAmountOption) => {
          return (
            <PickFitButton
              key={easeAmountOption.ease}
              easeAmountOption={easeAmountOption}
              setEaseAmount={setEaseAmount}
              finalJumperData={finalJumperData}
              setFinalJumperData={setFinalJumperData}
            />
          );
        })}
      <h4>Or add a custom amount:</h4>
      <input type="number" className="fit-and-measurements-input" onChange={handleEaseInput}></input>
      </div>
    </div>
  );
};

export default PickFit;
