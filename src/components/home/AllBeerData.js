import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import SearchBar from "../component/SearchBar";
import ItemCard from "../component/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllBeers } from "../../models/AllBeers/action";

const AllBeerData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBeers());
    }, []);
    const {
        allBeersData = [],
        // eslint-disable-next-line
    } = useSelector(({ AllBeers: { allBeersData } }) => ({ allBeersData }));
    return (
        <Box p={4}>
            <SearchBar />
            <Box pt={3}>
                <Grid container spacing={2}>
                    {allBeersData.map((beerData, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xl={4}
                                lg={4}
                                md={6}
                                sm={12}
                                xs={12}
                            >
                                <ItemCard beerData={beerData} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};
export default AllBeerData;
