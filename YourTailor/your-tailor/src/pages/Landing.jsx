import React from 'react';
import logo from '../assets/YourTailorLogo.svg';

const LandingPage = ({ onContinue, onloginLoad }) => {
  return (
    <div className="landing-page">
      <img src={logo} alt="Your Tailor" className="logo" />
      <p className="slogen">tailors your clothes with your personality in mind</p>
      <div className='inputNlabelContainer'>
      <label id='emailLabel' htmlFor="email">Email</label>
      <input type="email" id='email' placeholder="" className="email-input" />
      </div>
      <button onClick={onContinue} className="continue-button">Continue</button>
      <a href="#" onClick={onloginLoad} className="Login">Log In</a>
    </div>
  );
};

export default LandingPage;