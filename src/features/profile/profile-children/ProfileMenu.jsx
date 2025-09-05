import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { signOutUser } from "../../../services-and-util-functions/auth-services";

import MyMeasurements from "../profile-assets/list-ul-alt-svgrepo-com.svg?react";
import MyPatterns from "../profile-assets/jumper-bold.svg?react";
import EditProfile from "../profile-assets/pen-square-svgrepo-com.svg?react";
import BinSvgIcon from "./../profile-assets/trash-svgrepo-com.svg?react";
import HomeIcon from "./../profile-assets/home-svgrepo-com.svg?react";
import LogOutSvgIcon from "./../profile-assets/sign-out-svgrepo-com.svg?react";

const ProfileMenu = ({ setToggleDisplay, toggleDisplay, setToggleDeletePopUp, setToggleLogOutPopUp  }) => {
    const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);
    const navigate = useNavigate();

    const handleClick = (event) => {
        const toggleString = event.target.value;

        setToggleDisplay(toggleString);
    };

    const handleClickLogOut = () => {
        setToggleLogOutPopUp(true);
    };

    const handleClickHomePage = () => {
        navigate("/");
    }

    return (
        <div className="profile-menu">
            <div className="profile-menu-top-buttons-section">
                <button
                    onClick={handleClickHomePage}
                    className="main-button-style edit-profile-button"
                    style={{ backgroundColor: "transparent" }}>
                    <HomeIcon className="edit-icon" />
                    <span className="edit-label">Go back to Homepage</span>
                </button>
                <button
                    onClick={handleClickLogOut}
                    className="main-button-style edit-profile-button"
                    style={{ backgroundColor: "transparent" }}>
                    <LogOutSvgIcon className="edit-icon" />
                    <span className="edit-label">Log-out</span>
                </button>
            </div>
            <div className="profile-menu-content">
                <h2>{signedInUserData.username}</h2>
                <div className="profile-menu-button-list">
                    <div className={`profile-menu-row ${toggleDisplay === "user-measurements" ? "clicked" : ""}`}>
                        <MyMeasurements className="profile-menu-row-icon" />
                        <button className="main-button-style profile-menu-button" value="user-measurements" onClick={handleClick}>My measurements</button>
                    </div>
                    <div className={`profile-menu-row ${toggleDisplay === "pattern-list" ? "clicked" : ""}`}>
                        <MyPatterns className="profile-menu-row-icon" />
                        <button className="main-button-style profile-menu-button" value="pattern-list" onClick={handleClick}>My patterns</button>
                    </div>
                    <div className={`profile-menu-row ${toggleDisplay === "edit-account-settings" ? "clicked" : ""}`}>
                        <EditProfile className="profile-menu-row-icon" />
                        <button className="main-button-style profile-menu-button" value="edit-account-settings" onClick={handleClick}>Edit account settings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;


/*
                    <button
                        onClick={handleClickDeleteProfile}
                        className="main-button-style edit-profile-button button-style-red"
                    >
                        <BinSvgIcon className="edit-icon" />
                        <span className="edit-label">Delete Account</span>
                    </button>
*/

    // const handleClickDeleteProfile = async () => {
    //     setToggleDeletePopUp(true);
    // };
