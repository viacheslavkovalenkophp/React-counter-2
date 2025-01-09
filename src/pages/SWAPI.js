import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';

const SWAPI = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('people'); // Начинаем с людей

    // Функция для получения данных с API
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/${category}/`);
            setData(response.data.results);
        } catch (error) {
            console.error("Error fetching data from SWAPI:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Данные из SWAPI
            </Typography>
            <Box sx={{ marginBottom: '20px' }}>
                <Button
                    variant={category === 'people' ? 'contained' : 'outlined'}
                    onClick={() => setCategory('people')}
                    sx={{ marginRight: '10px' }}
                >
                    Люди
                </Button>
                <Button
                    variant={category === 'planets' ? 'contained' : 'outlined'}
                    onClick={() => setCategory('planets')}
                >
                    Планеты
                </Button>
            </Box>

            <Grid container spacing={3}>
                {data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/150" // Тут можно поставить изображение
                                alt={item.name || item.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{item.name || item.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {category === 'people' ? `Пол: ${item.gender}` : `Диаметр: ${item.diameter}`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SWAPI;
