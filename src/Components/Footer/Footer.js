import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <p>Made by Manjula S.</p>
      <div className="nav-links footer">
        <span>
            <Link to ="">   <AiFillGithub /> </Link>
        
        </span>
        <span>
            <Link to ="">   <AiFillLinkedin /> </Link>
        
        </span>
        
      </div>
    </div>
  );
};

export default Footer;
