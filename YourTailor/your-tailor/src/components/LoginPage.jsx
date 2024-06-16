import React from 'react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <h1>Log In</h1>
      <input type="email" placeholder="Email" className="email-input" />
      <input type="password" placeholder="Password" className="password-input" />
      <div className="remember-me">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <a href="#" className="forgot-password">Lost Password?</a>
      <button onClick={onLogin} className="login-button">Log In</button>
    </div>
  );
};

export default LoginPage;