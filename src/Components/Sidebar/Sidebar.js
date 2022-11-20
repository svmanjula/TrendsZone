import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
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
          <input type="radio" /> Latest
        </label>
        <label>
          <input type="radio" /> Price(Low to High)
        </label>
        <label>
          <input type="radio" /> Price(High to Low)
        </label>
      </div>
      <hr />
      <div className="filter-elements">
        <div className="filter-title"> Availability and Price</div>
        <label>
          <input type="checkbox" /> In stock only
        </label>
        <label>
          Price range:0 to 5000
          <input type="range" />
        </label>
      </div>
      <hr />
      <div className="filter-elements">
        <div className="filter-title"> Types</div>
        <label>
          <input type="checkbox" />
          Wired
        </label>
        <label>
          <input type="checkbox" />
          Wireless
        </label>
        <label>
          <input type="checkbox" /> Speaker
        </label>
        <label>
          <input type="checkbox" />
          Noise Cancelling
        </label>
      </div>
      <hr />
      <div className="filter-elements">
        <div className="filter-title"> Brands</div>
        <label>
          <input type="checkbox" /> Bose
        </label>
        <label>
          <input type="checkbox" />
          Boat
        </label>
        <label>
          <input type="checkbox" /> Marshall
        </label>
        <label>
          <input type="checkbox" />
          Sony
        </label>
        <label>
          <input type="checkbox" />
          JBL
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
