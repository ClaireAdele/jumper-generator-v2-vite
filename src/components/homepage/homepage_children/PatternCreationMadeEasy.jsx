import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./Sign-up";
import React, { useState } from "react";
import "../Homepage.css";
import "../../../App.css";

import { patternCreationMadeEasyCardData } from "../homepage-data/homepage-data-library";

import { useNavigate } from "react-router-dom";
import PatternCreationCard from "./PatternCreationCard";

const PatternCreationMadeEasy = () => {
  const [userHasAccount, setUserHasAccount] = useState(true);
  const navigate = useNavigate();

  return (
    <div id="pattern-creation-container">
      <div className="pattern-creation">
        <h2>Pattern creation made easy</h2>
        <div className="columns-text">
          {patternCreationMadeEasyCardData.map((card) => {
            return <PatternCreationCard svgIcon={card.svgIcon} title={card.title} text={card.text} />
          })}
        </div>

        <Link
          className="main-button-style button-style-green"
          id="no-account-access-button"
          to="/data-entry"
        >
          Try the generator without an account
        </Link>
      </div>
      {userHasAccount ? (
        <SignIn navigate={navigate} setUserHasAccount={setUserHasAccount} />
      ) : (
        <SignUp navigate={navigate} setUserHasAccount={setUserHasAccount} />
      )}
    </div>
  );
}

export default PatternCreationMadeEasy;