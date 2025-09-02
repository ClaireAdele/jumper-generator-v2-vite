const PickFitButton = ({
  easeAmountOption,
  setEaseAmount,
  finalJumperData,
  setFinalJumperData,
}) => {
  const handleClick = () => {
    setEaseAmount(easeAmountOption.value);

    const updatedFinalJumperData = finalJumperData;
    updatedFinalJumperData.easeAmount = easeAmountOption.value;
    setFinalJumperData(updatedFinalJumperData);
  };

  return (
    <button
      className={`pick-jumper-button ${finalJumperData.easeAmount === easeAmountOption.value ? "selected" : ""}`}
      onClick={handleClick}
    >
      {easeAmountOption.label}
    </button>
  );
};

export default PickFitButton;
