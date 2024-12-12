import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductDisplay = () => {
    const [seeds, setSeeds] = useState([]);
    const [fertilizers, setFertilizers] = useState([]);
    const [pesticides, setPesticides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch seeds
        axios.get('http://localhost:8080/api/seeds')
            .then(response => {
                setSeeds(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });

        // Fetch fertilizers
        axios.get('http://localhost:8080/api/fertilizers')
            .then(response => {
                setFertilizers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });

        // Fetch pesticides
        axios.get('http://localhost:8080/api/pesticides')
            .then(response => {
                setPesticides(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p style={styles.loading}>Loading...</p>;
    if (error) return <p style={styles.error}>Error: {error}</p>;

    return (
        <div style={styles.container}>
            {/* Display Seeds */}
            <h2 style={styles.heading}>Seeds</h2>
            <div style={styles.grid}>
                {seeds.map((seed) => (
                    <div key={seed.id} style={styles.card}>
                        <h3 style={styles.cardTitle}>{seed.name}</h3>
                        <p style={styles.cardText}>Description: {seed.description}</p>
                        <p style={styles.cardText}>Crop Type: {seed.cropType}</p>
                        <p style={styles.cardText}>Season: {seed.season}</p>
                        <p style={styles.cardText}>Dosage: {seed.dosage}</p>
                        <button style={styles.button} component={Link} to='/shop'>Contact Shops</button>
                    </div>
                ))}
            </div>

            {/* Display Fertilizers */}
            <h2 style={styles.heading}>Fertilizers</h2>
            <div style={styles.grid}>
                {fertilizers.map((fertilizer, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.cardTitle}>{fertilizer.name}</h3>
                        <p style={styles.cardText}>Description: {fertilizer.description}</p>
                        <p style={styles.cardText}>Type: {fertilizer.type}</p>
                        <p style={styles.cardText}>Composition: {fertilizer.composition}</p>
                        <p style={styles.cardText}>Dosage: {fertilizer.dosage}</p>
                        <button style={styles.button} component={Link} to='/shop'>Contact Shops</button>
                    </div>
                ))}
            </div>

            {/* Display Pesticides */}
            <h2 style={styles.heading}>Pesticides</h2>
            <div style={styles.grid}>
                {pesticides.map((pesticide) => (
                    <div key={pesticide.id} style={styles.card}>
                        <h3 style={styles.cardTitle}>{pesticide.name}</h3>
                        <p style={styles.cardText}>Description: {pesticide.description}</p>
                        <p style={styles.cardText}>Type: {pesticide.type}</p>
                        <p style={styles.cardText}>Target Pests: {pesticide.targetPests}</p>
                        <p style={styles.cardText}>Dosage: {pesticide.dosage}</p>
                        <button style={styles.button} component={Link} to='/shop'>Contact Shops</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Enhanced styles with professional look and animation
const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        animation: 'fadeIn 1s ease-in-out',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        margin: '20px 0',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontSize: '2em',
        fontWeight: 'bold',
        animation: 'slideDown 1s ease-in-out',
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '20px',
    },
    card: {
        width: '30%',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px 0',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        animation: 'slideIn 0.5s ease-out',
    },
    cardTitle: {
        fontSize: '1.4em',
        color: '#007bff',
        marginBottom: '10px',
    },
    cardText: {
        fontSize: '1em',
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '10px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        fontSize: '1em',
        fontWeight: 'bold',
        outline: 'none',
    },
    loading: {
        textAlign: 'center',
        fontSize: '1.5em',
        color: '#888',
    },
    error: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'red',
    },
    // Adding keyframe animations
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
    '@keyframes slideIn': {
        from: { transform: 'translateY(20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
    },
    '@keyframes slideDown': {
        from: { transform: 'translateY(-20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
    },
};

// Applying hover effect dynamically
const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
};

const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
};

document.querySelectorAll('div[style*="cursor: pointer"]').forEach((card) => {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
});

export default ProductDisplay;
