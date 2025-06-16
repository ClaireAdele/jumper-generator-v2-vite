const PickFitButton = ({
  easeAmountOption,
  setEaseAmount,
  finalJumperData,
  setFinalJumperData,
}) => {
  const handleClick = () => {
    setEaseAmount(easeAmountOption.ease);

    const updatedFinalJumperData = finalJumperData;
    updatedFinalJumperData.easeAmount = easeAmountOption.ease;
    setFinalJumperData(updatedFinalJumperData);
  };

  return (
      <button
        className={
          finalJumperData.easeAmount === easeAmountOption.ease
            ? "pick-jumper-button-selected"
            : "pick-jumper-button"
        }
        onClick={handleClick}
      >
        {easeAmountOption.text}
      </button>
  );
};

export default PickFitButton;
