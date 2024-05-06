const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Basic route for homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Simulated database of users
const users = [
    {username: "user00", password: "password", email: "user00@example.com", rut: "12345678-9"}
];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Find user in the array
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send(`Username: ${username} logged in successfully`);
    } else {
        res.status(401).send('Authentication failed');
    }
});

// Server setup
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
