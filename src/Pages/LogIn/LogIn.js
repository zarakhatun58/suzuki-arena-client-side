import React, { useState } from "react";
import "./LogIn.css";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const LogIn = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError, logout } =
    useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <>
      <h2> Please Login </h2>
      <div className="log-in-area py-5">
        <div className="container">
          <div className="row">
            <div className=" row-cols-1 row-cols-lg-4 row-cols-md-4 mx-auto p-0">
              <form onSubmit={handleLoginSubmit}>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    onChange={handleOnChange}
                    class="form-control"
                    id="floatingInput"
                    placeholder="email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    onChange={handleOnChange}
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                  <button type="submit"> Login</button>
                </div>
              
             
              <div className="login-form text-center">
                <Link to="/register">
                  <button type="submit">New user? Please Register </button>
                </Link>

                { isLoading && <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>}
                {user?.email && <Alert variant="success">Login successfully!</Alert> }
                {authError && <Alert variant="error">{authError}</Alert>}
                
              </div>
             
              <p>..................</p>
              <button type="submit" onClick={handleGoogleSignIn}>Google Sign In </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
