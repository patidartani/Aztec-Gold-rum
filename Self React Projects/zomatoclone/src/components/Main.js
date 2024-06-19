import React, { useState } from 'react';
import "./Main.css";
import LogIn from './LogIn';
import SignUp from './SignUp';
import ZomatoLogo from "../assets/ZomatoLogo.avif"

const Main = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false); // New state to track signup success

  const openLoginPopup = (e) => {
    e.preventDefault();
    setShowLoginPopup(true);
    setShowSignUpPopup(false);
  };

  const openSignUpPopup = (e) => {
    e.preventDefault();
    setShowSignUpPopup(true);
    setShowLoginPopup(false);
  };

  const closeSignUpPopup = () => {
    setShowSignUpPopup(false);
    setIsSignUpSuccess(false); 
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  // Function to handle signup success
  const handleSignUpSuccess = () => {
    setIsSignUpSuccess(true);
    setShowSignUpPopup(false); 
  };

  return (
    <div className='MainPage'>
      <div className="main">
        <div className="text">
          <div className="top">
            <a href="/" onClick={openLoginPopup}>Log in</a>
            <a href="/" onClick={openSignUpPopup}>Sign up</a>
          </div>
          <div className="bottom">
            <img src={ZomatoLogo} alt="" />
            <p>Find the best restaurants, cafés and bars in India</p>
          </div>
        </div>
      </div>
      {showLoginPopup && <LogIn onClose={closeLoginPopup} />}
      {showSignUpPopup && (
        <SignUp onClose={closeSignUpPopup} onSignUpSuccess={handleSignUpSuccess} />
      )}
      {isSignUpSuccess && showLoginPopup && <LogIn onClose={closeLoginPopup} />}
    </div>
  );
};

export default Main;
