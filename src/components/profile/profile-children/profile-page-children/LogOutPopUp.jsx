import LogOutSvgIcon from "../../profile-assets/sign-out-svgrepo-com.svg?react";
import { signOutUser } from "../../../../services-and-util-functions/auth-services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useInView from "../../../../custom-hooks/useInView";

const LogOutPopUp = ({togglePopUp, setTogglePopUp}) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [LogOutPopUpRef, isVisible] = useInView();
    const navigate = useNavigate();

    const handleClickCancel = () => {
        setTogglePopUp(false);
    }

    const handleClickLogOut = async () => {
        try {
            await signOutUser();
            setSuccessMsg("Successfully logged-out!")
        } catch (error) {
            setErrorMsg("Log-out failed, try again later!");
        }
    }

    const handleClickBackHomepage = () => {
        navigate("/")
    }

    if (!togglePopUp) return null;

    if (errorMsg) {
        return (
            <div className="pop-up-overlay">
                <div ref={LogOutPopUpRef} className={`pop-up ${isVisible ? "visible": "" }`} >
                    <LogOutSvgIcon className="pop-up-icon button-style-purple" />
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
                <div ref={LogOutPopUpRef} className={`pop-up ${isVisible ? "visible": "" }`}>
                    <LogOutSvgIcon className="pop-up-icon button-style-purple" />
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
            <div ref={LogOutPopUpRef} className={`pop-up ${isVisible ? "visible": "" }`}>
                <LogOutSvgIcon className="pop-up-icon button-style-purple" />
                <h3>Are you sure you want to log-out?</h3>
                <div>
                    <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickCancel} >No, cancel</button>
                    <button className="main-button-style button-style-purple" onClick={handleClickLogOut}>Yes, log-out</button>
                </div>
            </div>
        </div>
    );
}

export default LogOutPopUp;