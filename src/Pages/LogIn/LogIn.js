import React from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import { Alert } from "react-bootstrap";

const LogIn = () => {
  const {
    signInWithGoogle,
    user,
    setUser,
    saveUser,
    logOut,
    setIsLoading,
    handleEmailLogin,
  } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        saveUser(user.email, user.displayName, 'PUT')
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleLogOut = () => {
  setIsLoading(true)
    logOut()
      .then((res) => {
        setUser({});
        history.push("/home");
        setIsLoading(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    handleEmailLogin(data.email, data.password);
    reset();
  };
  return (
    <>
      <div className="bg-light py-5">
        <div className=" pb-5">
          <h3 className="text-center  pb-3">Login</h3>
          <div className="w-75 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                className="form-control  mb-3"
                {...register("email")}
                placeholder="Your Email"
                required
              />
              <input
                type="password"
                className="form-control  mb-3"
                {...register("password")}
                placeholder="Your password"
                required
              />
              <button className="btn btn-primary w-100 fw-bold" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto p-0">
          <div className="text-center">
            {!user?.displayName ? (
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary text-white"
              >
                Google LogIn
              </button>
            ) : (
              <button
                onClick={handleLogOut}
                className="btn btn-primary mt-3 text-white"
              >
                Log Out
              </button>
            )}
            <br />
            <Link className="text-success"
              style={{
                textDecoration: "none",
                color: "#000",
                marginTop: "10px",
              }}
              to="/register"
            >
              New User ? Please Register
            </Link>
            {user?.email && <Alert severity="success">Login successfully!</Alert>}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
