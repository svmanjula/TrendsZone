import Header from "../../components/Header/Header";
import "../HomePage/HomePage.css";
import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import { FilterContext } from "../../context/FilterContext/FilterContext";

const HomePage = () => {
  const { filterDispatch, filterState } = useContext(FilterContext );

  console.log(filterState);
  return (
    <div>
      <Header />
      <div className="main">
        <div className="hero-background">
          Discover the trends
          <Link to="./product" className="linkStyle title ">
            Shop now
          </Link>
        </div>
        <div className="prod-categories">
          <div className="category-title">Categories </div>
          <div className="category-types">
            <Link
              to="./product"
              className="category-type linkStyle"
              onClick={() => {
                filterDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: "electronics",
                });
              }}
            >
              <img
                className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
              />
              <div> Electronics</div>
            </Link>
            <Link
              to="./product"
              className="category-type linkStyle"
              onClick={() => {
                filterDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: "men's clothing",
                });
              }}
            >
              <img
                className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              />
              <div> Men's clothing</div>
            </Link>

            <Link
              to="./product"
              className="category-type linkStyle"
              onClick={() => {
                filterDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: "women's clothing",
                });
              }}
            >
              <img
                className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              />
              <div> Women's clothing</div>
            </Link>
            <Link
              to="./product"
              className="category-type linkStyle"
              onClick={() => {
                filterDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: "jewelery",
                });
              }}
            >
              <img
                className="category-type-img"
                alt="img"
                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              />
              <div> Jewelery</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
