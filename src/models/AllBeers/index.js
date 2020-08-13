import { GET_ALL_BEERS, TOGGLE_FAVOURITE } from "./action";

const initialState ={
    allBeersData :[],
    byIds: {}
}

const AllBeers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BEERS:
            return {
                ...state,
                allBeersData: action.allBeers,
            }
        case TOGGLE_FAVOURITE: {
            const { id } = action.payload;
            console.log({ checkActiondata: action })
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                       // completed: !state.byIds[id].completed,
                    },
                },
            };
        }
        default: return state;
    }
};
export default AllBeers;
