import React from "react";
import "./LoginSignup.scss";

function LoginSignup() {
  return (
    <div className="login-signup">
      <div className="login-signup__container">
        <h1 className="login-signup__header">SignUp</h1>
        <div className="login-signup__fields">
          <input
            className="login-signup__input"
            type="text"
            placeholder="Name"
          />
          <input
            className="login-signup__input"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="login-signup__input"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="login-signup__button">Continue</button>
        <p className="login-signup__login">
          Already have an account? <span>Log in here</span>
        </p>
        <div className="login-signup__agree">
          <input type="checkbox" name="" id="" />
          <p className="login-signup__login">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
