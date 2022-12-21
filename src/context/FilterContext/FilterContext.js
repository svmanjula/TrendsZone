import { createContext, useReducer } from "react";
import { FilterReducer } from "./FilterReducer";

export const FilterContext = createContext("");

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(FilterReducer, {
    sort: " ",
    byCategory: [],
    byRating: 0,
    bySearch:" ",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
