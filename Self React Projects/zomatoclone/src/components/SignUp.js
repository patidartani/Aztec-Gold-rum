import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./SignUp.css";
import LogIn from './LogIn';

const SignUp = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  // Get the navigate function from useNavigate
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!fullName || !email) {
      alert('Please fill out all fields.');
      return;
    }

    if (isSignedUp) {
      alert(`Error: Account for ${fullName} already exists.`);
      return;
    }

    // Perform your API call to create the account
    // Replace the following alert with your actual API call

    // Once the account is created, navigate to the login page
    setIsSignedUp(true);
    navigate("/LogIn"); // Use navigate to redirect to the login page

    // No need for the alert after a successful signup
  };

  return (
    <div className='SignUp'>
      <div className="signupPage">
        {!isSignedUp ? (
          <>
            <h5>
              <span>Sign Up</span>
              <small style={{ cursor: "pointer" }}>
                <i className="ri-close-line" onClick={onClose}></i>
              </small>
            </h5>
            <form onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder='Full Name'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p>I agree to Zomato's Terms of Service, Privacy Policy, and Content Policies</p>
              <div className="btns">
                <button type='submit'>Create account</button>
                <span>or</span>
                <button><i className="ri-google-fill"></i> Continue with Google</button>
              </div>
              <h3>Already have an account? <a href="/login">Log in</a></h3>
            </form>
          </>
        ) : (
          <div>
            <LogIn />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
