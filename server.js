const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path'); // Import the 'path' module

// connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'SB_DB',
    insecureAuth: true
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Example route handling for "/clothing"
app.get('/clothing', (req, res) => {
    const clothingData = [
        { name: 'T-Shirt', size: 'Medium', description: 'Comfortable cotton T-shirt', image_url: 'https://example.com/tshirt.jpg' },
        // Add more items as needed
    ];

    // Send the data as JSON
    res.json(clothingData);
});

// Serve clothes.html
app.get('/clothes.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'clothes.html'));
});

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
