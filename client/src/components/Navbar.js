import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';

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
                        Dylan Couzon Portfolio
                    </Typography>
                    <IconButton aria-label="Resume" color="inherit" href="/">
                        <AppsIcon />
                    </IconButton>
                    <IconButton aria-label="gitHub" color="inherit" target="_blank" href="https://github.com/Dylancouzon?tab=repositories">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="Email" color="inherit" href="mailto:dylancouzon@gmail.com">
                        <EmailIcon />
                    </IconButton>
                    <IconButton aria-label="LinkedIn" color="inherit" target="_blank" href="https://www.linkedin.com/in/dcouzon/">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="Resume" color="inherit" href="/about">
                        <InfoIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
