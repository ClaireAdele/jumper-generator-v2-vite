import EditProfileSvgIcon from "./../profile-assets/pen-square-svgrepo-com.svg?react";
import { resetEmailUserLoggedIn } from "./../../../services-and-util-functions/auth-services";
import { PopUpContext } from "../../../contexts/PopUpsContext";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import useInView from "./../../../custom-hooks/useInView";

const EditEmailAddressPopUp = ({editEmailAddressForm}) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [EditEmailAddressPopUpRef, isVisible] = useInView();
    const navigate = useNavigate();

    const {currentPopUp, setCurrentPopUp} = useContext(PopUpContext);

    const handleClickCancel = () => {
        setCurrentPopUp(null);
    }

    const handleClickValidateMeasurementsUpdate = async () => {
        try {
            await resetEmailUserLoggedIn(editEmailAddressForm.newEmail, editEmailAddressForm.password)
            setSuccessMsg("E-mail address change request successfully sent - you will now be logged out from all devices for security reasons.");
            navigate("/")
        } catch (error) {
            console.log(error)
            setErrorMsg("E-mail address change request failed - try again!");
        }
    }

    const handleClickClose = () => {
        setCurrentPopUp(null);
    }

    if (!currentPopUp) return null;

    if (errorMsg) {
        return (
            <div className="pop-up-overlay">
                <div ref={EditEmailAddressPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`} >
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
                <div ref={EditEmailAddressPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                    <div className="pop-up-icon button-style-purple">
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
            <div ref={EditEmailAddressPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                <div className="pop-up-icon button-style-purple">
                    <EditProfileSvgIcon className="pop-up-icon-inner" />
                </div>
                <h3>Are you sure you want request to change your e-mail address?</h3>
                <div>
                    <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickCancel} >No, cancel</button>
                    <button className="main-button-style button-style-purple" onClick={handleClickValidateMeasurementsUpdate}>Yes, send confirmation e-mail</button>
                </div>
            </div>
        </div>
    );
};

export default EditEmailAddressPopUp;