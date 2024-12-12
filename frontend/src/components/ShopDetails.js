import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

const ShopDetails = () => {
    // State to hold the array of shop details
    const [shopDetails, setShopDetails] = useState([]); // Initialize as an empty array

    // Fetch shop details from the backend
    useEffect(() => {
        axios.get('http://localhost:8080/api/retailers/all')  // Replace with your actual API endpoint
            .then(response => {
                if (response.data) {
                    setShopDetails(response.data);  // Set the entire response data as shop details
                } else {
                    console.error('No shop details found');
                }
            })
            .catch(error => {
                console.error('Error fetching shop details:', error);
            });
    }, []);

    // If no shop details are available, display a loading message
    if (shopDetails.length === 0) {
        return <Typography variant="h6">Loading shop details...</Typography>;
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={3}>
                {shopDetails.map((shop, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={shop.shopImageUrl || 'default-image.jpg'} // Provide a default image URL
                                alt={shop.shopName || 'Shop Image'}
                                sx={{ width: '100%', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {shop.shopName || 'Shop Name'}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Owner: {shop.username || 'N/A'}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Email: {shop.email || 'N/A'}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Mobile: {shop.mobilenumber || 'N/A'}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Location: {shop.location || 'N/A'}
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6">Fertilizers:</Typography>
                                    <List>
                                        {shop.fertilizer.length > 0 ? (
                                            shop.fertilizer.map((item, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Typography variant="body2" color="textSecondary">No fertilizers available.</Typography>
                                        )}
                                    </List>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6">Insecticides:</Typography>
                                    <List>
                                        {shop.insecticide.length > 0 ? (
                                            shop.insecticide.map((item, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Typography variant="body2" color="textSecondary">No insecticides available.</Typography>
                                        )}
                                    </List>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6">Herbicides:</Typography>
                                    <List>
                                        {shop.herbicide.length > 0 ? (
                                            shop.herbicide.map((item, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Typography variant="body2" color="textSecondary">No herbicides available.</Typography>
                                        )}
                                    </List>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ShopDetails;
