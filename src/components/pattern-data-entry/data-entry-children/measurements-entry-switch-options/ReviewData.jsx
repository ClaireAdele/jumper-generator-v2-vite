import { useContext } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";

const ReviewData = ({ setToggleComponent }) => {
     const { finalJumperData } = useContext(
       FinalJumperDataContext
     );
    
    
    const handleClickAmendMeasurements = (event) => {
        event.preventDefault();

        setToggleComponent("measurements-entry");
    };
    
    return (<div className="jumper-selection-form-section">
        <button onClick={handleClickAmendMeasurements}>Amend measurements</button>
    </div>);
};

export default ReviewData;
