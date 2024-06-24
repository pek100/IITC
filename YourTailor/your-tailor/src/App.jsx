import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/Landing';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import PreferencesPage from './pages/Preferences';
import GenerationsPage from './pages/Generate';
import './styles/App.css';
import './styles/Pages.css';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/generate" element={<GenerationsPage />} />
          <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
