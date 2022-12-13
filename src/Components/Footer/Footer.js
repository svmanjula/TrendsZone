import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Made by Manjula S.</p>
      <div className="footer-nav" >
        <Link to="" className="nav-link" >
          <AiFillGithub />
        </Link>

        <Link to="" className="nav-link" >
          <AiFillLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
