import axios from "axios";

export const GET_ALL_BEERS = "GET_ALL_BEERS";
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const FAVOURITE_BEER = "FAVOURITE_BEER";

export const getAllBeers = () => {
    return async (dispatch) => {
        const res = await axios({
            method: "GET",
            url: "https://api.punkapi.com/v2/beers",
        }).catch((err) => {
            throw err;
        });
        dispatch({ type: GET_ALL_BEERS, allBeers: res.data });
    };
};

export function getFavouriteBeer(data) {
    return (dispatch) =>
        dispatch({
            type: FAVOURITE_BEER,
            favouriteBeer: data,
        });
}
