import { useState, useContext } from "react";
import { PopUpContext } from "../../../contexts/PopUpsContext";
import { popUpList } from "../../../services-and-util-functions/utils";

const EditPassword = ({ editPasswordForm, setEditPasswordForm }) => {
    const [errorMsg, setErrorMsg] = useState(""); 
    const { setCurrentPopUp } = useContext(PopUpContext);

         console.log(editPasswordForm)

    const handleSubmitNewPassword = (event) => {
        event.preventDefault();
        //Needs to have the current password + the new one
        const { currentPassword, confirmedNewPassword, newPassword } = editPasswordForm; 

        if (!currentPassword || !newPassword || !confirmedNewPassword) {
            setEditPasswordForm({});
            return setErrorMsg("All fields are required.");
        }

        if (newPassword !== confirmedNewPassword) {
            setEditPasswordForm({});
            return setErrorMsg("The current password and confirmed password must match.")
        }

        if (currentPassword === newPassword) {
            setEditPasswordForm({});
            return setErrorMsg("The new password must be different from the old one.")
        }

        setErrorMsg(null);
        setCurrentPopUp(popUpList.editPasswordPopUp);
        //Will need to clearn the fields of th form here or in the pop-up
    };


    const handleInput = (event) => {
        setEditPasswordForm({ ...editPasswordForm, [event.target.name]: event.target.value });
    }

    return (
        <div className="edit-account-tile standard-box-styling">
            <h3>Edit your password:</h3>
            <form className="edit-account-form-section" onSubmit={handleSubmitNewPassword}>
                <div className="edit-account-inputs-section">
                    <div className="edit-account-input">
                        <label htmlFor="current-password"><b>Current password:</b></label>
                        <input onChange={handleInput} id="current-password" name="currentPassword" type="password" />
                    </div>
                    <div className="edit-account-input">
                        <label htmlFor="new-password"><b>New password:</b></label>
                        <input id="new-password" name="newPassword" type="password" onChange={handleInput} />
                    </div>
                    <div className="edit-account-input">
                        <label htmlFor="confirm-password"><b>Confirm new password:</b></label>
                        <input id="confirm-new-password" name="confirmedNewPassword" type="password" onChange={handleInput} />
                    </div>
                </div>
                {errorMsg && <p className="error-msg-edit-profile">{errorMsg}</p>}
                <button type="submit" className="main-button-style button-style-purple edit-profile-button">
                    Submit password change request
                </button>
            </form>
        </div>
    );
};

export default EditPassword;