import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Rating from "../../components/Rating";
import { CartContext } from "../../context/CartContext/CartContext";
import "../ProductPage/ProductPage.css";
import "./SingleProductPage.css";

const SingleProductPage = () => {
  const { productId } = useParams();

  const {
    productDispatch,
    products,
    productState: { cart, wishlist },
  } = useContext(CartContext);

  const singleProduct = products.find((product) => product.id === Number(productId));

  console.log(singleProduct);
  console.log("param", productId);
  return (
    <div>
      <Header />
      {
        <div className="singleProduct-container linkStyle ">
          <img
            alt="img"
            src={singleProduct && singleProduct.image}
            className="singleProduct-img"
          />

          <div className="singleProduct-discription">
            <div className="singleProduct-title">
              {singleProduct &&
                singleProduct.title.split(" ").slice(0, 7).join(" ")}
            </div>
            <Rating rating={singleProduct && singleProduct.rating.rate} />

            <div className="prod-description">
              {singleProduct &&
                singleProduct.description.split(" ").slice(0, 17).join(" ")}
            </div>

            <div className="singleProduct-cost">
              ${singleProduct && singleProduct.price}{" "}
            </div>

            <div className="singleProduct-buttons">
              {cart.some(
                (existingProduct) => existingProduct.id === singleProduct.id
              ) ? (

                <Link to = '/checkout' className="linkStyle" >
                <button
                  className="cart-btn singleProduct-btn"
                  // onClick={() => {
                  //   productDispatch({
                  //     type: "REMOVE_FROM_CART",
                  //     payload: singleProduct,
                  //   });
                  // }}
                >
                  Go to cart
                </button>
                </Link>
              ) : (
                <button
                  className="prod-button singleProduct-btn"
                  onClick={() => {
                    productDispatch({
                      type: "ADD_TO_CART",
                      payload: singleProduct,
                    });
                  }}
                >
                  Add to cart
                </button>
              )}

              {wishlist.some((product) => product.id === singleProduct.id) ? (
                <button
                  className="prod-button singleProduct-btn  remove-button"
                  onClick={() => {
                    productDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: singleProduct,
                    });
                  }}
                >
                  Remove from wishlist
                </button>
              ) : (
                <button
                  className="prod-button singleProduct-btn "
                  onClick={() => {
                    productDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: singleProduct,
                    });
                  }}
                >
                  Add to wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default SingleProductPage;
