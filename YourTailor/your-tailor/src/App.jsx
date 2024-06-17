import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PreferencesPage from './pages/PreferencesPage';
import GenerationPage from './pages/GenerationPage';
import './App.css';
import './pages/Pages.css';


function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleContinue = () => {
    setCurrentPage('signup');
  };

  const handleLoginLoad = () => {
    setCurrentPage('login');
  };


  const handleSignup = () => {
    setCurrentPage('preferences');
  };
  

  const handleLogin = (preferences) => {
    console.log('Preferences loaded:', preferences);
    //send preferences to your backend
    setCurrentPage('generation');
  };

  const handlePreferencesSubmit = (preferences) => {
    console.log('Preferences submitted:', preferences);
    //send preferences to your backend
    setCurrentPage('generation');
  };

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage onContinue={handleContinue} onloginLoad={handleLoginLoad}/>}
      {currentPage === 'signup' && <SignupPage onSignup={handleSignup} />}
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentPage === 'preferences' && <PreferencesPage onSubmit={handlePreferencesSubmit} />}
      {currentPage === 'generation' && <GenerationPage />}
    </div>
  );
}

export default App;