import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./ProductPage.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Rating from "../../components/Rating";
import { CartContext } from "../../context/CartContext/CartContext";
import { FilterContext } from "../../context/FilterContext/FilterContext";

const ProductPage = () => {
  const {
    productDispatch,
    products,
    productState: { cart, wishlist },
  } = useContext(CartContext);

  const {
    filterState: { sort, byCategory, byRating,bySearch },
  } = useContext(FilterContext);
  console.log(cart, wishlist);

  const filteredProducts = () => {
    let sortedProducts = [...products];

    if(byCategory.length !== 0){
      sortedProducts = sortedProducts.filter((existingProduct)=>
      byCategory.includes(existingProduct.category)
      )
    }

    if(sort){
      sortedProducts =sortedProducts.sort((a,b) =>
      sort === "lowToHigh" ? (a.price-b.price) :(b.price-a.price)
      )
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((existingProduct)=>
     Math.round( existingProduct.rating.rate) >= byRating
       )
    }
    if(bySearch !== null){
      sortedProducts =sortedProducts.filter((existingProduct)=>
      existingProduct.title.toLowerCase().includes(bySearch)
      )
    }

    

return sortedProducts;
  };
console.log(filteredProducts() )
  

  return (
    <div>
      <Header />
      <div className="products-container">
        {filteredProducts().map((product) => (
          <div key={product.id} className="product-container ">
            <img alt="img" src={product.image} className="prod-img" />

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

            <div className="prod-title">
              {product.title.split(" ").slice(0, 3).join(" ")}
            </div>

            <div className="prod-cost">${product.price} </div>
            <Rating rating={product.rating.rate} />

            {cart.some(
              (existingProduct) => existingProduct.id === product.id
            ) ? (
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

      <Sidebar />
    </div>
  );
};

export default ProductPage;
