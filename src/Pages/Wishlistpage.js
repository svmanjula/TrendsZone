import React, { useContext } from "react";
import { CartContext, Context } from "../Context/Context";
import "./Productpage.css";
import "./CheckoutPage.css";


import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";

const Wishlistpage = () => {
  const {
    state: { wishlist, cart },
    dispatch,
  } = useContext(CartContext);
  return (
    <div>
      <Header />

      {
         ( wishlist.length == 0 )? ( <div className='cart-container empty-container' >
          <h3> Your wishlist is empty..</h3>
          <p> Explore more products, <Link to="/product" className='empty-container-link' >continue shopping. </Link> </p>
      </div>):(
            <div className="wishlist-container" >
                    <h2 className="wislist-heading" > My Wishlist</h2>
                   <div className="wishlist-products-container" >
              {wishlist.map((product) => (
                <div key={product.id} className="product-container">
                  <img src={product.image} className="prod-img" />
    
                  {wishlist.some((prod) => prod.id == product.id) ? (
                    <AiFillHeart onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product,
                      });
                    }}
                    className="wishlist-icon filled-icon" />
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
                 </div>

          
          )
      }
      
    </div>
  );
};

export default Wishlistpage;
