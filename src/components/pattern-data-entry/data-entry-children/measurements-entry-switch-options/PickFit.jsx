import { useEffect, useState, useContext } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import PickFitButton from "./PickFitButton";
import NavigationArrows from "./NavigationArrows";
import { easeAmountOptions } from "../utils/data_to_text_objects";
import "../../../../App.css";
import "../../DataEntry.css";


const PickFit = ({setToggleComponent}) => {
  const [easeAmount, setEaseAmount] = useState(null);
  const { finalJumperData, setFinalJumperData } = useContext(
      FinalJumperDataContext
  );
  const [error, setError] = useState(null)

  useEffect(() => {
    if (easeAmount === "") {
      setEaseAmount(null);
    }
  }, [easeAmount]);

  const handleEaseInput = (event) => {
    const value = event.target.value;
    setEaseAmount(value);

    setFinalJumperData((prev) => ({
      ...prev,
      easeAmount: value,
    }));
  };

  const submitEase = () => { 
    if (!finalJumperData.easeAmount) { 
      setError("You must set an ease amount");
      return;
    }

    setToggleComponent("measurements-entry")
  }

  return (
    <div className="jumper-selection-form-section">
      <div className="jumper-selection-form-buttons-collection">
      <h4>Pick a standard amount of ease:</h4>
        {easeAmountOptions.map((easeAmountOption) => {
          return (
            <PickFitButton
              key={easeAmountOption.value}
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
      <NavigationArrows handleClickLeftArrow={() => { setToggleComponent("pick-neckline-shape")}} handleClickRightArrow={submitEase}/>
    </div>
  );
};

export default PickFit;
