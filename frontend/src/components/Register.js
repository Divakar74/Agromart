import React, { useState } from 'react';
import axios from 'axios';  // Import Axios for HTTP requests
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid,
    Avatar,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Tabs,
    Tab,
    Checkbox,
    ListItemText,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component for Tab Panel
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Signup = () => {
    const [tabValue, setTabValue] = useState(0); // For handling tabs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobilenumber, setmobilenumber] = useState('');
    const [location, setLocation] = useState(''); // For both Farmer and Retailer
    const [shopName, setShopName] = useState('');
    const [fertilizer, setFertilizer] = useState([]);
    const [insecticide, setInsecticide] = useState([]);
    const [herbicide, setHerbicide] = useState([]);
    const [shopImage, setShopImage] = useState(null);
    const [shopImageUrl, setShopImageUrl] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        
        let imageUrl = shopImageUrl;
    
        // Upload shop image if it exists
        if (shopImage) {
            const formDataToUpload = new FormData();
            formDataToUpload.append('file', shopImage);
            formDataToUpload.append('upload_preset', 'vehicle_renting'); // Replace with your actual upload preset
    
            try {
                const uploadResponse = await axios.post(
                    'https://api.cloudinary.com/v1_1/vehiclerenting/image/upload',
                    formDataToUpload
                );
                imageUrl = uploadResponse.data.secure_url;
                setShopImageUrl(imageUrl);
            } catch (error) {
                console.error('Error uploading image to Cloudinary:', error);
                return;
            }
        }
    
        try {
            // Farmer Registration Data
            if (tabValue === 0) {
                const farmerData = {
                    username,
                    email,
                    password,
                    location,
                };
                const response = await axios.post('http://localhost:8080/api/users/register', farmerData);
                console.log('Farmer signed up successfully:', response.data);
                // Add additional logic to handle success, like redirecting or showing a success message
            } else {
                // Retailer Registration Data
                const retailerData = {
                    username,
                    email,
                    password,
                    mobilenumber,
                    shopName,
                    location,
                    fertilizer: fertilizer.length > 0 ? fertilizer : [], // Ensure it's an array
                    insecticide: insecticide.length > 0 ? insecticide : [], // Ensure it's an array
                    herbicide: herbicide.length > 0 ? herbicide : [], // Ensure it's an array
                    shopImageUrl: imageUrl,
                };
                console.log(retailerData);
                const response = await axios.post('http://localhost:8080/api/retailers/register', retailerData);
                console.log('Retailer signed up successfully:', response.data);
                // Add additional logic to handle success, like redirecting or showing a success message
            }
        } catch (error) {
            console.error('Error signing up:', error);
            // Add logic to handle the error, like showing an error message
        }
    };
        
    const handleShopImageChange = (event) => {
        const file = event.target.files[0];
        setShopImage(file);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                {/* Tabs for switching between Farmer and Retailer */}
                <Box sx={{ width: '100%' }}>
                    <Tabs value={tabValue} onChange={handleTabChange} centered>
                        <Tab label="Farmer Registration" />
                        <Tab label="Retailer Registration" />
                    </Tabs>
                </Box>
                {/* Farmer Registration Form */}
                <TabPanel value={tabValue} index={0}>
                    <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="farmer-location-label">Location</InputLabel>
                            <Select
                                labelId="farmer-location-label"
                                id="farmer-location"
                                value={location}
                                label="Location"
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <MenuItem value="Chennai">Chennai</MenuItem>
                                <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                                <MenuItem value="Madurai">Madurai</MenuItem>
                                <MenuItem value="Trichy">Trichy</MenuItem>
                                <MenuItem value="Salem">Salem</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signin" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>

                {/* Retailer Registration Form */}
                <TabPanel value={tabValue} index={1}>
                    <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="mobile number"
                            label="mobile number"
                            type="mobile number"
                            id="number"
                            // autoComplete="current-password"
                            value={mobilenumber}
                            onChange={(e) => setmobilenumber(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="shopName"
                            label="Shop Name"
                            name="shopName"
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="retailer-location-label">Location</InputLabel>
                            <Select
                                labelId="retailer-location-label"
                                id="retailer-location"
                                value={location}
                                label="Location"
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <MenuItem value="Chennai">Chennai</MenuItem>
                                <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                                <MenuItem value="Madurai">Madurai</MenuItem>
                                <MenuItem value="Trichy">Trichy</MenuItem>
                                <MenuItem value="Salem">Salem</MenuItem>
                            </Select>
                        </FormControl>
                        {/* Checkbox Inputs for products */}
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="fertilizer-label">Fertilizer</InputLabel>
                            <Select
                                labelId="fertilizer-label"
                                id="fertilizer"
                                multiple
                                value={fertilizer}
                                onChange={(e) => setFertilizer(e.target.value)}
                                renderValue={(selected) => selected.join(', ')}
                            >
                             <MenuItem value="UREA (Granular)">
            <Checkbox checked={fertilizer.includes("UREA (Granular)")} />
            <ListItemText primary="UREA (Granular)" />
        </MenuItem>
        <MenuItem value="AMMONIUM SULPHATE">
            <Checkbox checked={fertilizer.includes("AMMONIUM SULPHATE")} />
            <ListItemText primary="AMMONIUM SULPHATE" />
        </MenuItem>
        <MenuItem value="CALCIUM AMMONIUM NITRATE (CAN)">
            <Checkbox checked={fertilizer.includes("CALCIUM AMMONIUM NITRATE (CAN)")} />
            <ListItemText primary="CALCIUM AMMONIUM NITRATE (CAN)" />
        </MenuItem>
        <MenuItem value="SINGLE SUPERPHOSPHATE (SSP) (Powdered)">
            <Checkbox checked={fertilizer.includes("SINGLE SUPERPHOSPHATE (SSP) (Powdered)")} />
            <ListItemText primary="SINGLE SUPERPHOSPHATE (SSP) (Powdered)" />
        </MenuItem>
        <MenuItem value="SINGLE SUPERPHOSPHATE (SSP) (Granular)">
            <Checkbox checked={fertilizer.includes("SINGLE SUPERPHOSPHATE (SSP) (Granular)")} />
            <ListItemText primary="SINGLE SUPERPHOSPHATE (SSP) (Granular)" />
        </MenuItem>
        <MenuItem value="TRIPLE SUPERPHOSPHATE (TSP)">
            <Checkbox checked={fertilizer.includes("TRIPLE SUPERPHOSPHATE (TSP)")} />
            <ListItemText primary="TRIPLE SUPERPHOSPHATE (TSP)" />
        </MenuItem>
        <MenuItem value="POTASSIUM CHLORIDE/MURIATE OF POTASH (MOP) (Crystalline powder)">
            <Checkbox checked={fertilizer.includes("POTASSIUM CHLORIDE/MURIATE OF POTASH (MOP) (Crystalline powder)")} />
            <ListItemText primary="POTASSIUM CHLORIDE/MURIATE OF POTASH (MOP) (Crystalline powder)" />
        </MenuItem>
        <MenuItem value="POTASSIUM CHLORIDE/MURIATE OF POTASH (MOP) (Granular)">
            <Checkbox checked={fertilizer.includes("POTASSIUM CHLORIDE/MURIATE OF POTASH (MOP) (Granular)")} />
            <ListItemText primary="POTASSIUM CHLORIDE/MURIATE OF POTASH (MOP) (Granular)" />
        </MenuItem>
        <MenuItem value="POTASSIUM SULPHATE/SULPHATE OF POTASH (SOP)">
            <Checkbox checked={fertilizer.includes("POTASSIUM SULPHATE/SULPHATE OF POTASH (SOP)")} />
            <ListItemText primary="POTASSIUM SULPHATE/SULPHATE OF POTASH (SOP)" />
        </MenuItem>
        <MenuItem value="DIAMMONIUM PHOSPHATE (DAP)">
            <Checkbox checked={fertilizer.includes("DIAMMONIUM PHOSPHATE (DAP)")} />
            <ListItemText primary="DIAMMONIUM PHOSPHATE (DAP)" />
        </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="insecticide-label">Insecticide</InputLabel>
                            <Select
                                labelId="insecticide-label"
                                id="insecticide"
                                multiple
                                value={insecticide}
                                onChange={(e) => setInsecticide(e.target.value)}
                                renderValue={(selected) => selected.join(', ')}
                            >
                               <MenuItem value="Acephate/Asatof/Starthene">
            <Checkbox checked={insecticide.includes("Acephate/Asatof/Starthene")} />
            <ListItemText primary="Acephate/Asatof/Starthene" />
        </MenuItem>
        <MenuItem value="Actara">
            <Checkbox checked={insecticide.includes("Actara")} />
            <ListItemText primary="Actara" />
        </MenuItem>
        <MenuItem value="Admire">
            <Checkbox checked={insecticide.includes("Admire")} />
            <ListItemText primary="Admire" />
        </MenuItem>
        <MenuItem value="Avaunt">
            <Checkbox checked={insecticide.includes("Avaunt")} />
            <ListItemText primary="Avaunt" />
        </MenuItem>
        <MenuItem value="Confidor">
            <Checkbox checked={insecticide.includes("Confidor")} />
            <ListItemText primary="Confidor" />
        </MenuItem>
        <MenuItem value="Corogen">
            <Checkbox checked={insecticide.includes("Corogen")} />
            <ListItemText primary="Corogen" />
        </MenuItem>
        <MenuItem value="Curacron">
            <Checkbox checked={insecticide.includes("Curacron")} />
            <ListItemText primary="Curacron" />
        </MenuItem>
        <MenuItem value="Cymbush">
            <Checkbox checked={insecticide.includes("Cymbush")} />
            <ListItemText primary="Cymbush" />
        </MenuItem>
        <MenuItem value="Decis">
            <Checkbox checked={insecticide.includes("Decis")} />
            <ListItemText primary="Decis" />
        </MenuItem>
        <MenuItem value="Dursban">
            <Checkbox checked={insecticide.includes("Dursban")} />
            <ListItemText primary="Dursban" />
        </MenuItem>
        <MenuItem value="Ekalux">
            <Checkbox checked={insecticide.includes("Ekalux")} />
            <ListItemText primary="Ekalux" />
        </MenuItem>
        <MenuItem value="Fame">
            <Checkbox checked={insecticide.includes("Fame")} />
            <ListItemText primary="Fame" />
        </MenuItem>
        <MenuItem value="Furadon/Tata Furan">
            <Checkbox checked={insecticide.includes("Furadon/Tata Furan")} />
            <ListItemText primary="Furadon/Tata Furan" />
        </MenuItem>
        <MenuItem value="Hostathian">
            <Checkbox checked={insecticide.includes("Hostathian")} />
            <ListItemText primary="Hostathian" />
        </MenuItem>
        <MenuItem value="Jump">
            <Checkbox checked={insecticide.includes("Jump")} />
            <ListItemText primary="Jump" />
        </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="herbicide-label">Herbicide</InputLabel>
                            <Select
                                labelId="herbicide-label"
                                id="herbicide"
                                multiple
                                value={herbicide}
                                onChange={(e) => setHerbicide(e.target.value)}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                <MenuItem value="Glyphosate">
            <Checkbox checked={herbicide.includes("Glyphosate")} />
            <ListItemText primary="Glyphosate" />
        </MenuItem>
        <MenuItem value="Atrazine">
            <Checkbox checked={herbicide.includes("Atrazine")} />
            <ListItemText primary="Atrazine" />
        </MenuItem>
        <MenuItem value="Dicamba">
            <Checkbox checked={herbicide.includes("Dicamba")} />
            <ListItemText primary="Dicamba" />
        </MenuItem>
        <MenuItem value="Imazapyr">
            <Checkbox checked={herbicide.includes("Imazapyr")} />
            <ListItemText primary="Imazapyr" />
        </MenuItem>
        <MenuItem value="Metolachlor">
            <Checkbox checked={herbicide.includes("Metolachlor")} />
            <ListItemText primary="Metolachlor" />
        </MenuItem>
        <MenuItem value="Pendimethalin">
            <Checkbox checked={herbicide.includes("Pendimethalin")} />
            <ListItemText primary="Pendimethalin" />
        </MenuItem>
        <MenuItem value="S-Metolachlor">
            <Checkbox checked={herbicide.includes("S-Metolachlor")} />
            <ListItemText primary="S-Metolachlor" />
        </MenuItem>
        <MenuItem value="Paraquat">
            <Checkbox checked={herbicide.includes("Paraquat")} />
            <ListItemText primary="Paraquat" />
        </MenuItem>
        <MenuItem value="Trifluralin">
            <Checkbox checked={herbicide.includes("Trifluralin")} />
            <ListItemText primary="Trifluralin" />
        </MenuItem>
        <MenuItem value="Clomazone">
            <Checkbox checked={herbicide.includes("Clomazone")} />
            <ListItemText primary="Clomazone" />
        </MenuItem>
        <MenuItem value="Diuron">
            <Checkbox checked={herbicide.includes("Diuron")} />
            <ListItemText primary="Diuron" />
        </MenuItem>
                            </Select>
                        </FormControl>

                        {/* Image Upload Field */}
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ mt: 2 }}
                        >
                            Upload Shop Image
                            <input
                                type="file"
                                hidden
                                onChange={handleShopImageChange}
                                accept="image/*"
                            />
                        </Button>
                        {shopImage && <Typography variant="body2">{shopImage.name}</Typography>}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signin" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
            </Box>
        </Container>
    );
};

export default Signup;
