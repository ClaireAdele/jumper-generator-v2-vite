import { useState } from "react";

const EditEmailAddress = () => {
    const [formData, setFormData] = useState({});

    const handleSubmitEmailChangeRequest = (event) => {
        event.preventDefault();
        //open a fucking pop-up 
    };

    const handleInput = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    } 

    return (
        <div className="edit-account-tile standard-box-styling">
            <h3>Edit your e-mail address:</h3>
            <p>We will send a confirmation e-mail to your new address. Your current address will not be updated until you click on the confirmation link attached to the e-mail.</p>
            <form className="edit-account-form-section" onSubmit={handleSubmitEmailChangeRequest}>
                <div className="edit-account-inputs-section">
                    <div className="edit-account-input">
                        <label htmlFor="new-email"><b>Enter new e-mail:</b></label>
                        <input id="new-email" name="newEmail" type="email" onChange={handleInput} />
                    </div>
                
                    <div className="edit-account-input">
                        <label htmlFor="confirm-email"><b>Confirm new e-mail:</b></label>
                        <input id="confirm-email" name="confirmedNewEmail" type="email" onChange={handleInput}/>
                    </div>

                    <div className="edit-account-input">
                        <label htmlFor="confirm-email"><b>Enter password:</b></label>
                        <input id="enter-password" name="password" type="password" onChange={handleInput}/>
                    </div>
                </div>

                <button type="submit" className="main-button-style button-style-purple edit-profile-button">
                    Send confirmation e-mail to new address
                </button>
            </form>
        </div>
    );
};

export default EditEmailAddress;