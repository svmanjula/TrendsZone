import React, { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import Rating from "../Rating";
import "./Sidebar.css";

const Sidebar = () => {
  const {
    filterDispatch,
    filterState: { byRating, sort, byCategory },
  } = useContext(CartContext);

  const [select, setSelect] = useState(false);

  return (
    <div className="sidebar">
      <div className="filter-title">
        <span>Filters </span>
        <span
          className="clear-filter"
          onClick={() => {
            filterDispatch({
              type: "CLEAR_ALL",
            });
          }}
        >
          Clear all{" "}
        </span>
      </div>
      <hr />
      <div className="filter-elements">
        <div className="filter-title"> Sort by</div>

        <label>
          <input
            type="radio"
            name="group1"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              });
            }}
            checked={sort === "lowToHigh" ? true : false}
          />
          Price(Low to High)
        </label>
        <label>
          <input
            type="radio"
            name="group1"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              });
            }}
            checked={sort === "highToLow" ? true : false}
          />
          Price(High to Low)
        </label>
      </div>
      <hr />
      {/* <div className="filter-elements">
        <div className="filter-title"> Price</div>
        
        <label>
          Price range:0 to 5000
          <input type="range" className="range-input" />
        </label>
      </div>
      <hr /> */}
      <div className="filter-elements">
        <div className="filter-title"> Types</div>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "electronics",
              });
            }}
            checked={byCategory.includes("electronics") ? true : false}
          />
          Electronics
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "men's clothing",
              });
            }}
            checked={byCategory.includes("men's clothing") ? true : false}
          />
          Men's clothing
        </label>

        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "women's clothing",
              });
            }}
            checked={byCategory.includes("women's clothing") ? true : false}
          />
          Women's clothing
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "jewelery",
              });
            }}
            checked={byCategory.includes("jewelery") ? true : false}
          />
          Jewelery
        </label>
      </div>
      <hr />
      <div className="filter-elements">
        <div className="filter-title"> Rating</div>

        <Rating rating={byRating} />
      </div>
    </div>
  );
};

export default Sidebar;
