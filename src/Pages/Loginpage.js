import React from "react";
import Header from "../Components/Header/Header";
import "./Loginpage.css";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="title">Login </div>

        <label>Email address </label>
        <input placeholder="Enter your email" type="text" />

        <label>Password</label>
        <input placeholder="Enter your password" type="password" />

        <button className="button test">Login with test credentials</button>
        <button className="button ">Login</button>
        <div className="container-text">
          Not a user?
          <Link className="container-nav" to="/signuppage">
           
            signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
