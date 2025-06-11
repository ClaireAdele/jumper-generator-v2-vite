const validateData = (finalJumperData, jumperData) => {
    const keys = Object.keys(jumperData);

    if (!keys.includes("chestCircumference") || jumperData.chestCircumference === "")
        return false;

    if (!keys.includes("armLength") || jumperData.armLength === "")
        return false;

    if (!keys.includes("bodyLength") || jumperData.bodyLength === "")
        return false;

    if (finalJumperData.jumper === "top-down-raglan") { 
        return true; 
    }

    if (!keys.includes("necklineToChest") || jumperData.necklineToChest === "")
        return false;

    if (!keys.includes("shoulderWidth") || jumperData.shoulderWidth === "")
        return false;

    return true; 
};

const formatShapeName = (currentShapeString) => {
  const shapeMapping = {
    "top-down-raglan": "Top-Down Raglan Jumper",
    "drop-shoulder": "Drop-Shoulder Jumper",
    "bottom-up": "Drop-Shoulder Jumper",
  };

  return shapeMapping[currentShapeString] || "Unknown Shape";
};

export { validateData, formatShapeName };
