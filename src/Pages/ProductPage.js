import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./ProductPage.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext } from "../context/Context";
import Rating from "../components/Rating";

const ProductPage = () => {
  const {
    products,
    filterState: { sort, byRating, bySearch, byCategory },
    state: { cart, wishlist },

    dispatch,
  } = useContext(CartContext);

  const filterProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (bySearch) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(bySearch)
      );
    }
    if (byCategory) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === byCategory
      );
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating.rate >= byRating
      );
    } else {
      return sortedProducts;
    }
  };
  console.log(filterProducts());

  return (
    <div>
      <Header />
      <div className="products-container">
        {filterProducts().map((product) => (
          <div key={product.id} className="product-container ">
            <img alt="img" src={product.image} className="prod-img" />

            {wishlist.some((prod) => prod.id == product.id) ? (
              <AiFillHeart
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: product,
                  });
                }}
                className="wishlist-icon filled-icon"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: product,
                  });
                }}
                className="wishlist-icon"
              />
            )}

            <div className="prod-title">
              {product.title.split(" ").slice(0, 3).join(" ")}
            </div>
            {/* <div className="prod-description">
            {product.description}
          </div> */}
            <div className="prod-cost">${product.price} </div>
            <Rating rating={product.rating.rate} />
            {cart.some((prod) => prod.id === product.id) ? (
              <button
                className="prod-button remove-button"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="prod-button"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        ))}
      </div>

      <Sidebar />
    </div>
  );
};

export default ProductPage;
