import React from 'react';
import logo from '../assets/YourTailorLogo.svg';


const SignupPage = () => {
  return (
    <div className="login-page">
    <img src={logo} alt="Your Tailor" className="logo" />
    <p className="slogen">tailors your clothes with your personality in mind</p>
    <label id='passwordLabel' htmlFor="password">Password</label>
    <input type="password" id="password" placeholder="" className="password-input" />
    <label id='passwordLabel' htmlFor="password">Confirm Password</label>
    <input type="password" placeholder="" className="password-input" />
    <a href="/preferences"><button className="continue-button">Continue</button></a>
  </div>
  );
};

export default SignupPage;