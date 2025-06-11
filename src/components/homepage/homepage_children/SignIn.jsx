import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { signInUser } from "../../../services-and-util-functions/auth-services";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import { useNavigate } from "react-router-dom";
import "../Homepage.css";

const SignIn = ({ setUserHasAccount }) => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  const { signedInUserData, setSignedInUserData } = useContext(
      SignedInUserContext
  );

  const handleClick = async () => {
    if (!email || !password) {
      setAuthError(
        "Please make sure your e-mail and passwords are correct"
      );
      return;
    }

    try {
      const data = await signInUser(email, password);

      const signedInUser = data.signedInUser;
      setSignedInUserData(signedInUser);

      navigate("/profile");
    } catch(error) {
      setAuthError(error.message);
    }
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPassword = (event) => { 
    setPassword(event.target.value);
  }

  const handleClickSignUp = (event) => {
    setUserHasAccount(false);
  };

  return (
    <div className="auth-form">
      <div className="form-container">
        <h2 className="form-title">Sign-In</h2>
        <input
          type="text"
          placeholder="E-mail"
          className="auth-input"
          onChange={handleInputEmail}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          onChange={handleInputPassword}
        ></input>
        <button className="auth-button" onClick={handleClick}>
          Submit
        </button>
        {authError && <p>{authError}</p>}
        <p onClick={handleClickSignUp} className="account-yes-no">
          No account yet? Register now
        </p>
      </div>
    </div>
  );
};

export default SignIn;
