import React, { useState } from 'react';
import logo from '../assets/YourTailorLogo.svg';
import icon from '../assets/YourTailor.svg';





const LoginPage = ({ onLogin }) => {

  const [inputState, setInputState] = useState("custom-input");
  const [checkMarkVisibility, setCheckMarkVisibility] = useState("");

  function checkInput(){
    setInputState(inputState=="custom-input"?"custom-input custom-input-checked": "custom-input");
    setCheckMarkVisibility(checkMarkVisibility==""?"fa-solid fa-check": "")
  }

  return (
    <div className="login-page">
      <h1 className="lblTop"><a className="icon"><h2><img src={logo} alt="" /></h2></a></h1>
      <h1 className='page-title'>Log In</h1>
      <div className='inputNlabelContainer'>
      <label id='emailLabel' htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="" className="email-input" />
      </div>

      <div className='inputNlabelContainer'>
      <label id='passwordLabel' htmlFor="email">Password</label>
      <input type="password" id='password' placeholder="" className="password-input" />
      </div>

      <div className="loginOps">
        <a onClick={checkInput} id="remember-me" className={inputState}><i className={checkMarkVisibility}></i></a>
        <label id='rmbme' className='remember-me-Lbl' htmlFor="remember-me">Remember me</label>
        <a href="#" className="forgot-pass-Lbl">Lost Password?</a>
      </div>

      <button onClick={onLogin} className="login-button">Log In</button>
    </div>
  );
};

export default LoginPage;