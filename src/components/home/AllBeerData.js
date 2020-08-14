import React, { useEffect, useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import SearchBar from "../component/SearchBar";
import ItemCard from "../component/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { getFavouriteBeer , getAllBeers, getBeersByName} from "../../models/AllBeers/action";

const AllBeerData = () => {
    const [value, searchBarValue] = useState("");
    const [initialRequestMade, setInitialRequestMade] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBeers());
    }, []);

    const {
        allBeersData = [],
    } = useSelector(({ AllBeers: { allBeersData } }) => ({ allBeersData }));

    const {
        favouriteBeer = []
    } = useSelector(({ AllBeers: { favouriteBeer } }) => ({ favouriteBeer }));

    const handleFavourite = (beerData) => {
        if (favouriteBeer.length === 0) {
            dispatch(getFavouriteBeer(beerData));
            return 0;
        }
        if (favouriteBeer.length > 0) {
            for (let i = 0; i < favouriteBeer.length; i++){
                let favBeerId = favouriteBeer[i].id
                if (favBeerId === beerData.id) {
                    alert("you cannot select the same beer as favourite");
                    return 0;
                }
                else {
                    dispatch(getFavouriteBeer(beerData));
                    return 0;
                }
            }
        }
    }


    const changeSearchValue=(value)=>{
        searchBarValue(value)
    }


    const initiateSearch = (value) => {
        if (value.length !== 0) {
            dispatch(getBeersByName(value));
            setInitialRequestMade(true)
        } 
        else {
            setInitialRequestMade(false)
        }
        searchBarValue("")
    }

    const classes = useStyles();
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
                                        >
                                            <ItemCard beerData={beerData} showCheckBoxButton={true} onClick={()=> handleFavourite(beerData)}  />
                                        </Grid>
                                    );
                                })}
                                    </Grid>
                        </Box>
                    </Box> :
                    <Box display={'flex'} justifyContent={'center'} className={classes.root} alignItems={'center'}>
                    <Box>
                        {
                            initialRequestMade ? "No Data Found" :  "loading...."
                        }
                        </Box>  
                    </Box>    
            }
        </Box>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100vh - 150px)',
    },
}));
export default AllBeerData;
