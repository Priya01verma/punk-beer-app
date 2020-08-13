import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../component/ItemCard";
import { Grid, Box } from "@material-ui/core";

const FavouriteBeer = () => {
    const {
        favouriteBeer = []
    } = useSelector(({ AllBeers: { favouriteBeer } }) => ({ favouriteBeer }));
    return (
        <>
            {favouriteBeer.length !== 0 ? (
                <Box p={4}>
                    <h1>Favourite Beer</h1>
                    <Box pt={3}>
                    <Grid container spacing={2}>
                        {favouriteBeer.map((beerData, index) => {
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
                                    <ItemCard beerData={beerData} showCheckBoxButton={false} />
                                </Grid>
                            );
                        })}
                    </Grid>
                    </Box>    
                    </Box>
            ) : (
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    style={{ height: "80vh" }}
                >
                    <Box>Kindly Add your favourite Beer brands</Box>
                </Box>
            )}
        </>
    );
};
export default FavouriteBeer;
