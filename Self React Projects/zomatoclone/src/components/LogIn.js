import React from 'react';
import "./LogIn.css";

const LogIn = ({ onClose }) => {
  return (
    <div className='LogIn'>
      <div className="loginPage">
        <h5>
          <span>Login</span>
          <small style={{ cursor: "pointer" }} onClick={onClose}>
            <i className="ri-close-line"></i>
          </small>
        </h5>
        <form>
          <input type="phone" placeholder='Phone' />
          <h2><a href="/">Send One Time Password</a></h2>
          <p>or</p>
          <div className="btnss">
            <button>Continue with Email</button>
            <button><i className="ri-google-fill"></i> Continue with Google</button>
          </div>
          <h3>New to Zomato? <a href="/">Create an account</a></h3>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
