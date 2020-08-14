import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../models/Auth/types";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const classes = useStyles();
    const isAuthenticated = useSelector(state => state.Auth.isAuthenticated);
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Beans Love Beers
                    </Typography>
                    {isAuthenticated && (
                        <Link to={`/allBeers`} className={classes.linktextDecoration}>
                            <Button className={classes.linkTextColor}>Home</Button>
                        </Link>
                    )}   
                    <Link to={`/favourites`} className={classes.linktextDecoration}>
                        <Button className={classes.linkTextColor}>Favourites</Button>
                    </Link>
                    {isAuthenticated && (
                            <Link to="/" onClick={() => dispatch({ type: LOGOUT })} className={classes.linktextDecoration}>
                                <Button  className={classes.linkTextColor}>Logout</Button>
                            </Link>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
    },
    linkTextColor: {
        color: "#fff"
    },
    linktextDecoration: {
        textDecoration: "unset"
    }
}));
export default Header;
