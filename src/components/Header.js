import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/todo">TODO</Button>
                <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
