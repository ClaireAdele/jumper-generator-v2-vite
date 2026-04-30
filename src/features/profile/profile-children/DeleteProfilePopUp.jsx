import { deleteUserData } from "./../../../services-and-util-functions/user-services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BinSvgIcon from "./../profile-assets/trash-svgrepo-com.svg?react";
import useInView from "./../../../custom-hooks/useInView";

const DeleteProfilePopUp = ({ togglePopUp, setTogglePopUp }) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [deleteProfilePopUpRef, isVisible] = useInView();
    const navigate = useNavigate();

    console.log(isVisible)

    const handleClickCancel = () => {
        setTogglePopUp(false);
    }

    const handleClickDelete = async () => {
        try {
            await deleteUserData();
            setSuccessMsg("User successfully deleted!")
        } catch (error) {
            setErrorMsg("Account deletion failed, try again later");
        }
    }

    const handleClickBackHomepage = () => {
        navigate("/")
    }

    if (!togglePopUp) return null;

    if (errorMsg) {
        return (
            <div className="pop-up-overlay">
                <div ref={deleteProfilePopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`} >
                    <div className="pop-up-icon button-style-red">
                        <BinSvgIcon className="pop-up-icon-inner" />
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
                <div ref={deleteProfilePopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                    <div className="pop-up-icon button-style-red">
                        <BinSvgIcon className="pop-up-icon-inner" />
                    </div>
                    <h3>{successMsg}</h3>
                    <div>
                        <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickBackHomepage}>Go back to homepage</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="pop-up-overlay">
            <div ref={deleteProfilePopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                <div className="pop-up-icon button-style-red">
                    <BinSvgIcon className="pop-up-icon-inner"  />
                </div>
                <h3>Are you sure you want to delete your account?</h3>
                <div>
                    <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickCancel} >No, cancel</button>
                    <button className="main-button-style button-style-red" onClick={handleClickDelete}>Yes, delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteProfilePopUp;