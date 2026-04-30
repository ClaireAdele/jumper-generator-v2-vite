import UserData from "./UserData";
import HowToTakeMeasurements from "../../pattern-data-entry/data-entry-children/HowToTakeMeasurements";
import DropDownItem from "../../../components/DropDownItem";

import { useState } from "react";
import useInView from "../../../custom-hooks/useInView";

const MyMeasurementsSection = ({
    measurementsList,
    setToggleValidateNewMeasurementsPopUp,
    updatedUserData,
    setUpdatedUserData,
    setisUserEditingMeasurements,
    isUserEditingMeasurements
}) => {
    const [profilePageUserDataContainer, isVisible] = useInView({ threshold: 0 });
    
    return (
        <div ref={profilePageUserDataContainer} className={`profile-page-user-data-container ${isVisible ? "visible" : ""}`}>
            <UserData
                measurementsList={measurementsList}
                setToggleValidateNewMeasurementsPopUp={setToggleValidateNewMeasurementsPopUp}
                updatedUserData={updatedUserData}
                setUpdatedUserData={setUpdatedUserData}
                setisUserEditingMeasurements={setisUserEditingMeasurements}
                isUserEditingMeasurements={isUserEditingMeasurements}
            />
            <DropDownItem className="drop-down-profile-page" title="Show how to take measurements"><HowToTakeMeasurements /></DropDownItem>
        </div>
    );
};

export default MyMeasurementsSection;