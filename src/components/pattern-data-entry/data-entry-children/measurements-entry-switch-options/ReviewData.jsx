import { useContext } from "react";
import { FinalJumperDataContext } from "../../../../contexts/FinalJumperDataContext";

const ReviewData = ({ setToggleComponent }) => {
     const { finalJumperData } = useContext(
       FinalJumperDataContext
     );
    
    console.log(finalJumperData)
    
    const handleClickAmendMeasurements = (event) => {
        event.preventDefault();

        setToggleComponent("measurements-entry");
    };
    
    return (<div>
        <h3>Review Selection</h3>
        <button onClick={handleClickAmendMeasurements}>Amend measurements</button>
    </div>);
};

export default ReviewData;
