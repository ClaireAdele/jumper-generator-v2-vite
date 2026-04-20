const EditAccountSettings = () => {
    //Delete the account altogether
    //Change e-mail
    //Change password
    return (
        <div className="edit-account-settings">
            <div className="edit-account-change-email-address standard-box-styling">
                <h3>Edit your e-mail address:</h3>
                <p>We will send a confirmation e-mail to your new address.</p>
                <p>Your current address will not be updated until you click on the confirmation link attached to the e-mail.</p>
                <input></input>
                <button>Send confirmation e-mail to new address</button>
            </div>
            <div className="edit-account-change-password standard-box-styling">
                <h3>Edit your password:</h3>
                <p>Enter your current password:</p>
                <input></input>
                <p>New password:</p>
                <input></input>
                <p>Confirm new password:</p>
                <input></input>
            </div>
            <div className="edit-account-delete-account standard-box-styling">
                <h3>Delete your account:</h3>
                <p>This will permanently delete your account and all saved patterns. This cannot be undone.</p>
                <button>Delete account</button>
            </div>
        </div>
    )
}

export default EditAccountSettings;