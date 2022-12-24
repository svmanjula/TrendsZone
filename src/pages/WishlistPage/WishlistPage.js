import React, { useContext } from "react";
import "../ProductPage/ProductPage.css";
import "../CheckoutPage/CheckoutPage.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import Rating from "../../components/Rating";

const Wishlistpage = () => {
  const {
    productState: { wishlist, cart },
    productDispatch,
  } = useContext(CartContext);
  return (
    <div>
      <Header />

      {wishlist.length === 0 ? (
        <div className="cart-container empty-container">
          <h3> Your wishlist is empty..</h3>
          <p>
            Explore more products,
            <Link to="/product" className="empty-container-link">
              continue shopping.
            </Link>
          </p>
        </div>
      ) : (
        <div className="wishlist-container">
          <h2 className="wislist-heading"> My Wishlist</h2>
          <div className="wishlist-products-container">
            {wishlist.map((product) => (
              <div key={product.id} className="product-container">
                {wishlist.some((prod) => prod.id === product.id) ? (
                  <AiFillHeart
                    onClick={() => {
                      productDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product,
                      });
                    }}
                    className="wishlist-icon filled-icon"
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => {
                      productDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: product,
                      });
                    }}
                    className="wishlist-icon"
                  />
                )}
                <Link to={`product/${wishlist.id} `} className="linkStyle">
                  <img src={product.image} alt="img" className="prod-img" />

                  <div className="prod-title">
                    {product.title.split(" ").slice(0, 3).join(" ")}
                  </div>

                  <div className="prod-cost">${product.price} </div>
                  <Rating rating={product.rating.rate}  />
                </Link>
                {cart.some((prod) => prod.id === product.id) ? (
                  <button
                    className="prod-button remove-button"
                    onClick={() => {
                      productDispatch({
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
                      productDispatch({
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
        </div>
      )}
    </div>
  );
};

export default Wishlistpage;
