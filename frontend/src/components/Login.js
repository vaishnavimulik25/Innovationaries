import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [userLogin] = useState(true);
//const [userLogin, setUserLogin] = useState(true);
  return (
    <div className="login-container">
      <div className="login-option">
        <div className="content user-content">
          {userLogin ? (
            <>
              <h2>User Login</h2>
              <p>If you are willing to donate and support the orphans, please log in with your account credentials.</p>
              <Link to="/user-login">
                <button className="login-button">Login for Users</button>
              </Link>
              <p>If you don't have an account, you can sign up here:</p>
              <Link to="/user-signup">
                <button className="signup-button">Sign Up for Users</button>
              </Link>
            </>
          ) : (
            <>
              {/* Content for orphanage login */}
              <h2>Orphanage Login</h2>
              <p>orphanage-specific login content goes here...</p>
        import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [userLogin] = useState(true);
//const [userLogin, setUserLogin] = useState(true);
  return (
    <div className="login-container">
      <div className="login-option">
        <div className="content user-content">
          {userLogin ? (
            <>
              <h2>User Login</h2>
              <p>If you are willing to donate and support the orphans, please log in with your account credentials.</p>
              <Link to="/user-login">
                <button className="login-button">Login for Users</button>
              </Link>
              <p>If you don't have an account, you can sign up here:</p>
              <Link to="/user-signup">
                <button className="signup-button">Sign Up for Users</button>
              </Link>
            </>
          ) : (
            <>
              {/* Content for orphanage login */}
              <h2>Orphanage Login</h2>
              <p>orphanage-specific login content goes here...</p>
              <Link to="/orphanage-login">
                <button className="login-button">Login for Orphanages</button>
              </Link>
              <p>If your orphanage doesn't have an account, you can sign up here:</p>
              <Link to="/orphanage-signup">
                <button className="signup-button">Sign Up for Orphanages</button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="login-option">
        <div className="content orphanage-content">
          {/* Content for orphanage login on the right side */}
          <h2>Orphanage Login</h2>
          <p>Orphanage owners can go through your dashboard having details about user donations to your orphanage</p>
          <Link to="/orphanage-login">
            <button className="login-button">Login for Orphanages</button>
          </Link>
          <p>If your orphanage doesn't have an account, you can sign up here:</p>
          <Link to="/orphanage-signup">
            <button className="signup-button">Sign Up for Orphanages</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;