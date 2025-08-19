import "../../../App.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext"
import { getSignedInUserData } from "../../../services-and-util-functions/user-services";
import { getPatternById } from "../../../services-and-util-functions/patterns-services";
import { getPatternDataFromSessionStorage } from "../../../services-and-util-functions/utils";
import TopDownRaglanPattern from "./TopDownRaglanPattern"
import DropShoulderSeamedPattern from "./DropShoulderSeamedPattern";
import BottomUpRaglanPattern from "./BottomUpRaglanPattern";
//This component will query data and pass it down to the different potential pattern shapes, which will each be a different component. 

//Logged-in user -> Pattern from server based on url params
//Not logged in -> check session data
//Or should I only fetch the user data if there is deffo nothing in storage?

const KnittingPattern = () => {
    const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);
    const [patternData, setPatternData] = useState(getPatternDataFromSessionStorage);

    const { patternId } = useParams();

    useEffect(() => {
        if (patternData) {
            return;
        }

        const fetchData = async () => {
            try {
                const userData = await getSignedInUserData();

                if (!userData) {
                    //TODO: user not signed-in but on saved pattern page -> decide what to do. 
                }
            
                const { pattern } = await getPatternById(patternId);
                console.log(pattern);

                if (!pattern) {
                    //TODO: can't get pattern data
                }
                setPatternData({ ...pattern });
            } catch (error) {
                //TODO - decide what to do if there is an error with the above. 
            }
        };
        fetchData();
    }, []);

    if (!patternData) {
        //TODO - error handling here
    }

    switch (patternData.jumperShape) {
    case "top-down-raglan":
            return <TopDownRaglanPattern patternData={patternData} />;
    case "drop-shoulder":
      return <DropShoulderSeamedPattern patternData={patternData} />;
    case "bottom-up":
      return <BottomUpRaglanPattern patternData={patternData} />;
    default:
      return (
        <div className="pageBackground">
          <div className="pageShaper">
            <p>Unknown pattern type: {patternData.jumperShape}</p>
          </div>
        </div>
      );
  }
};

export default KnittingPattern;