
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to my Express Server');
});

// About route
app.get('/about', (req, res) => {
    res.json({
        name: 'DHONI ABHIRAM REDDY',
        section: 'CSE (GEN-AI) 2A'
    });
});

// Time route
app.get('/time', (req, res) => {
    res.json({
        currentTime: new Date()
    });
});

// 404 route
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
