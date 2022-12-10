import Header from "../components/Header/Header";
import heroimg from "../assests/heroimg.jpg";
import "./HomePage.css";
import React from "react";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <img className="hero-img" src={heroimg} alt="img" />
        <div className="prod-categories">
          <div className="category-title">Categories </div>
          <div className="category-types">
            <div className="category-type">
              <img className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
              />
              <div> Electronics</div>
            </div>
            <div className="category-type">
              <img className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              />
              <div> Men's clothing</div>
            </div>

            
            <div className="category-type">
              <img className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              />
              <div> Women's clothing</div>
            </div>
            <div className="category-type">
             
              <img className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              />
               <div> Jewelery</div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
