import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { signInUser } from "../../../services-and-util-functions/auth-services";
import { SignedInUserContext } from "../../../contexts/SignedInUserContext";
import EyeClosedSvgIcon from "../../../assets/EyeClosedSvgIcon.svg?react";
import EyeOpenSvgIcon from "../../../assets/EyeOpenSvgIcon.svg?react";

import useInView from "../../../custom-hooks/useInView";
import { useNavigate } from "react-router-dom";
import "../Homepage.css";

const SignIn = ({ setUserHasAccount }) => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  
  const navigate = useNavigate();

  const { signedInUserData, setSignedInUserData } = useContext(
    SignedInUserContext
  );

  const handleClickSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setAuthError(
        "Please make sure your e-mail and passwords are correct"
      );
      event.target.reset();
      setEmail(undefined);
      setPassword(undefined);
      return;
    }

    try {
      const data = await signInUser(email, password);

      const signedInUser = data.signedInUser;
      setSignedInUserData(signedInUser);

      navigate("/profile");
    } catch (error) {
      event.target.reset();
      setEmail(undefined);
      setPassword(undefined);
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
    <div className="auth-form-green-square">
      <div className="auth-form-container">
        <h2>Sign-In</h2>

        <form className="auth-form" onSubmit={handleClickSubmit}>
          <input
            type="text"
            placeholder="E-mail"
            className="auth-input"
            onChange={handleInputEmail}
          ></input>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="auth-input"
              onChange={handleInputPassword}
            />
            <div
              className="password-toggle-button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeClosedSvgIcon /> : <EyeOpenSvgIcon />}
            </div>
          </div>
          <button className="auth-button">
            Submit
          </button>
        </form>
        {authError && <p>{authError}</p>}
        <p onClick={handleClickSignUp} className="account-yes-no">
          No account yet? Register now
        </p>
      </div>
    </div>
  );
};

export default SignIn;
