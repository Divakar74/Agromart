import React, { useState } from 'react';
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define fertilizer grades with their nutrient contents
const fertilizerGrades = {
    '0-0-50-18': { N: 0, P: 0, K: 50, S: 18 },
    '82-0-0': { N: 82, P: 0, K: 0, S: 0 },
    '46-0-0': { N: 46, P: 0, K: 0, S: 0 },
    '34-0-0': { N: 34, P: 0, K: 0, S: 0 },
    '28-0-0': { N: 28, P: 0, K: 0, S: 0 },
    '21-0-0-24': { N: 21, P: 0, K: 0, S: 24 },
    '12-52-0': { N: 12, P: 52, K: 0, S: 0 },
    '18-46-0': { N: 18, P: 46, K: 0, S: 0 },
    '10-34-0': { N: 10, P: 34, K: 0, S: 0 },
    '0-0-60': { N: 0, P: 0, K: 60, S: 0 },
    '0-45-0': { N: 0, P: 45, K: 0, S: 0 },
    '12-32-16': { N: 12, P: 32, K: 16, S: 0 },
    '10-26-26': { N: 10, P: 26, K: 26, S: 0 },
};

const calculateFertilizerNeeded = (nutrientAmount, nutrientPercentage) => {
    return nutrientAmount / (nutrientPercentage / 100);
};

// Create a custom theme with Poppins font
const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                },
            },
        },
    },
});

const Results = ({ results }) => {
    return (
        <Box sx={{ mt: 4 }}>
            {results.map((result, index) => (
                <Typography key={index} variant="body1">
                    {result}
                </Typography>
            ))}
        </Box>
    );
};

const FertilizerCalculator = () => {
    const [nutrientType, setNutrientType] = useState('N');
    const [nutrientAmount, setNutrientAmount] = useState(0);
    const [recommendedFertilizer, setRecommendedFertilizer] = useState('');
    const [selectedGrades, setSelectedGrades] = useState([]);
    const [customGrade, setCustomGrade] = useState('');
    const [customNitrogen, setCustomNitrogen] = useState(0);
    const [customPhosphorus, setCustomPhosphorus] = useState(0);
    const [customPotassium, setCustomPotassium] = useState(0);
    const [customSulfur, setCustomSulfur] = useState(0);
    const [customGrades, setCustomGrades] = useState({});
    const [results, setResults] = useState([]);

    const handleCalculate = () => {
        const newResults = [];
        const recommendedFertilizerData = fertilizerGrades[recommendedFertilizer];
        if (recommendedFertilizerData) {
            const nutrientPercentage = recommendedFertilizerData[nutrientType];
            const fertilizerNeeded = calculateFertilizerNeeded(nutrientAmount, nutrientPercentage);
            newResults.push(`Amount of ${recommendedFertilizer} needed: ${fertilizerNeeded.toFixed(2)} kg1`);
        }

        selectedGrades.forEach((grade) => {
            const gradeData = fertilizerGrades[grade];
            const nutrientPercentage = gradeData[nutrientType];
            if (nutrientPercentage > 0) {
                const fertilizerNeeded = calculateFertilizerNeeded(nutrientAmount, nutrientPercentage);
                newResults.push(`For ${grade}, you need ${fertilizerNeeded.toFixed(2)} kg to provide ${nutrientAmount} kg of ${nutrientType}`);
            }
        });

        setResults(newResults);
    };

    const handleAddCustomGrade = () => {
        if (customGrade) {
            setCustomGrades(prev => ({
                ...prev,
                [customGrade]: {
                    N: customNitrogen,
                    P: customPhosphorus,
                    K: customPotassium,
                    S: customSulfur
                }
            }));
            setCustomGrade('');
            setCustomNitrogen(0);
            setCustomPhosphorus(0);
            setCustomPotassium(0);
            setCustomSulfur(0);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ py: 5 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Fertilizer Calculator
                </Typography>

                {/* Step 1: Input Fertilizer Requirements */}
                <Typography variant="h6" component="h2" gutterBottom>
                    Input Fertilizer Requirements
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="nutrient-select-label">Select Nutrient Type</InputLabel>
                    <Select
                        labelId="nutrient-select-label"
                        value={nutrientType}
                        onChange={(e) => setNutrientType(e.target.value)}
                        label="Select Nutrient Type"
                    >
                        <MenuItem value="N">Nitrogen (N)</MenuItem>
                        <MenuItem value="P">Phosphorous (P)</MenuItem>
                        <MenuItem value="K">Potassium (K)</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Enter the total amount of nutrient required (kg)"
                    type="number"
                    value={nutrientAmount}
                    onChange={(e) => setNutrientAmount(parseFloat(e.target.value))}
                    fullWidth
                />
                <TextField
                    label="Enter the recommended fertilizer grade (N-P2O5-K2O-S format)"
                    value={recommendedFertilizer}
                    onChange={(e) => setRecommendedFertilizer(e.target.value)}
                    fullWidth
                />

                {/* Step 2: Select Available Grades */}
                <Typography variant="h6" component="h2" gutterBottom>
                    Select Available Fertilizer Grades
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="grades-select-label">Select Fertilizer Grades</InputLabel>
                    <Select
                        labelId="grades-select-label"
                        multiple
                        value={selectedGrades}
                        onChange={(e) => setSelectedGrades(e.target.value)}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {Object.keys(fertilizerGrades).map((grade) => (
                            <MenuItem key={grade} value={grade}>
                                {grade}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCalculate}
                >
                    Calculate
                </Button>
                {/* Add Custom Fertilizer Grades */}
                <Typography variant="h6" component="h2" gutterBottom>
                    Add Custom Fertilizer Grades
                </Typography>
                <TextField
                    label="Custom Grade (N-P2O5-K2O-S format)"
                    value={customGrade}
                    onChange={(e) => setCustomGrade(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Nitrogen (%)"
                    type="number"
                    value={customNitrogen}
                    onChange={(e) => setCustomNitrogen(parseFloat(e.target.value))}
                    fullWidth
                />
                <TextField
                    label="Phosphorous (%)"
                    type="number"
                    value={customPhosphorus}
                    onChange={(e) => setCustomPhosphorus(parseFloat(e.target.value))}
                    fullWidth
                />
                <TextField
                    label="Potassium (%)"
                    type="number"
                    value={customPotassium}
                    onChange={(e) => setCustomPotassium(parseFloat(e.target.value))}
                    fullWidth
                />
                <TextField
                    label="Sulfur (%)"
                    type="number"
                    value={customSulfur}
                    onChange={(e) => setCustomSulfur(parseFloat(e.target.value))}
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddCustomGrade}
                >
                    Add Custom Grade
                </Button>

                {/* Display Results */}
                <Results results={results} />
            </Container>
        </ThemeProvider>
    );
};

export default FertilizerCalculator;