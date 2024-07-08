const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const secretKey = 'your_secret_key';

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Configura CORS
app.use(cors());

// Basic route for homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Simulated database of users
const users = [
    {username: "user00", password: "password", email: "user00@example.com", rut: "12345678-9"},
    {username: "user00s", password: "passwords", email: "user00@example.co", rut: "12345678-7"}
];

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Find user in the array
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = jwt.sign({ email: user.email, username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Authentication failed');
    }
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Token is required');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send('Invalid token');
    }
};

const ArrayObjectclient = [
    {rut: "12345678-9", nombre: "Juan Perez", direccion: "Calle 123", telefono: "12345678", email: "hola@usm.cl"}
];

// Rutas protegidas
app.post('/api/cliente', verifyToken, (req, res) => {
    const { rut, nombre, direccion, telefono, email } = req.body;
    ArrayObjectclient.push({rut: rut, nombre: nombre, direccion: direccion, telefono: telefono, email: email});
    res.send(`Cliente ${nombre} creado con éxito`);
});

app.get('/api/cliente', verifyToken, (req, res) => {
    res.send(ArrayObjectclient);
});

app.get('/api/cliente/:rut', verifyToken, (req, res) => {
    const rut = req.params.rut;
    const cliente = ArrayObjectclient.find(c => c.rut === rut);
    if (cliente) {
        res.send(cliente);
    } else {
        res.status(404).send('Cliente no encontrado');
    }
});

app.put('/api/cliente/:rut_sel', verifyToken, (req, res) => {
    const rut_sel = req.params.rut_sel;
    const { rut, nombre, direccion, telefono, email } = req.body;
    for (let i = 0; i < ArrayObjectclient.length; i++) {
        if (ArrayObjectclient[i].rut === rut_sel) {
            ArrayObjectclient[i] = {rut: rut, nombre: nombre, direccion: direccion, telefono: telefono, email: email};
            res.send(`Cliente ${nombre} actualizado con éxito`);
            return;
        }
    }
    res.status(404).send('Cliente no encontrado');
});

app.delete('/api/cliente/:rut_sel', verifyToken, (req, res) => {
    const rut = req.params.rut_sel;
    for (let i = 0; i < ArrayObjectclient.length; i++) {
        if (ArrayObjectclient[i].rut === rut_sel) {
            ArrayObjectclient.splice(i, 1);
            res.send(`Cliente ${rut} eliminado con éxito`);
            return;
        }
    }
    res.status(404).send('Cliente no encontrado');
});

// Server setup
app.listen(33000, () => {
    console.log('Server is running on port 33000');
});
