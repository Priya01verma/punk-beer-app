import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const SearchBar = (props) => {
    const classes = useStyles();
    const [lastSearchValue, setLastSearchValue] = useState(props.value || "");
    const submit = () => {
        let {  value="", onSubmit } = props;
        // if(!value.trim() && value.trim() !== lastSearchValue.trim()){
        //     return this.reset("");
        // }
        // if (value.trim() !== lastSearchValue.trim()) {
        //     setLastSearchValue({ lastSearchValue: value.trim() },onSubmit);
        //     return 0;
        // }
    }
    let { value } = props;
    console.log({ checkValue: value });

    const onChange = (ev) => {
        let { onChange } = props;
        let value = String(ev.target.value).trimLeft();
        onChange(value);
    };
    return (
        <>
            <TextField
                variant="outlined"
                value={value}
                placeholder={"Search for beer..."}
                className={classes.root}
                 onChange={onChange}
                // onKeyDown={keyDown}
            />
            <Button variant="contained" color="primary" className={classes.searchButton} onClick={submit}>
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
