import EditProfileSvgIcon from "./../profile-assets/pen-square-svgrepo-com.svg?react";
import { resetPasswordRequestUserLoggedIn } from "../../../services-and-util-functions/auth-services";
import { PopUpContext } from "../../../contexts/PopUpsContext";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import useInView from "./../../../custom-hooks/useInView";

const EditPasswordPopUp = ({editPasswordForm}) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [EditPasswordPopUpRef, isVisible] = useInView();
    const navigate = useNavigate();

    const {currentPopUp, setCurrentPopUp} = useContext(PopUpContext);

    const handleClickCancel = () => {
        setCurrentPopUp(null);
    }

    const handleClickSubmitPasswordChangeRequest = async () => {
        try {
            await resetPasswordRequestUserLoggedIn(editPasswordForm.currentPassword, editPasswordForm.newPassword)
            setSuccessMsg("Password change successful!");
        } catch (error) {
            console.log(error)
            setErrorMsg("Password change request failed - try again!");
        }
    }

    const handleClickClose = () => {
        setCurrentPopUp(null);
    }

    if (!currentPopUp) return null;

    if (errorMsg) {
        return (
            <div className="pop-up-overlay">
                <div ref={EditPasswordPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`} >
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
                <div ref={EditPasswordPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
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
            <div ref={EditPasswordPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                <div className="pop-up-icon button-style-purple">
                    <EditProfileSvgIcon className="pop-up-icon-inner" />
                </div>
                <h3>Are you sure you want to update your password?</h3>
                <div>
                    <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickCancel} >No, cancel</button>
                    <button className="main-button-style button-style-purple" onClick={handleClickSubmitPasswordChangeRequest}>Yes, send confirmation e-mail</button>
                </div>
            </div>
        </div>
    );
};

export default EditPasswordPopUp;
