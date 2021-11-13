
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory } from 'react-router';
import { Alert } from "react-bootstrap";



const Register = () => {
  const { register, handleSubmit, reset } = useForm();
    const {user, handleRegister } = useAuth();
    
    const history=useHistory();

  const onSubmit = (data) => {
    // console.log(data);
    const user = {email: data.email, displayName: data.name}
    axios.post("https://arcane-river-42711.herokuapp.com/users", user).then((res) => {
      if (res.data.insertedId) {
        alert("Registered successfully");
        handleRegister(data.email, data.password, data.name, history)
        reset();
      }
    });
  };
  return (
    <div className="bg-light pb-5">
        <h3 className="text-center  py-5">Register</h3>
      <div className="w-75 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="name"
            className="form-control  mb-3"
            {...register("name")}
            placeholder="Your Name"
            required
          />
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
          <input
            type="password"
            className="form-control  mb-3"
            {...register("password")}
            placeholder="Confirm Your password"
            required
          />
          <button className="btn btn-primary w-100 fw-bold" type="submit">
            Register
          </button>
        </form>
      </div>
      <br />
      <Link className="variant-success" style={{textDecoration: "none", color: "#000"}} to="/login">Already Register ? Please Login</Link>
     
    </div>
  );
};

export default Register;