// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Main'; // Make sure this path is correct
import Signup from './components/Register';
import SignIn from './components/Login';
import FertilizerCalculator from './components/FertilizerCal';
import ProductDisplay from './components/ProductDis';
import ShopDetails from './components/ShopDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/fertilizer" element={<FertilizerCalculator />} />
                <Route path="/display" element={<ProductDisplay />} />
                <Route path="/shop" element={<ShopDetails />} />
            </Routes>
            {/* </Routes> */}
        </Router>
    );
};

export default App;
