import React from 'react';

const LandingPage = ({ onContinue, onloginLoad }) => {
  return (
    <div className="landing-page">
      <img src="/path/to/your/logo.svg" alt="Your Tailor" className="logo" />
      <h1>Your Tailor</h1>
      <p>tailors your clothes with your personality in mind</p>
      <input type="email" placeholder="Email" className="email-input" />
      <button onClick={onContinue} className="continue-button">Continue</button>
      <a href="#" onClick={onloginLoad} className="Login">Log In</a>
    </div>
  );
};

export default LandingPage;