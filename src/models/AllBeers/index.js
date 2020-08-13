import { GET_ALL_BEERS } from "./action";

const AllBeers = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_BEERS:
          return {...state, allBeersData: action.allBeers}
            default: return state;
    }
};
export default AllBeers;
