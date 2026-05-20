import EditEmailAddress from "./EditEmailAddress";
import EditPassword from "./EditPassword";

import { PopUpContext } from "../../../contexts/PopUpsContext";
import useInView from "../../../custom-hooks/useInView";
import { useContext } from "react";

import { popUpList } from "../../../services-and-util-functions/utils";

const EditAccountSettings = ({editEmailAddressForm, setEditEmailAddressForm, editPasswordForm, setEditPasswordForm}) => {
    const [editAccountSettingsRef, isVisible] = useInView();
    const { setCurrentPopUp } = useContext(PopUpContext);
 
    const handleClickDeleteProfile = () => {
        setCurrentPopUp(popUpList.deleteProfilePopup);
    }
  
    return (
        <div ref={editAccountSettingsRef} className={`edit-account-settings ${isVisible ? "visible" : ""}`}>
            <EditEmailAddress
                setEditEmailAddressForm={setEditEmailAddressForm}
                editEmailAddressForm={editEmailAddressForm}
            />
            <EditPassword
                editPasswordForm={editPasswordForm}
                setEditPasswordForm={setEditPasswordForm}
            />
            <div className="edit-account-tile standard-box-styling">
                <h3>Delete your account:</h3>
                <p>This will permanently delete your account and all saved patterns. This cannot be undone.</p>
                <button onClick={handleClickDeleteProfile} className="main-button-style button-style-red edit-profile-button">Delete account</button>
            </div>
        </div>
    )
};

export default EditAccountSettings;