import React, { useContext, useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { CartContext } from "../../Context/Context";

const Header = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const location = useLocation();

  const {state:{cart,wishlist}}=useContext(CartContext)

  const handleToggle = () => {
    setHamburgerClick(!hamburgerClick);
  };

  return (
    <div className="navbar">
      <div className="nav-elements">
        <div className="brand-title">EVOLT</div>
        <Link
          className="toggle-button"
          onClick={() => {
            handleToggle();
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>

        {hamburgerClick && (
          <div className="hamburger">
            <div className="hamburger-user">
              <div>
                <FaRegUserCircle />
              </div>
              <div> Welcome </div>

              <div
                className="cancel-icon "
                onClick={() => {
                  handleToggle();
                }}
              >
                X
              </div>
            </div>
            <div className="hamburger-links">
              <Link exact to="/" className="hamburger-link ">
                Home
              </Link>
              <Link to="/product" className="hamburger-link ">
                Shop now
              </Link>
              <Link to="/login" className="hamburger-link ">
                Login
              </Link>
            </div>
          </div>
        )}

        <Link exact to="/" className="nav-link  linkStyle media-query">
          Home
        </Link>
        <Link to="/product" className="nav-link linkStyle media-query">
          Shop now
        </Link>
      </div> 
      {location.pathname === "/product" && (
        <input className="search-element" placeholder="search " />
      )}

      <div className="nav-elements">
        
          
          <Link to="/login" className=" linkStyle nav-element media-query ">
          <MdPersonOutline className="nav-icons " />
          <p className="icon-type">profile</p>
          </Link>
      
        <Link to="/wishlist"className="nav-element linkStyle ">
          <BiHeart className="nav-icons " />
          <p className="icon-type ">whishlist</p>
          <div>{wishlist.length} </div>
        </Link>
        <Link to="/checkout" className="nav-element linkStyle">
          <BsCart3 className="nav-icons" />
          <p className="icon-type">cart</p>
          <div>{cart.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
