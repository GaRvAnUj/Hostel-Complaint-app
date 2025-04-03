import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="registration-page">
      <h1>ROOMEASEE!!</h1>
      <div className="registration">
        <button 
          className="button" 
          onClick={() => navigate('/login')}
        >
          STUDENT
        </button>
        <button 
          className="button" 
          onClick={() => navigate('/')}
        >
          ADMIN
        </button>
      </div>
    </div>
  );
};

export default Registration;