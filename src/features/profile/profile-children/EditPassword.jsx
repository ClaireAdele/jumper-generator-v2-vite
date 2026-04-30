const EditPassword = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call here
    };

    return (
        <div className="edit-account-tile standard-box-styling">
            <h3>Edit your password:</h3>
            <form className="edit-account-form-section" onSubmit={handleSubmit}>
                <div className="edit-account-inputs-section">
                    <div className="edit-account-input">
                        <label htmlFor="current-password"><b>Current password:</b></label>
                        <input id="current-password" type="password" />
                    </div>
                    <div className="edit-account-input">
                        <label htmlFor="new-password"><b>New password:</b></label>
                        <input id="new-password" type="password" />
                    </div>
                    <div className="edit-account-input">
                        <label htmlFor="confirm-password"><b>Confirm new password:</b></label>
                        <input id="confirm-password" type="password" />
                    </div>
                </div>
                <button type="submit" className="main-button-style button-style-purple edit-profile-button">
                    Submit password change request
                </button>
            </form>
        </div>
    );
};

export default EditPassword;