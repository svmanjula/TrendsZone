import React, { useContext, useEffect, useState } from "react";
import "../CheckoutPage/CheckoutPage.css";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Header from "../../components/Header/Header";
import Rating from "../../components/Rating";
import { CartContext } from "../../context/CartContext/CartContext";

const CheckoutPage = () => {
  const {
    productState: { cart },
    productDispatch,
  } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.qty), 0)
    );
  }, [cart]);
  console.log(total);

  return (
    <div>
      <Header />

      {cart.length === 0 ? (
        <div className="cart-container empty-container">
          <h3> Your cart is empty.</h3>
          <p>
            Check your wishlist for favourite items or{" "}
            <Link to="/product" className="empty-container-link">
              continue shopping.
            </Link>
          </p>
        </div>
      ) : (
        <div className="cart-container">
          <h2 cart-product-title>Shopping cart ({cart.length} )</h2>

          <div className="cart-productDetail-container">
            <div className="cart-products-container">
              {cart.map((cartProduct) => (
                <div key={cartProduct.id} className="cart-product-container">
                  <div>
                    <img
                      alt="img"
                      className="cart-product-img"
                      src={cartProduct.image}
                    />
                  </div>

                  <div className="cart-product-detail">
                    <div className="cartprod-title">
                      {cartProduct.title.split(" ").slice(0, 3).join(" ")}
                    </div>
                    <div>${cartProduct.price} </div>
                    <Rating rating={cartProduct.rating.rate} />
                    <span className="cart-product-qty-container ">
                      <span>Quantity:</span>
                      {cartProduct.qty === 1 ? (
                        <button
                          onClick={() => {
                            productDispatch({
                              type: "REMOVE_FROM_CART",
                              payload: cartProduct,
                            });
                          }}
                          className="cart-product-qty decrement disable"
                        >
                          <AiOutlineMinus />
                        </button>
                      ) : (
                        <button
                          className="cart-product-qty decrement"
                          onClick={() => {
                            productDispatch({
                              type: "DECREMENT",
                              payload: {
                                id: cartProduct.id,
                                qty: cartProduct.qty,
                              },
                            });
                          }}
                        >
                          <AiOutlineMinus />
                        </button>
                      )}

                      <span className="cart-product-qty">
                        {cartProduct.qty}
                      </span>
                      <button
                        className="cart-product-qty increment"
                        onClick={() => {
                          productDispatch({
                            type: "INCREMENT",
                            payload: {
                              id: cartProduct.id,
                              qty: cartProduct.qty,
                            },
                          });
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </span>
                    <div className="cart-product-button ">
                      <button
                        onClick={() => {
                          productDispatch({
                            type: "REMOVE_FROM_CART",
                            payload: cartProduct,
                          });
                        }}
                      >
                        Remove from cart
                      </button>
                      <button
                        onClick={() => {
                          productDispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: cartProduct,
                          });
                        }}
                      >
                        Move to wislist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="price-details-container">
              <h3>Price Details</h3>
              <hr />
              <div>
                <div className="price-details">
                  <span>Price ({cart.length} items) </span>
                  <span> $ {total.toFixed(1)} </span>
                </div>

                <div className="price-details">
                  <span>Delivery charges </span>
                  <span>Free </span>
                </div>

                <hr />
                <div className="price-details">
                  <span> Total Amount</span>
                  <span> $ {total.toFixed(1)} </span>
                </div>
              </div>
              <hr />
              <div className="cart-product-button  checkout-button">
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
