import dataCollectionSchema from "../data-entry-assets/sweater-6788998_1280.jpg";
import { useRef, useState } from "react";
import useInView from "../../../custom-hooks/useInView";
  
const HowToTakeMeasurements = ({isVisible}) => {
  const measurementsTakingExplanationRef = useRef()

  console.log(isVisible)

  return (
    <div ref={measurementsTakingExplanationRef} className="measurement-taking-explanation"
    style={{
          maxHeight: isVisible === "hide-measurements" ? `${measurementsTakingExplanationRef.current?.scrollHeight}px` : "0px",
      }}
    >
      <div className="instructions-card-left">
        <img
          src={dataCollectionSchema}
          className="data-collection-schema"
        ></img>
        <p className="measurement-instructions-left">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="instructions-card-right">
        <p className="measurement-instructions-right">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <img
          src={dataCollectionSchema}
          className="data-collection-schema"
        ></img>
      </div>
      <div className="instructions-card-left">
        <img
          src={dataCollectionSchema}
          className="data-collection-schema"
        ></img>
        <p className="measurement-instructions-left">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="instructions-card-right">
        <p className="measurement-instructions-right">
          "Lorem ips um dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <img
          src={dataCollectionSchema}
          className="data-collection-schema"
        ></img>
      </div>
      <div></div>
    </div>
  );
};

export default HowToTakeMeasurements;
