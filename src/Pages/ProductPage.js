import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import img1 from "../Assests/img1.png";
import "./Productpage.css";
import { AiOutlineHeart } from "react-icons/ai";

const ProductPage = () => {
  return (
    <div >
      <Header />
      <div className="products-container">
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
        <div className="product-container">
          <img src={img1} className="prod-img" />
          <AiOutlineHeart className="wishlist-icon" />

          <div className="prod-title">JBL headphone</div>
          <div className="prod-discription">
            JBL headphone, wireless portable, 5000vh and ...
          </div>
          <div className="prod-cost">$100</div>
          <button className="prod-button">Add to cart </button>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default ProductPage;
