import rightArrow from "../../data-entry-assets/right-arrow.svg";
import leftArrow from "../../data-entry-assets/left-arrow.svg";

const NavigationArrows = ({ handleClickLeftArrow, handleClickRightArrow }) => {
    if (!handleClickLeftArrow) {
        return (
            <div className="navigation-arrows-jumper-selection-form">
                <img className="arrow-imgs" src={rightArrow} onClick={handleClickRightArrow}></img>
            </div>
        )
    } else if (!handleClickRightArrow) {
        return (
            <div className="navigation-arrows-jumper-selection-form">
                <img className="arrow-imgs" src={leftArrow} onClick={handleClickLeftArrow}></img>
            </div>
        )
    } else {
        return (
            <div className="navigation-arrows-jumper-selection-form">
                <img className="arrow-imgs" src={leftArrow} onClick={handleClickLeftArrow}></img>
                <img className="arrow-imgs" src={rightArrow} onClick={handleClickRightArrow}></img>
            </div>
        )
    }
}

export default NavigationArrows;