import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#282c34',
                color: 'white',
                padding: '20px 0',
                marginTop: 'auto',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" component="p">
                Сделано с 💙 от [Ваше имя]
            </Typography>
            <Typography variant="body2" component="p">
                Связаться: <Link href="mailto:your-email@example.com" color="inherit">your-email@example.com</Link>
            </Typography>
            <Typography variant="body2" component="p">
                <Link href="https://github.com/your-profile" target="_blank" color="inherit">
                    GitHub
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
