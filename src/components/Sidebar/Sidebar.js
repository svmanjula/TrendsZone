import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext/FilterContext";
import Rating from "../Rating";
import "./Sidebar.css";

const Sidebar = () => {
  const {
    filterDispatch,
    filterState: { byRating,sort, byCategory },
    filterState,
  } = useContext(FilterContext);

  const handleFilters = (e, value) => {
    e.target.checked
      ? filterDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: value,
        })
      : filterDispatch({
          type: "UNFILTER_BY_CATEGORY",
          payload: value,
        });
  };

  console.log(filterState);
  return (
    <div className="sidebar">
      <div className="filter-title">
        <span>Filters </span>
        <span
          className="clear-filter"
          onClick ={()=>{
            filterDispatch({
              type:"CLEAR_FILTER"
            })
          } }
        >
          Clear all
        </span>
      </div>
      <hr />
      <div className="filter-elements">
        <div className="filter-title"> Sort by</div>

        <label>
          <input
            type="radio"
            name="group1"
            onClick={() => {
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              });
            }}

            checked ={ sort === "lowToHigh"  }
          />
          Price(Low to High)
        </label>
        <label>
          <input
            type="radio"
            name="group1"
            onClick={() => {
              filterDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              });
            }}
            checked ={ sort === "highToLow" }

          />
          Price(High to Low)
        </label>
      </div>
      <hr />

      <div className="filter-elements">
        <div className="filter-title"> Types</div>
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              handleFilters(e, "electronics");
            }}
            checked ={ byCategory.includes("electronics") }
          />
          Electronics
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              handleFilters(e, "men's clothing");
            }}
            checked ={ byCategory.includes("men's clothing") }

          />
          Men's clothing
        </label>

        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              handleFilters(e, "women's clothing");
            }}
            checked ={ byCategory.includes("women's clothing") }
          />
          Women's clothing
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              handleFilters(e, "jewelery");
            }}
            checked ={ byCategory.includes("jewelery") }
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
