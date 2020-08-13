import { GET_ALL_BEERS, FAVOURITE_BEER } from "./action";

const initialState ={
    allBeersData :[],
    byIds: {},
    favouriteBeer:[]
}

const AllBeers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BEERS:
            return {
                ...state,
                allBeersData: action.allBeers,
            }
        case FAVOURITE_BEER:
            console.log(action)
            return {
                ...state,
                favouriteBeer : [...state.favouriteBeer, action.favouriteBeer]
            }
        default: return state;
    }
};
export default AllBeers;
