import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";
import { SignedInUserContext } from "../../../../contexts/SignedInUserContext";
import NavigationArrows from "./NavigationArrows";
import { jumperShapes, easeAmountOptions, necklineShapes } from "../utils/data_to_text_objects";
import { selectLabel, writeToSessionData } from "../../../../services-and-util-functions/utils";
import { postPattern } from "../../../../services-and-util-functions/patterns-services";

const ReviewData = ({ setToggleComponent }) => {
    const { finalJumperData, setFinalJumperData } = useContext(
        FinalJumperDataContext
    );

    const { signedInUserData } = useContext(SignedInUserContext);
    
    const navigate = useNavigate();
    
    const handleClickAmendMeasurements = (event) => {
        event.preventDefault();

        setToggleComponent("measurements-entry");
    };

     const handleEnterPatternName = (event) => {
         event.preventDefault();
         //TODO: add validation for the pattername here

         const patternName = event.target.value;
        setFinalJumperData((prevData) => ({ ...prevData, patternName }));
     };

    const handleGeneratePattern = async (event) => {
        if (signedInUserData.username) {
            //If the user is logged in, save the pattern in the database and navigate to the pattern visualisation page 
            //That page will get the pattern from the database based on its id
            try {
                //By that point, the data has been validated throughout the form and should be correct.
                const generatedPattern = await postPattern(finalJumperData);
                navigate(`/yoke-pattern/${generatedPattern.pattern._id}`);
            } catch (error) {
                //TODO - decide what to do if something goes wrong
                console.log(error);
            }
            
        } else {
            //If the user is not logged in, navigate to the pattern page with the "unsaved-pattern" param.
            //We save the data collected via the finalJumperContext in the session storage to avoid data loss if the user resfreshes the page
            writeToSessionData(finalJumperData);
            navigate("/yoke-pattern/unsaved-pattern");
        }
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
            
            { signedInUserData.username &&
                <div className="review-row">
                <p><strong>Pattern name</strong></p>
                <input onChange={handleEnterPatternName}></input>
                </div>
            }
        
            <button className="main-button-style" id="generate-pattern-button" onClick={handleGeneratePattern}>Generate pattern</button>
        </div>
        <NavigationArrows handleClickLeftArrow={handleClickAmendMeasurements}/>
    </div>);
};

export default ReviewData;
