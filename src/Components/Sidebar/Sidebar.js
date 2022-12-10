import React, { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import Rating from "../Rating";
import "./Sidebar.css";

const Sidebar = () => {
  const {
    products,
    byRating,
    filterState,
    byCategories,
    filterDispatch,
    sort,
  } = useContext(CartContext);



  console.log(filterState );
  return (
    <div className="sidebar">
      <div className="filter-title">
        <span>Filters </span>
        <span>Clear all </span>
      </div>
      <hr />
      <div className="filter-elements">
        <div className="filter-title"> Sort by</div>

        <label>
          <input
            type="radio"
            name="sortby"

            onChange ={
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
             }
            checked={sort === "lowToHigh" ? true : false}

          />
          Price(Low to High)
        </label>
        <label>
          <input
            type="radio"
            name="sortby"
            onChange={filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })}
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
                payload: "Electronics",
              });
            }}
            // checked={byCategories === "Electronics" ? true : false}
          />
          Electronics
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "Men's clothing",
              });
            }}
            // checked={byCategories === "Men's clothing" ? true : false}

          />
          Men's clothing
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "Speaker",
              });
            }}
            // checked={byCategories === "Speaker" ? true : false}

          />
          Speaker
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "Women's clothing",
              });
            }}
            // checked={byCategories === " Women's clothing" ? true : false}

          />
          Women's clothing
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_CATEGORIES",
                payload: "Jewelery",
              });
            }}
            // checked={byCategories === " Jewelery" ? true : false}

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
