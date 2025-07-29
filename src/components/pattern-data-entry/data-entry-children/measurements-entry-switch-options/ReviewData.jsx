import { useContext, useEffect } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import NavigationArrows from "./NavigationArrows";
import { jumperShapes, easeAmountOptions, necklineShapes } from "../utils/data_to_text_objects";
import { selectLabel } from "../../../../services-and-util-functions/utils";

const ReviewData = ({ setToggleComponent }) => {
     const { finalJumperData } = useContext(
       FinalJumperDataContext
     );
    
    const handleClickAmendMeasurements = (event) => {
        event.preventDefault();

        setToggleComponent("measurements-entry");
    };

    const selectedJumperShape = selectLabel(jumperShapes, "jumperShape", finalJumperData);
    const selectedNecklineShape = selectLabel(necklineShapes, "necklineShape", finalJumperData);
    const selectedEaseAmount = selectLabel(easeAmountOptions, "easeAmount", finalJumperData);
    const unit = finalJumperData.selectedUnit;

    
    return (<div className="jumper-selection-form-section">
        <div id="review-choices-section">
            <div className="review-row">
                <p><strong>Jumper shape</strong></p>
                <p>{selectedJumperShape}</p>
            </div>

            <div className="review-row">
                <p><strong>Neckline</strong></p>
                <p>{selectedNecklineShape}</p>
            </div>

            <div className="review-row">
                <p><strong>Fit</strong></p>
                <p>{selectedEaseAmount}</p>
            </div>

            <div className="review-row">
                <p><strong>Pattern unit</strong></p>
                <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </div>
        
        <button className="main-button-style" id="generate-pattern-button">Generate pattern</button>
        </div>
        <NavigationArrows handleClickLeftArrow={handleClickAmendMeasurements}/>
    </div>);
};

export default ReviewData;
