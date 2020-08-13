import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import { toggleFavourites } from "../../models/AllBeers/action";
import { useDispatch } from "react-redux";

const ItemCard = ({beerData}) => {
    const classes = useStyles();
    const { id, name, image_url, description } = beerData;
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={image_url}
                title={name}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Box textAlign={'right'}>
                            <StarBorderIcon className={classes.starIcon} />
                    </Box>
                    <Typography component="h5" variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                       {description.length > 100 ? `${description.substring(0,100) }...` : description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        padding: 8
    },
    details: {
        display: "flex",
        flexDirection: "column",
        textAlign:'left'
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        width: 200,
        backgroundSize: 'contain'
    },
    starIcon: {
        cursor: 'pointer'
    }
}));
export default ItemCard;
