import "../../App.css"
import "./Profile.css"

import { useEffect, useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { getSignedInUserData } from "../../services-and-util-functions/user-services";
import { getPatternsByUser } from "../../services-and-util-functions/patterns-services";
import { SignedInUserContext } from "../../contexts/SignedInUserContext";
import { PopUpContext } from "../../contexts/PopUpsContext";
import { popUpList } from "../../services-and-util-functions/utils";

import LogOutPopUp from "./profile-children/LogOutPopUp";
import DeletePatternPopUp from "./pattern-list/DeletePatternPopUp";
import DeleteProfilePopUp from "./profile-children/DeleteProfilePopUp";
import ProfilePage from "./profile-children/ProfilePage";
import Loader from "../../components/Loader";
import ValidateNewMeasurementsPopUp from "./profile-children/ValidateNewMeasurementsPopUp";


const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [patternList, setPatternList] = useState([]);
  const [isUserEditingMeasurements, setisUserEditingMeasurements] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [patternToDeletePopUpData, setPatternToDeletePopUpData] = useState(null);
  
  const navigate = useNavigate();

  const { signedInUserData, setSignedInUserData } =
    useContext(SignedInUserContext);
  
  const { currentPopUp } =
    useContext(PopUpContext);
  
  const measurementsList = useMemo(() => [
    {
      label: "Chest Circumference",
      name: "chestCircumference",
      value: signedInUserData?.chestCircumference || 0,
    },
    {
      label: "Body Length",
      name: "bodyLength",
      value: signedInUserData?.bodyLength || 0,
    },
    {
      label: "Shoulder Width",
      name: "shoulderWidth",
      value: signedInUserData?.shoulderWidth || 0,
    },
    {
      label: "Arm Length",
      name: "armLength",
      value: signedInUserData?.armLength || 0,
    },
  ], [signedInUserData]);

  useEffect(() => {
    const verifyUserData = async () => {
      try {
        const signedInUser = await getSignedInUserData();

        if (!signedInUser.username) {
          throw Error("Problem with user data - try login-in again")
        }

        const { patterns } = await getPatternsByUser();

        setSignedInUserData(signedInUser);
        
        /*Session storage is used to store data from patterns generated without an account.
        It needs clearing here as when loading a pattern I use it as a first port of call 
        to check if we are in an unsaved pattern scenario or in the other case.*/
        sessionStorage.clear();
        setPatternList(patterns);
        setIsLoading(false);
      } catch (error) {
        navigate("/");
      };
    };

    verifyUserData();
  }, []);


  if (isLoading) {
    return (
      <div className="pageBackground">
        <div className="pageShaper">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
        <ProfilePage measurementsList={measurementsList}
          username={signedInUserData.username}
          patternList={patternList}
          setPatternToDeletePopUpData={setPatternToDeletePopUpData}
          isUserEditingMeasurements={isUserEditingMeasurements}
          setisUserEditingMeasurements={setisUserEditingMeasurements}
          updatedUserData={updatedUserData}
          setUpdatedUserData={setUpdatedUserData}
        />
        {currentPopUp == popUpList.deleteProfilePopup && <DeleteProfilePopUp />}
        {currentPopUp == popUpList.logoutPopup && <LogOutPopUp />}
        {currentPopUp == popUpList.validateMeasurementsPopup && <ValidateNewMeasurementsPopUp
          setisUserEditingMeasurements={setisUserEditingMeasurements}
          updatedUserData={updatedUserData}
        />}
        {patternToDeletePopUpData && <DeletePatternPopUp patternToDeletePopUpData={patternToDeletePopUpData} setPatternToDeletePopUpData={setPatternToDeletePopUpData} setPatternList={setPatternList} />}
    </div>
  )
};

export default Profile;