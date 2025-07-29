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
        className={
          finalJumperData.easeAmount === easeAmountOption.value
            ? "pick-jumper-button-selected"
            : "pick-jumper-button"
        }
        onClick={handleClick}
      >
        {easeAmountOption.label}
      </button>
  );
};

export default PickFitButton;
