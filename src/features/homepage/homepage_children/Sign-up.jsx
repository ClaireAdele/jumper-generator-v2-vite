import React, { useState } from "react";
import { signUpUser } from "../../../services-and-util-functions/auth-services";
import EyeClosedSvgIcon from "../../../assets/EyeClosedSvgIcon.svg?react";
import EyeOpenSvgIcon from "../../../assets/EyeOpenSvgIcon.svg?react";
import "../Homepage.css";

const SignUp = ({ setUserHasAccount }) => {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password || !email) {
      setAuthError(
        "Please make sure to enter a correct username, password and email"
      );
      return;
    }
    
    try {
      await signUpUser(username, email, password);
    
      setUserHasAccount(true);
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const handleInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickSignIn = (event) => {
    setUserHasAccount(true);
  };

  return (
    <div className="auth-form-green-square">
      <div className="auth-form-container">
        <h2 className="auth-form-title">Register</h2>
        <form className="auth-form" onSubmit={handleClickSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="auth-input"
            onChange={handleInputUsername}
          ></input>
          <input
            type="email"
            placeholder="Email"
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
              {showPassword ? <EyeClosedSvgIcon/> : <EyeOpenSvgIcon />}
            </div>
          </div>
          <button className="auth-button">
            Submit
          </button>
        </form>
        {authError && <p>{authError}</p>}
        <p onClick={handleClickSignIn} className="account-yes-no">
          Already have an account? Sign-in now.
        </p>
      </div>
    </div>
  );
};

export default SignUp;