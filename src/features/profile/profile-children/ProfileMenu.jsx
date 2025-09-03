import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import { useContext } from "react";

const ProfileMenu = () => {
    const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);

    return (
        <div className="profile-menu">
            <h2>{signedInUserData.username}</h2>
            <div className="profile-menu-button-list">
                <button className="main-button-style profile-menu-button">My measurements</button>
                <button className="main-button-style profile-menu-button">My patterns</button>
                <button className="main-button-style profile-menu-button">Edit account settings</button>
            </div>
        </div>
    );
};

export default ProfileMenu;