import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import { useContext } from "react";

const InputMeasurement = ({ label, name, handleInput, value }) => {
  const { finalJumperData } = useContext(
    FinalJumperDataContext
  );

  return (
    <div className="measurement-row">
      <p>{label}</p>
      <input
        onChange={handleInput}
        name={name}
        type="number"
        className="fit-and-measurements-input"
        value={value}
      />
      {finalJumperData.selectedUnit === "centimetres" ?  <p>cm</p> : <p>inches</p>}
    </div>
  )
};

export default InputMeasurement;