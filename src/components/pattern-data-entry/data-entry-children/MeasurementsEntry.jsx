import React, { useState } from "react";
import PickShape from "./measurements-entry-switch-options/PickShape";
import EnterMeasurements from "./measurements-entry-switch-options/EnterMeasurements";
import ReviewData from "./measurements-entry-switch-options/ReviewData";
import PickUnit from "./measurements-entry-switch-options/PickUnit";

const MeasurementsEntry = ({
}) => {
  const [toggleComponent, setToggleComponent] = useState("pick-unit");

   if (toggleComponent === "pick-unit") {
     return <PickUnit setToggleComponent={setToggleComponent} />;
   }

  if (toggleComponent === "pick-shape") {
    return <PickShape setToggleComponent={setToggleComponent} />;
  }

  if (toggleComponent === "measurements-entry") {
    return <EnterMeasurements setToggleComponent={setToggleComponent} />;
  }

  if (toggleComponent === "review-data") {
    return <ReviewData setToggleComponent={setToggleComponent} />;
  }
};

export default MeasurementsEntry;
