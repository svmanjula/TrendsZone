import Header from "../Components/Header/Header";
import heroimg from "../Assests/heroimg.jpg";
import "./Homepage.css";
import React from "react";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <img className="hero-img" src={heroimg}  alt ="img"/>
        <div className="prod-categories">
          <div className="category-title">Categories </div>
          <div className="category-types">
            <div className="category-type">Wired</div>
            <div className="category-type">Noise cancelling</div>
            <div className="category-type">Wireless</div>
            <div className="category-type">Speaker</div>
          </div>
          <div className="brand-title">Top Brands</div>
          <div className="brands">
            <div className="brand-name">Marshall </div>
            <div className="brand-name">Sony </div>
            <div className="brand-name">JBL </div>
            <div className="brand-name">Boat </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
