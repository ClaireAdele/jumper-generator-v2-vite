const checkAllMeasurementsEntered = (finalJumperData, shapeFields) => {
  const shape = finalJumperData.jumperShape;
  const finalJumperDataFields = Object.keys(finalJumperData);
  const requiredFields = shapeFields[shape];

  if (!requiredFields) {
    console.warn("Unknown shape type:", shape);
    return false;
  }

  for (const field of requiredFields) {
    if (!finalJumperDataFields.includes(field.name)) {
      console.error(`Missing field: ${field.name}`);
      return false;
    }
  }

  return true;
};

const checkAllFieldsSelected = (finalJumperData) => {
const finalJumperNecessaryFields = {
  "top-down-raglan": [
    "knittingGauge",
    "chestCircumference",
    "armLength",
    "bodyLength",
    "selectedUnit",
    "easeAmount",
    "jumperShape",
    "necklineShape",
  ],
  "drop-shoulder": [
    "knittingGauge",
    "chestCircumference",
    "bodyLength",
    "necklineToChest",
    "shoulderWidth",
    "armLength",
    "selectedUnit",
    "easeAmount",
    "jumperShape",
    "necklineShape",
  ],
  "bottom-up": [
    "knittingGauge",
    "chestCircumference",
    "bodyLength",
    "necklineToChest",
    "shoulderWidth",
    "armLength",
    "selectedUnit",
    "easeAmount",
    "jumperShape",
    "necklineShape",
  ],
};
  
  const shape = finalJumperData.jumperShape;
  const finalJumperDataFields = Object.keys(finalJumperData);
  const requiredFields = finalJumperNecessaryFields[shape];

  for (const field of requiredFields) {
    if (!finalJumperDataFields.includes(field)) {
      console.error(`Missing field: ${field.name}`);
      return false;
    }
  }

  return true;
};

const selectLabel = (shapeList, selectedShape, finalJumperData) => {
  return shapeList.map((shape) => {
    if (shape.value == finalJumperData[selectedShape]) {
      return shape.label;
    }
  });
};

const writeToSessionData = (finalJumperData) => {
  const jumperDataFields = Object.keys(finalJumperData);

  jumperDataFields.forEach((field) => {
    sessionStorage.setItem(field, finalJumperData[field]);
  });
};

export { checkAllMeasurementsEntered, checkAllFieldsSelected, selectLabel, writeToSessionData };
