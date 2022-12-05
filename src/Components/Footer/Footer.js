import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Made by Manjula S.</p>
      <div className="footer-nav">
        <Link to="" className="nav-link-footer">
          <AiFillGithub />
        </Link>

        <a 
          href="https://www.google.com"
          target="_blank"
          className="nav-link-footer">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
