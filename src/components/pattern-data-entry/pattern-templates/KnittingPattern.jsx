import "../../../App.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext"
import { getSignedInUserData } from "../../../services-and-util-functions/user-services";
import { getPatternById } from "../../../services-and-util-functions/patterns-services";
//This component will query data and pass it down to the different potential pattern shapes, which will each be a different component. 

//Logged-in user -> Pattern from server based on url params
//Not logged in -> check session data
//Or should I only fetch the user data if there is deffo nothing in storage?
const finalJumperFields = {
  "top-down-raglan": [
    "knittingGauge",
    "chestCircumference",
    "armLength",
    "bodyLength",
    "selectedUnit",
    "easeAmount",
    "jumperShape",
    "necklineShape",
  ],
  "drop-shoulder": [
    "knittingGauge",
    "chestCircumference",
    "bodyLength",
    "necklineToChest",
    "shoulderWidth",
    "armLength",
    "selectedUnit",
    "easeAmount",
    "jumperShape",
    "necklineShape",
  ],
  "bottom-up": [
    "knittingGauge",
    "chestCircumference",
    "bodyLength",
    "necklineToChest",
    "shoulderWidth",
    "armLength",
    "selectedUnit",
    "easeAmount",
    "jumperShape",
    "necklineShape",
  ],
};

const KnittingPattern = () => {
    const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);
    const [patternData, setPatternData] = useState(() => {
        const pattern = {};
        const jumperShape = sessionStorage.getItem("jumperShape");
        
        if (!jumperShape) { 
            return null;
        }

        pattern.jumperShape = jumperShape;

        finalJumperFields[jumperShape].map((field) => {
            pattern[field] = sessionStorage.getItem(field)
        });
        console.log(pattern);
        return pattern;
    });

    const { patternId } = useParams();

    console.log(patternId);
    console.log(patternData)

    useEffect(() => {
        if (patternData) {
            return null;
        }
        
    }, []);


  return (
    <div className="pageBackground">
      <div className="pageShaper">
      </div>
    </div>
  );
};

export default KnittingPattern;