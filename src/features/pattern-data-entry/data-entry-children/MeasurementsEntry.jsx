import React, { useState } from "react";
import PickJumperShape from "./measurements-entry-switch-options/PickJumperShape";
import PickNecklineShape from "./measurements-entry-switch-options/PickNecklineShape";
import EnterMeasurements from "./measurements-entry-switch-options/EnterMeasurements";
import ReviewData from "./measurements-entry-switch-options/ReviewData";
import PickUnit from "./measurements-entry-switch-options/PickUnit";
import PickFit from "./measurements-entry-switch-options/PickFit";

const MeasurementsEntry = ({ toggleComponent, setToggleComponent
}) => {

   if (toggleComponent === "pick-unit") {
     return <PickUnit setToggleComponent={setToggleComponent} />;
   }

  if (toggleComponent === "pick-jumper-shape") {
    return <PickJumperShape setToggleComponent={setToggleComponent} />;
  }

  if (toggleComponent === "pick-neckline-shape") {
    return <PickNecklineShape setToggleComponent={setToggleComponent} />;
  }

  if (toggleComponent === "pick-fit") {
    return <PickFit setToggleComponent={setToggleComponent} />;
  }

  if (toggleComponent === "measurements-entry") {
    return <EnterMeasurements setToggleComponent={setToggleComponent} />;
  }

  if (toggleComponent === "review-data") {
    return <ReviewData setToggleComponent={setToggleComponent} />;
  }
};

export default MeasurementsEntry;
