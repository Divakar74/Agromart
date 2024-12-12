import React, { useState } from 'react';
import { Container, Grid,Grid2, Typography, Button, AppBar, Toolbar, Box, Menu, MenuItem, IconButton, Modal, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { LocalFlorist as FertilizerIcon, BugReport as PestsIcon, LocalLibrary as CultivationIcon, Notifications as AlertIcon, MoreVert as MoreIcon } from '@mui/icons-material';

const products = [
    {
        name: "SuperStar",
        details: "High efficiency nitrogen fertilizer.",
        benefits: "Promotes rapid growth and higher yield.",
        crop: "Suitable for all types of crops.",
        diseases: "Helps prevent nitrogen deficiency-related diseases.",
        dosage: "Apply 10 kg per hectare.",
        timeOfApplication: "Before sowing and during the growing season."
    },
    {
        name: "Fine 5sc",
        details: "Systemic fungicide.",
        benefits: "Controls a broad spectrum of fungal diseases.",
        crop: "Used in cereals, pulses, and vegetables.",
        diseases: "Controls leaf spot, rust, and mildew.",
        dosage: "Apply 0.5 liters per hectare.",
        timeOfApplication: "At the onset of disease symptoms."
    },
    {
        name: "Arm",
        details: "Broad-spectrum insecticide.",
        benefits: "Effective against a wide range of pests.",
        crop: "Applicable to vegetables, fruits, and crops.",
        diseases: "Controls aphids, whiteflies, and mites.",
        dosage: "Apply 1 liter per hectare.",
        timeOfApplication: "Apply when pests are first noticed."
    },
    {
        name: "Agrinex Liq",
        details: "Liquid bio-stimulant.",
        benefits: "Enhances plant growth and resistance.",
        crop: "Suitable for all crops.",
        diseases: "Improves plant resistance to stress-related diseases.",
        dosage: "Apply 2 liters per hectare.",
        timeOfApplication: "During the growing season."
    },
    {
        name: "Amino Ag 30",
        details: "Amino acid-based fertilizer.",
        benefits: "Improves nutrient uptake and stress tolerance.",
        crop: "Used in fruits, vegetables, and grains.",
        diseases: "Reduces susceptibility to environmental stresses.",
        dosage: "Apply 1 liter per hectare.",
        timeOfApplication: "Before flowering and during stress periods."
    },
    {
        name: "Klip 5",
        details: "Herbicide for weed control.",
        benefits: "Effective in controlling a variety of weeds.",
        crop: "Applicable to major cereal crops.",
        diseases: "Prevents weed-induced crop stress.",
        dosage: "Apply 0.75 liters per hectare.",
        timeOfApplication: "Early post-emergence of crops."
    }
    // Add other products similarly
];

const HomePage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = useState(false);

    const openMenu = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div>
            {/* Header */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Disease Prediction App
                    </Typography>
                    <Button color="inherit" component={Link} to="/signin">Login</Button>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    <IconButton 
                        edge="end" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={handleMenuClick}
                        sx={{ ml: 2 }}
                    >
                        <MoreIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Give Feedback</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Recommended Plantix</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Contact & Social</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Thanks</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Legal Notices</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Quickstart</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    height: '70vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: 3,
                }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                    Heal Your Crop
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Upload images of your plants, and our app will instantly detect any diseases.
                </Typography>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    component={Link} 
                    to="/take-picture" 
                    sx={{ mt: 2, bgcolor: '#e18a0f', ':hover': { bgcolor: '#c1700a' } }}
                >
                    Take a Picture
                </Button>
                <Button variant="contained" color="secondary" component={Link} to='/shop' sx={{ mt: 2 }}>
                    Get Started
                </Button>
            </Box>
            <Container sx={{ py: 5 }}>
                <Grid2 container spacing={4} justifyContent="center">
                    <Grid2 item xs={12} sm={6} md={3}>
                        <Box sx={{ p: 3, borderRadius: '8px', boxShadow: 2 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth
                                sx={{ 
                                    bgcolor: '#1976d2', 
                                    ':hover': { bgcolor: '#115293' }, 
                                    fontSize: '1.2rem',
                                    py: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                                component={Link} 
                                to='/fertilizer'
                            >
                                <FertilizerIcon style={{ marginRight: 8 }} />
                                Fertilizer Calculator
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={3}>
                        <Box sx={{ p: 3, borderRadius: '8px', boxShadow: 2 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth
                                sx={{ 
                                    bgcolor: '#1976d2', 
                                    ':hover': { bgcolor: '#115293' }, 
                                    fontSize: '1.2rem',
                                    py: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                                component={Link} 
                                to="/pests-diseases"
                            >
                                <PestsIcon style={{ marginRight: 8 }} />
                                Pests & Diseases
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={3}>
                        <Box sx={{ p: 3, borderRadius: '8px', boxShadow: 2 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth
                                sx={{ 
                                    bgcolor: '#1976d2', 
                                    ':hover': { bgcolor: '#115293' }, 
                                    fontSize: '1.2rem',
                                    py: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                                component={Link} 
                                to="/cultivation-tips"
                            >
                                <CultivationIcon style={{ marginRight: 8 }} />
                                Cultivation Tips
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={3}>
                        <Box sx={{ p: 3, borderRadius: '8px', boxShadow: 2 }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth
                                sx={{ 
                                    bgcolor: '#1976d2', 
                                    ':hover': { bgcolor: '#115293' }, 
                                    fontSize: '1.2rem',
                                    py: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                                component={Link} 
                                to="/pests-disease-alert"
                            >
                                <AlertIcon style={{ marginRight: 8 }} />
                                Pests & Disease Alert
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>

            {/* Trending Products Section */}
            <Container sx={{ py: 5 }}>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Trending Products
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', cursor: 'pointer' }} onClick={() => handleProductClick(product)}>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {product.name}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Box textAlign="center" sx={{ mt: 4 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        component={Link} 
                        to='/display'
                    >
                        Explore More
                    </Button>
                </Box>
            </Container>

            {/* Features Section */}
            <Container sx={{ py: 5 }}>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Our Features
                </Typography>
                <Grid container spacing={3} direction="column" alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', p: 3, borderRadius: '8px', boxShadow: 2 }}>
                            <Typography variant="h6" component="h3" gutterBottom>
                                Real-Time Disease Detection
                            </Typography>
                            <Typography>
                                Upload images of your plants, and our app will instantly detect any diseases.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', p: 3, borderRadius: '8px', boxShadow: 2 }}>
                            <Typography variant="h6" component="h3" gutterBottom>
                                Expert Recommendations
                            </Typography>
                            <Typography>
                                Get expert recommendations and tips on how to treat and prevent plant diseases.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', p: 3, borderRadius: '8px', boxShadow: 2 }}>
                            <Typography variant="h6" component="h3" gutterBottom>
                                Disease Database
                            </Typography>
                            <Typography>
                                Access a comprehensive database of plant diseases and their symptoms.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Footer */}
            <Box sx={{ backgroundColor: '#f5f5f5', py: 3, mt: 5 }}>
                <Container>
                    <Typography variant="body1" align="center">
                        &copy; 2024 Disease Prediction App. All Rights Reserved.
                    </Typography>
                </Container>
            </Box>

            {/* Product Details Modal */}
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="product-details-title"
                aria-describedby="product-details-description"
            >
                <Box sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    width: 400, 
                    bgcolor: 'background.paper', 
                    boxShadow: 24, 
                    p: 4 
                }}>
                    {selectedProduct && (
                        <>
                            <Typography id="product-details-title" variant="h6" component="h2" gutterBottom>
                                {selectedProduct.name}
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                <strong>Details:</strong> {selectedProduct.details}
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                <strong>Benefits:</strong> {selectedProduct.benefits}
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                <strong>Crop:</strong> {selectedProduct.crop}
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                <strong>Diseases:</strong> {selectedProduct.diseases}
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                <strong>Dosage:</strong> {selectedProduct.dosage}
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                <strong>Time of Application:</strong> {selectedProduct.timeOfApplication}
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default HomePage;
