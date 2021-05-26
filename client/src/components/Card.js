import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    image: {
        width: 445,
    },
    tile: {
        marginRight: 10,
        marginTop: 10,
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList({ value }) {
    const classes = useStyles();
    return (
        <GridListTile key={value.img} className={classes.tile}>
            <img src={value.img} alt={value.title} className={classes.image} />
            <GridListTileBar
                title={value.title}
                subtitle={<span>by: {value.author}</span>}
                actionIcon={
                    <IconButton aria-label={`info about ${value.title}`} className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                }
            />
        </GridListTile>
    );
}