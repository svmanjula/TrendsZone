import React from "react";
import Header from "../Components/Header/Header";
import "./Loginpage.css";
import { Link } from "react-router-dom";

const Signuppage = () => {
  return (
    <div>
      <Header />
      <div className="profile-container" >
      <div className="container">
        <div className="title">Sign up </div>

        <label>Full name </label>
        <input placeholder="Enter your full name" type="text" />

        <label>Email address </label>
        <input placeholder="Enter your email" type="text" />

        <label>Password</label>
        <input placeholder="Enter your password" type="password" />

        <label>Confirm password</label>
        <input placeholder="Re-enter the password" type="password" />

        <button className="button ">Sign up</button>
        <div className="container-text">
          Already a user?
          <Link className="container-nav" to="/login">
            login
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signuppage;
