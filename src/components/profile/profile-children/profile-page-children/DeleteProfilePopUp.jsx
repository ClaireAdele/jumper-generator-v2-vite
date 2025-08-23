import BinSvgIcon from "../../profile-assets/trash-svgrepo-com.svg?react";

const DeleteProfilePopUp = ({ togglePopUp, setTogglePopUp }) => {
    const handleClickCancel = () => {
        setTogglePopUp(false);
    }

    const handleClickDelete = () => {
        //TODO: write the functionality
    }

    if (!togglePopUp) return null; 

    return (
        <div className="pop-up-overlay">
             <div className="pop-up">
            <BinSvgIcon id="delete-profile-pop-up-icon" />
            <h3>Are you sure you want to delete your account?</h3>
            <div>
                <button className="main-button-style" style={{marginRight: "1em" }} onClick={handleClickCancel} >No, cancel</button>
                <button className="main-button-style button-style-red" onClick={handleClickDelete}>Yes, delete</button>
            </div>
        </div>
        </div>  
    )
}

export default DeleteProfilePopUp;