export const FilterReducer = (filterState, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...filterState,
        sort: action.payload,
      };

    case "FILTER_BY_CATEGORY":
      return {
        ...filterState,
        byCategory: [...filterState.byCategory, action.payload],
      };

    case "UNFILTER_BY_CATEGORY":
      return {
        ...filterState,
        byCategory: [
          ...filterState.byCategory.filter(
            (existingElement) => existingElement !== action.payload
          ),
        ],
      };

    case "FILTER_BY_RATING":
      return {
        ...filterState,
        byRating: action.payload,
      };

    case "FILTER_BY_SEARCH":
      return {
        ...filterState,
        bySearch:action.payload,
      };

    case "CLEAR_FILTER":
      return {
        sort: "",
        byCategory: [],
        byRating: 0,
        bySearch:"",
      };
      
    default:
      return filterState;
  }
};
