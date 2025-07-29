//Jumper shapes list and what to label buttons
const jumperShapes = [
  { value: "top-down-raglan", label: "Top-down Raglan Jumper" },
  { value: "drop-shoulder", label: "Drop-shoulder Seamed Jumper" },
  { value: "bottom-up", label: "Bottom-up Raglan Jumper" },
];

//Neckline shapes list and what to label buttons
const necklineShapes = [
  { value: "folded-neckline", label: "Folded Round Neckline" },
  { value: "v-shape", label: "V-Shape Neckline" },
  { value: "boat-neck", label: "Boat Neckline" },
  { value: "round-neck", label: "Round Neckline" },
];

//Ease amount options and what to label buttons
const easeAmountOptions = [
  { value: 0, label: "Fitted - 0cm ease" },
  { value: 7, label: "Standard - 7cm ease" },
  { value: 12, label: "Loose - 12cm ease" },
  { value: 20, label: "Oversized - 20cm ease" },
];

// Jumper shapes with their list of necessary measurements + what to label buttons.
const shapeFields = {
  "top-down-raglan": [
    { label: "Knitting Gauge", name: "knittingGauge" },
    { label: "Chest Circumference", name: "chestCircumference" },
    { label: "Arm Length", name: "armLength" },
    { label: "Body Length", name: "bodyLength" },
  ],
  "drop-shoulder": [
    { label: "Knitting Gauge", name: "knittingGauge" },
    { label: "Chest Circumference", name: "chestCircumference" },
    { label: "Body Length", name: "bodyLength" },
    { label: "Bottom of Neckline to Chest Line", name: "necklineToChest" },
    { label: "Shoulder Width", name: "shoulderWidth" },
    { label: "Arm Length", name: "armLength" },
  ],
  "bottom-up": [
    { label: "Knitting Gauge", name: "knittingGauge" },
    { label: "Chest Circumference", name: "chestCircumference" },
    { label: "Body Length", name: "bodyLength" },
    { label: "Bottom of Neckline to Chest Line", name: "necklineToChest" },
    { label: "Shoulder Width", name: "shoulderWidth" },
    { label: "Arm Length", name: "armLength" },
  ],
};

export { easeAmountOptions, jumperShapes, shapeFields, necklineShapes };
