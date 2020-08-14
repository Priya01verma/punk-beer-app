import { combineReducers } from "redux";
import AllBeers from '../models/AllBeers';
import Auth from "../models/Auth";
import {firebaseReducer} from "react-redux-firebase";
//import {firestoreReducer} from "redux-firestore";

const RootReducer = combineReducers({
    AllBeers,
    Auth,
    firebase: firebaseReducer,
    //firestore: firestoreReducer
});

export default RootReducer;