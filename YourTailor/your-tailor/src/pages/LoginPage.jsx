import React, { useState } from 'react';
import logo from '../assets/YourTailorLogo.svg';




const LoginPage = ({ onLogin }) => {

  const [inputState, setInputState] = useState("custom-input");
  const [checkMarkVisibility, setCheckMarkVisibility] = useState("");

  function checkInput(){
    setInputState(inputState=="custom-input"?"custom-input custom-input-checked": "custom-input");
    setCheckMarkVisibility(checkMarkVisibility==""?"fa-solid fa-check": "")
  }

  return (
    <div className="login-page">
      <h1 className='page-title'>Log In</h1>
      <label id='emailLabel' htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="" className="email-input" />
      <label id='passwordLabel' htmlFor="email">Password</label>
      <input type="password" id='password' placeholder="" className="password-input" />
      <div className="remember-me">
        <a onClick={checkInput} id="remember-me" className={inputState}><i className={checkMarkVisibility}></i></a>
        <label className='remember-me-Lbl' htmlFor="remember-me">Remember me</label>
      </div>
      <a href="#" className="forgot-pass-Lbl">Lost Password?</a>
      <button onClick={onLogin} className="login-button">Log In</button>
    </div>
  );
};

export default LoginPage;