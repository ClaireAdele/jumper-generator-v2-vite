import EditEmailAddress from "./EditEmailAddress";
import EditPassword from "./EditPassword";
import useInView from "../../../custom-hooks/useInView";

const EditAccountSettings = ({editEmailAddressForm, setEditEmailAddressForm}) => {
    const [editAccountSettingsRef, isVisible] = useInView();
  
    return (
        <div ref={editAccountSettingsRef} className={`edit-account-settings ${isVisible ? "visible" : ""}`}>
            <EditEmailAddress
                setEditEmailAddressForm={setEditEmailAddressForm}
                editEmailAddressForm={editEmailAddressForm}
            />
            <EditPassword />
            <div className="edit-account-tile standard-box-styling">
                <h3>Delete your account:</h3>
                <p>This will permanently delete your account and all saved patterns. This cannot be undone.</p>
                <button className="main-button-style button-style-red edit-profile-button">Delete account</button>
            </div>
        </div>
    )
};

export default EditAccountSettings;