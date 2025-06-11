import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./Sign-up";
import React, { useState } from "react";
import "../Homepage.css";
import "../../../App.css";
import yarnSvg from "../homepage_assets/ball-of-wool-svgrepo-com.svg"
import jumperSvg from "../homepage_assets/jumper-thin.svg"
import knittingSvg from "../homepage_assets/knitting.svg"
import { useNavigate } from "react-router-dom";

const PatternCreationMadeEasy = () => {
  const [userHasAccount, setUserHasAccount] = useState(true);
  const navigate = useNavigate();

  return (
    <div id="pattern-creation-container">
      <div id="pattern-creation">
        <h2>Pattern creation made easy</h2>
        <div id="columns-text">
          <div className="pattern-creation-card">
            <img className="svgImg" src={jumperSvg}></img>
            <h3>
              Generate{" "}
              <span style={{ color: "rgb(126, 70, 136)" }}>bespoke</span> jumper
              patterns.
            </h3>
            <p>
              Enter your measurements and generate{" "}
              <b>free jumper patterns fitted especially for you.</b>
            </p>
          </div>

          <div className="pattern-creation-card">
            <img className="svgImg" src={knittingSvg}></img>
            <h3>
              Kick-start your{" "}
              <span style={{ color: "rgb(126, 70, 136)" }}>design process</span>!
            </h3>
            <p>
              Pick between different <b>jumper shapes</b>, <b>levels of ease</b>{" "}
              and <b>neckline options</b>.
            </p>
          </div>

          <div className="pattern-creation-card">
            <img className="svgImg" src={yarnSvg}></img>
            <h3>
              Start{" "}
              <span style={{ color: "rgb(126, 70, 136)" }}>
                saving your patterns
              </span>{" "}
              today.
            </h3>
            <p>
              Create an account, it’s easy, and you only need a <b>username</b>{" "}
              to do so!
            </p>
          </div>
        </div>

        <Link
          className="main-button-style"
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