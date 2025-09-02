import "../../App.css";
import "./patternTemplates.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { SignedInUserContext } from "../../contexts/SignedInUserContext"
import { getSignedInUserData } from "../../services-and-util-functions/user-services";
import { getPatternById } from "../../services-and-util-functions/patterns-services";
import { getPatternDataFromSessionStorage } from "../../services-and-util-functions/utils";
import patterSectionsLibrary from "./pattern-sections-data/pattern-sections-library";
import BinSvgIcon from "../profile/profile-assets/trash-svgrepo-com.svg?react";

import PatternTemplate from "./PatternTemplate";
import DeletePatternPopUp from "../profile/pattern-list/DeletePatternPopUp";
import Loader from "../../components/Loader";

/*This component handles a few different scenarios: 
    1) The user is not logged in and is generating a pattern that will not be saved on the back-end:
        - The data will be pulled from the session storage. 
        - This is the first check I perform, as if the user is not logged in, no need to 
        attempt sending requests to the back-end. 

    2) The user is logged in, and this is a pattern that's being pulled from their saved patterns: 
        - The data will be queried from the back-end. 
    
    3) There is some kind of bug, and the user is neither logged in, nor has successfully generated 
    a patter: 
        - Show some error messages -> TODO: polish the presentation of the error scenarios.
*/
const KnittingPattern = () => {
    const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);
    const [patternData, setPatternData] = useState(getPatternDataFromSessionStorage);
    const [patternSections, setPatternSections] = useState([]);
    const [toggleDeletePatternPopUp, setToggleDeletePatternPopUp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { patternId } = useParams();

    const handleClickDeletePattern = () => {
        setToggleDeletePatternPopUp(!toggleDeletePatternPopUp);
    }

    useEffect(() => {
        if (patternData) {
            setIsLoading(false);
            setPatternSections(patterSectionsLibrary[patternData.jumperShape]);
            return;
        }

        const fetchData = async () => {
            try {
                const userData = await getSignedInUserData();

                if (!userData && patternId != "unsaved-pattern") {
                    //TODO: if the user is not logged in anymore and we're trying to view one of their pattern, 
                    // tell them to go back to log-in or give them the option to log-in here. 
                }
            
                const { pattern } = await getPatternById(patternId);

                if (!pattern) {
                    //TODO: can't get pattern data
                }
                setPatternData({ ...pattern });
                setPatternSections(patterSectionsLibrary[pattern.jumperShape]);
                setIsLoading(false);
            } catch (error) {
                setPatternData(null);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (<div className="pageBackground">
            <div className="pageShaper">
                <Loader />
            </div>
        </div>)
    }

    if (!patternData) {
        return (
            <div className="pageBackground">
                <div className="pageShaper">
                    <p>Could not fetch pattern data - try again later</p>
                </div>
            </div>
        )
    }
     
    return (
        <div className="pageBackground">
            <div className="pageShaper">
                {
                    patternId != "unsaved-pattern" && <div className="edit-profile-button-section">
                <button
                    onClick={handleClickDeletePattern}
                    className="main-button-style edit-profile-button button-style-red"
                >
                    
                    <BinSvgIcon className="edit-icon" />
                    <span className="edit-label">Delete Pattern</span>

                    </button>
                </div>
                }
                <PatternTemplate patternData={patternData} id={patternData.jumperShape} patternSections={patternSections} />
                {toggleDeletePatternPopUp && <DeletePatternPopUp patternToDeletePopUpData={patternId} setPatternToDeletePopUpData={setToggleDeletePatternPopUp} />}
            </div>
        </div>
    );
};

export default KnittingPattern;