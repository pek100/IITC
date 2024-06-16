import React from 'react';

const SignupPage = ({ onSignup }) => {
  return (
    <div className="login-page">
      <img src="/path/to/your/logo.svg" alt="Your Tailor" className="logo" />
      <h1>Your Tailor</h1>
      <p>tailors your clothes with your personality in mind</p>
      <input type="password" placeholder="Password" className="password-input" />
      <input type="password" placeholder="Confirm Password" className="password-input" />
      <button onClick={onSignup} className="continue-button">Continue</button>
    </div>
  );
};

export default SignupPage;