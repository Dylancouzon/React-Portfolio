import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    image: {
        
        height: 300,
        objectFit: "cover",
        width: 445,
    },
    tile: {
        marginRight: 10,
        marginTop: 10,
    },
}));


export default function TitlebarGridList({ value }) {
    const classes = useStyles();
    return (
        <GridListTile key={value.img} className={classes.tile}>
            <img src={value.img} alt={value.title} className={classes.image} />
            <GridListTileBar
                title={value.title}
                subtitle={<span>{value.date}</span>}
                actionIcon={
                    <IconButton aria-label={value.title} className={classes.icon} target="_blank" href={value.link}>
                        <GitHubIcon />
                    </IconButton>
                }
            />
        </GridListTile>
    );
}