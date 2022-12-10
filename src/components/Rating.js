import React, { useContext } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { CartContext } from "../context/Context";

const Rating = ({ rating }) => {

 const{ filterDispatch}  = useContext(CartContext)
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key ={i} onClick={() => filterDispatch({
          type:"SORT_BY_RATING",
          payload:(i + 1)
        })
        
        }>
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
