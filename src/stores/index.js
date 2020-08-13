import { combineReducers } from "redux";
import AllBeers from '../models/AllBeers';
import Auth from "../models/Auth";

const RootReducer = combineReducers({
    AllBeers,
    Auth
});

export default RootReducer;