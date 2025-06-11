const DesiredFitButton = ({
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
    <div>
      <button
        className={
          finalJumperData.easeAmount === easeAmountOption.ease
            ? "ease-selector-button-selected"
            : "ease-selector-button"
        }
        onClick={handleClick}
      >
        {easeAmountOption.text}
      </button>
    </div>
  );
};

export default DesiredFitButton;
