import "../../App.css"
import "./Profile.css"
import ProfilePage from "./profile-children/ProfilePage";
import React, { useEffect, useState, useContext } from "react";
import { getSignedInUserData } from "../../services-and-util-functions/user-services";
import { getPatternsByUser } from "../../services-and-util-functions/patterns-services";
import { SignedInUserContext } from "../../contexts/SignedInUserContext";
import { useNavigate } from "react-router-dom";
import LogOutPopUp from "./profile-children/profile-page-children/LogOutPopUp";
import DeletePatternPopUp from "./pattern-list/DeletePatternPopUp";
import DeleteProfilePopUp from "./profile-children/profile-page-children/DeleteProfilePopUp";


const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [patternList, setPatternList] = useState([]);
  const [toggleDeletePopUp, setToggleDeletePopUp] = useState(false);
  const [toggleLogOutPopUp, setToggleLogOutPopUp] = useState(false);
  const [patternToDeletePopUpData, setPatternToDeletePopUpData] = useState(null);

  const { signedInUserData, setSignedInUserData } =
    useContext(SignedInUserContext);
  
  const measurementsList = [
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
  ]
    
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUserData = async () => {
      try {
        const signedInUser = await getSignedInUserData();

        if (!signedInUser.username) {
          //TODO - add more gracious error handling
          throw Error("Problem with user data - try login-in again")
        }
        const { patterns } = await getPatternsByUser();

        setSignedInUserData(signedInUser);
        setPatternList(patterns);//check user is authenticated
        setIsLoading(false);
      } catch (error) {
        console.log(error)
        navigate("/");
      };
    };

    verifyUserData();
  }, []);


  if (isLoading) {
    return (
      <div className="pageBackground">
        <div className="pageShaper">
          <p>Loading</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pageBackground">
      <div className="pageShaper">
        <ProfilePage measurementsList={measurementsList} username={signedInUserData.username} patternList={patternList} setToggleLogOutPopUp={setToggleLogOutPopUp} setToggleDeletePopUp={setToggleDeletePopUp} setPatternToDeletePopUpData={setPatternToDeletePopUpData} />
        {toggleDeletePopUp && <DeleteProfilePopUp togglePopUp={toggleDeletePopUp} setTogglePopUp={setToggleDeletePopUp} />}
        {toggleLogOutPopUp && <LogOutPopUp togglePopUp={toggleLogOutPopUp} setTogglePopUp={setToggleLogOutPopUp} />}
        {patternToDeletePopUpData && <DeletePatternPopUp patternToDeletePopUpData={patternToDeletePopUpData} setPatternToDeletePopUpData={setPatternToDeletePopUpData} setPatternList={setPatternList} />}
      </div>
    </div>
  )
};

export default Profile;