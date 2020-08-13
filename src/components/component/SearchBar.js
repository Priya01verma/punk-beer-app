import React from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const SearchBar = () => {
    const classes = useStyles();
    return (
        <>
            <TextField
                variant="outlined"
                // value={value}
                placeholder={"Search for beer..."}
                className={classes.root}
            />
            <Button variant="contained" color="primary" className={classes.searchButton}>
                Search
            </Button>
        </>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        width: 'calc(100% - 150px)',
        marginRight: '12px'
    },
    searchButton: {
        padding:  "14px 20px"
    },
}));
export default SearchBar;
