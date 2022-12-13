import React from "react";
import { MdPersonOutline } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-elements">
        <div className="header-title">EVOLT</div>
        <Link exact to="/" className="nav-link" >
          Home
        </Link>
        <Link to="productpage" className="nav-link" >Shop now </Link>
      </div>

      <input className="search-element" placeholder="search" />

      <div className="nav-elements">
        <div>
          <MdPersonOutline className="nav-icons" />
          <p className="icon-type">profile</p>
        </div>
        <div>
          <BiHeart className="nav-icons " />
          <p className="icon-type ">whishlist</p>
        </div>
        <div>
          <BsCart3 className="nav-icons" />
          <p className="icon-type">cart</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
