import EditProfileSvgIcon from "./../profile-assets/pen-square-svgrepo-com.svg?react";
import { editUserDetails } from "./../../../services-and-util-functions/user-services";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import useInView from "./../../../custom-hooks/useInView";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext";

const ValidateNewMeasurementsPopUp = ({
    togglePopUp,
    setTogglePopUp,
    setisUserEditingMeasurements,
    updatedUserData,
}) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [ValidateNewMeasurementsPopUpRef, isVisible] = useInView();
    const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);
    const navigate = useNavigate();

    const handleClickCancel = () => {
        setTogglePopUp(false);
    }

    const handleClickValidateMeasurementsUpdate = async () => {
        try {
            const user = await editUserDetails(updatedUserData);
            setSignedInUserData(user);
            setSuccessMsg("Measurements succesfully updated");
            setisUserEditingMeasurements(false);
        } catch (error) {
            setErrorMsg("Measurements update failed - try again!");
        }
    }

    const handleClickClose = () => {
        setTogglePopUp(false);
    }

    if (!togglePopUp) return null;

    if (errorMsg) {
        return (
            <div className="pop-up-overlay">
                <div ref={ValidateNewMeasurementsPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`} >
                    <div className="pop-up-icon button-style-red">
                        <EditProfileSvgIcon className="pop-up-icon-inner" />
                    </div>
                    <h3>{errorMsg}</h3>
                    <div>
                        <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickCancel} >Close</button>
                    </div>
                </div>
            </div>
        );
    };

    if (successMsg) {
        return (
            <div className="pop-up-overlay">
                <div ref={ValidateNewMeasurementsPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                    <div className="pop-up-icon button-style-green">
                        <EditProfileSvgIcon className="pop-up-icon-inner" />
                    </div>
                    <h3>{successMsg}</h3>
                    <div>
                        <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="pop-up-overlay">
            <div ref={ValidateNewMeasurementsPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                <div className="pop-up-icon button-style-green">
                    <EditProfileSvgIcon className="pop-up-icon-inner" />
                </div>
                <h3>Are you sure you want update your measurements?</h3>
                <div>
                    <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickCancel} >No, cancel</button>
                    <button className="main-button-style button-style-green" onClick={handleClickValidateMeasurementsUpdate}>Yes, save my changes</button>
                </div>
            </div>
        </div>
    );
};

export default ValidateNewMeasurementsPopUp;