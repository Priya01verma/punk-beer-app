import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import AllBeerData from "./AllBeerData";
import FavouriteBeer from "./FavouriteBeer";

const Navigatepage = () => {
    return (
        <Fragment>
                <Switch>
                    <Route exact path ='/' component ={AllBeerData} />
                    <Route exact path="/favourites" component={FavouriteBeer} />
                </Switch>
        </Fragment>
    );
};
export default Navigatepage;
