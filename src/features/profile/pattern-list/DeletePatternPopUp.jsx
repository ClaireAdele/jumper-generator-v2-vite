import { useState } from "react";
import BinSvgIcon from "../../profile/profile-assets/trash-svgrepo-com.svg?react";
import useInView from "../../../custom-hooks/useInView";
import { deletePatternById } from "../../../services-and-util-functions/patterns-services";
import { useNavigate } from "react-router-dom";

const DeletePatternPopUp = ({ patternToDeletePopUpData, setPatternToDeletePopUpData, setPatternList }) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [deletePatternPopUpRef, isVisible] = useInView();
    const navigate = useNavigate();

    const handleClickCancel = () => {
        setPatternToDeletePopUpData(null);
    }

    const handleClickDelete = async () => {
        try {
            await deletePatternById(patternToDeletePopUpData);

            if (setPatternList) {
                setPatternList(prev => prev.filter(p => p._id !== patternToDeletePopUpData));
            }
            
            setSuccessMsg("Pattern successfully deleted!")
        } catch {
            setErrorMsg("Pattern deletion failed, try again later");
        }
    }

    const handleClickBackProfile = () => {
        setPatternToDeletePopUpData(null);

        if (!setPatternList) {
            navigate("/profile");
        }
    }

    console.log(patternToDeletePopUpData);

    if (!patternToDeletePopUpData) return null;

    if (errorMsg) {
        return (
            <div className="pop-up-overlay">
                <div ref={deletePatternPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`} >
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
                <div ref={deletePatternPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                    <div className="pop-up-icon button-style-red">
                        <BinSvgIcon className="pop-up-icon-inner" />
                    </div>
                    <h3>{successMsg}</h3>
                    <div>
                        <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickBackProfile}>Go back to profile</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="pop-up-overlay">
            <div ref={deletePatternPopUpRef} className={`pop-up ${isVisible ? "visible" : ""}`}>
                <div className="pop-up-icon button-style-red">
                    <BinSvgIcon className="pop-up-icon-inner" />
                </div>
                <h3>Are you sure you want to delete this pattern?</h3>
                <div>
                    <button className="main-button-style" style={{ marginRight: "1em" }} onClick={handleClickCancel} >No, cancel</button>
                    <button className="main-button-style button-style-red" onClick={handleClickDelete}>Yes, delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeletePatternPopUp;