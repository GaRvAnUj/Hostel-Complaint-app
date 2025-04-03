import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DarkModeContext from './context/DarkModeContext';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import HostelRules from './pages/HostelRules/HostelRules';
import Contact from './pages/Contact/Contact';
import ComplaintForm from './pages/ComplaintForm/ComplaintForm';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.className = newMode ? 'dark-theme' : '';
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Router>
        <div className={`app-wrapper ${darkMode ? 'dark-theme' : ''}`}>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/hostel-rules" element={<HostelRules />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/complaint" element={<ComplaintForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;