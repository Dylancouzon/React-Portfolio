import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Dylan Couzon
                    </Typography>
                    <IconButton aria-label="gitHub" color="inherit">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="gitHub" color="inherit">
                        <EmailIcon />
                    </IconButton>
                    <IconButton aria-label="gitHub" color="inherit">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="gitHub" color="inherit">
                        <PhoneIcon />
                    </IconButton>
                    <IconButton aria-label="gitHub" color="inherit">
                        <InfoIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
