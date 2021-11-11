import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
       
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.name, loginData.email, loginData.password,loginData.password2,  history);
        e.preventDefault();
    }
    return (
    <div>
    
        <div className="log-in-area py-5">
        <h2> Register Here </h2>
        <div className="container">
          <div className="row">
            <div className=" row-cols-1 row-cols-lg-4 row-cols-md-4 mx-auto p-0">
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <div class="form-floating mb-3">
                  <input
                   placeholder="enter name"
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    class="form-control"
                    id="floatingInput"
                   
                  />
                 
                </div>
                <div class="form-floating mb-3">
                  <input
                   placeholder="email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    class="form-control"
                    id="floatingInput"
                   
                  />
                
                </div>
                <div class="form-floating">
                  <input
                   placeholder="Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    class="form-control"
                    id="floatingPassword"
                   
                  />
                 
                  </div>
                  <div>
                  <input
                   placeholder="re enter Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    class="form-control"
                    id="floatingPassword"
                   
                  />
                 
                  <button type="submit" class="background-color:blue"> Register</button>
                </div>
              
              
               
                <Link to="/login">
                  <button type="submit">Already Registered? Please Login </button>
                </Link>
                    </form>}
                    
                { isLoading && <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>}
                {user?.email && <Alert variant="success">User Created successfully!</Alert> }
                {authError && <Alert variant="error">{authError}</Alert>}
              
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Register;