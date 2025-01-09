import React from 'react';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h3" gutterBottom>
                    Привет! Я — Ваше Имя
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Я разработчик, который специализируется на веб-технологиях.
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Paper style={{ padding: '20px' }}>
                            <Typography variant="h6" gutterBottom>
                                Навыки
                            </Typography>
                            <ul>
                                <li>HTML / CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Redux</li>
                                <li>MongoDB</li>
                                <li>Git</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper style={{ padding: '20px' }}>
                            <Typography variant="h6" gutterBottom>
                                О себе
                            </Typography>
                            <Typography variant="body1">
                                Я увлечен веб-разработкой и всегда ищу новые способы решения проблем с помощью кода.
                                Я стремлюсь к постоянному развитию и учусь новыми технологиями.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
