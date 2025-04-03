import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[a-z]+\.[a-z]+\d{4}@vitstudent\.ac\.in$/i;
    return re.test(email);
  };

  // Generate OTP function
  const generateOtp = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid VIT email');
      return;
    }

    setError('');
    
    // Generate a random 4-digit OTP
    const newOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(newOtp);
    
    // Show OTP to user (in production, this would be sent via email)
    alert(`OTP sent to ${email}: ${newOtp}`);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // If OTP hasn't been generated yet, generate it
    if (!generatedOtp) {
      generateOtp();
      return;
    }

    
    if (parseInt(otp) === generatedOtp) {
      navigate('/home');
    } else {
      setError('Invalid OTP! Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h1>ROOMEASEE!!</h1>
      <div className="login">
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your VIT email (firstname.lastname@vitstudent.ac.in)" 
            required
          />

          {generatedOtp && (
            <>
              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
                maxLength="6"
              />
              <p className="otp-notice">Check your email for the OTP</p>
            </>
          )}

          <button type="submit">
            {generatedOtp ? 'Verify OTP' : 'Send OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;