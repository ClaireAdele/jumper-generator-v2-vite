import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./Sign-up";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Homepage.css";
import "../../../App.css";

import useInView from "../../../custom-hooks/useInView";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import { getSignedInUserData } from "../../../services-and-util-functions/user-services";

import { patternCreationMadeEasyCardData } from "../homepage-data/homepage-data-library";
import PatternCreationCard from "./PatternCreationCard";
import AccessProfileTile from "./AccessProfileTile";

const PatternCreationMadeEasy = () => {
  const [userHasAccount, setUserHasAccount] = useState(true);
  const [patternCreationRef, isVisible] = useInView({ threshold: 0.2 });
  const { signedInUserData, setSignedInUserData } = useContext(SignedInUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const signedInUser = await getSignedInUserData();

        if (!signedInUser.username) {
          throw Error("Problem with user data - try login-in again")
        }

        setSignedInUserData(signedInUser);
      } catch {
        setSignedInUserData({});
      }
    }

    verifyUser();
  }, []);
  
  return (
    <div id="pattern-creation-container">
      <div ref={patternCreationRef} className={`pattern-creation ${isVisible ? "visible" : ""}`}>
        <h2>Pattern creation made easy</h2>
        <div className="columns-text">
          {patternCreationMadeEasyCardData.map((card) => {
            return <PatternCreationCard svgIcon={card.svgIcon} title={card.title} text={card.text} />
          })}
        </div>

        <Link
          className="main-button-style button-style-purple stagger-item try-gen-with-no-account"
         
          to="/data-entry"
        >
          {signedInUserData.username ? "Create a new pattern!" : "Try the generator without an account"}
        </Link>
      </div>
      {signedInUserData.username ? 
        <AccessProfileTile username={signedInUserData.username} />
        :
        userHasAccount ? (
        <SignIn navigate={navigate} setUserHasAccount={setUserHasAccount} />
      ) : (
        <SignUp navigate={navigate} setUserHasAccount={setUserHasAccount} />
      )}
    </div>
  );
}

export default PatternCreationMadeEasy;