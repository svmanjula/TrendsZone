import Header from "../../components/Header/Header";
import "../HomePage/HomePage.css";
import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { filterDispatch, filterState } = useContext(CartContext);
  console.log(filterState);
  return (
    <div>
      <Header />
      <div className="main">
        <div className="hero-background">
          Discover the trends
          <Link to="./product" className="linkStyle title ">
            {" "}
            Shop now{" "}
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
                  type: "SORT_BY_CATEGORIES",
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
                  type: "SORT_BY_CATEGORIES",
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
                  type: "SORT_BY_CATEGORIES",
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
                  type: "SORT_BY_CATEGORIES",
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
