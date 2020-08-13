import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import SearchBar from "../component/SearchBar";
import ItemCard from "../component/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { getFavouriteBeer , getAllBeers, getBeersByName} from "../../models/AllBeers/action";

const AllBeerData = () => {
    const [value, searchBarValue] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBeers());
    }, []);

    const {
        allBeersData = [],
    } = useSelector(({ AllBeers: { allBeersData } }) => ({ allBeersData }));


    const handleFavourite = (beerData) => {
        dispatch(getFavouriteBeer(beerData));
    }

    const changeSearchValue=(value)=>{
        searchBarValue(value)
    }
    const initiateSearch = () => {
        console.log("initiate search");
    }
    useEffect(() => {
        dispatch(getBeersByName());
    }, []);
    console.log(value);
    return (
        <Box p={4}>
            {
                allBeersData.length !== 0 ? 
                <Box pt={2}>    
                <SearchBar value={value} onChange = {changeSearchValue} onSubmit={initiateSearch} />
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
                                            onClick={()=> handleFavourite(beerData)}
                                        >
                                            <ItemCard beerData={beerData} showCheckBoxButton={true}  />
                                        </Grid>
                                    );
                                })}
                                    </Grid>
                        </Box>
                    </Box> :
                    <Box>
                            loading....
                    </Box>    
            }
        </Box>
    );
};
export default AllBeerData;
