import React from "react";
import Header from "../components/Header/Header";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div>
      <Header />
      <div className="profile-container" >

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
          <Link className="container-nav" to="/signup">
           
            signup
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Loginpage;
