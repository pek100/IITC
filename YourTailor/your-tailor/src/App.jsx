import React, { useState } from 'react';
import LandingPage from './pages/Landing';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import PreferencesPage from './pages/Preferences';
import GenerationsPage from './pages/Generate';
import './styles/App.css';
import './styles/Pages.css';


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
      {currentPage === 'generation' && <GenerationsPage />}
    </div>
  );
}

export default App;