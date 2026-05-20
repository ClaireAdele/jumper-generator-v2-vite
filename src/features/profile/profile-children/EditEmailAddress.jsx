import { useContext, useState } from "react";
import { PopUpContext } from "../../../contexts/PopUpsContext";
import { popUpList } from "../../../services-and-util-functions/utils";

const EditEmailAddress = ({ editEmailAddressForm, setEditEmailAddressForm }) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const { setCurrentPopUp } = useContext(PopUpContext);
    
    const handleSubmitEmailChangeRequest = (event) => {
        event.preventDefault();

        const {
            newEmail,
            confirmedNewEmail,
            password
        } = editEmailAddressForm;

        if (
            !newEmail ||
            !confirmedNewEmail ||
            !password
        ) {
            return setErrorMsg("All fields are required to send an e-mail change request");
        }

        const trimmedNewEmail = newEmail.trim();
        const trimmedConfirmedNewEmail = confirmedNewEmail.trim();

        if (trimmedNewEmail !== trimmedConfirmedNewEmail) {
            return setErrorMsg("E-mail addresses don't match - try again");
        }

        setErrorMsg(null);
        setCurrentPopUp(popUpList.editEmailAddressPopup);
    };

    const handleInput = (event) => {
        setEditEmailAddressForm({ ...editEmailAddressForm, [event.target.name]: event.target.value });
    }

    return (
        <div className="edit-account-tile standard-box-styling">
            <h3>Edit your e-mail address:</h3>
            <p>We will send a confirmation e-mail to your new address. Your current address will not be updated until you click on the confirmation link attached to the e-mail. Once you send the request, you will be logged out of all your devices for security reasons.</p>
            <form className="edit-account-form-section" onSubmit={handleSubmitEmailChangeRequest}>
                <div className="edit-account-inputs-section">
                    <div className="edit-account-input">
                        <label htmlFor="new-email"><b>Enter new e-mail:</b></label>
                        <input id="new-email" name="newEmail" type="email" onChange={handleInput} />
                    </div>
                
                    <div className="edit-account-input">
                        <label htmlFor="confirm-email"><b>Confirm new e-mail:</b></label>
                        <input id="confirm-email" name="confirmedNewEmail" type="email" onChange={handleInput} />
                    </div>

                    <div className="edit-account-input">
                        <label htmlFor="confirm-email"><b>Enter password:</b></label>
                        <input id="enter-password" name="password" type="password" onChange={handleInput} />
                    </div>
                   
                </div>
                {errorMsg && <p className="error-msg-edit-profile">{errorMsg}</p>}
                <button type="submit" className="main-button-style button-style-purple edit-profile-button">
                    Request to change e-mail address
                </button>
            </form>
        </div>
    );
};

export default EditEmailAddress;