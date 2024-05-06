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
    {username: "user00", password: "password", email: "user00@example.com", rut: "12345678-9"},{username: "user00s", password: "passwords", email: "user00@example.co", rut: "12345678-7"}
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
ArrayObjectclient=[{rut: "12345678-9", nombre: "Juan Perez", direccion: "Calle 123", telefono: "12345678", email: "hola@usm.cl"}]
app.post('/api/cliente', (req, res) => {
    const { rut, nombre, direccion, telefono, email } = req.body;
    ArrayObjectclient.push({rut: rut, nombre: nombre, direccion: direccion, telefono: telefono, email: email})
    res.send(`Cliente ${nombre} creado con exito`);
});
app.get('/api/cliente', (req, res) => {
    res.send(ArrayObjectclient);
}
);
app.get('/api/cliente/:rut', (req, res) => {
    const rut = req.params.rut;
    const cliente = ArrayObjectclient.find(c => c.rut === rut);
    if (cliente) {
        res.send(cliente);
    } else {
        res.status(404).send('Cliente no encontrado');
    }
}
);

app.put('/api/cliente/:rut_sel', (req, res) => {
    const rut_sel = req.params.rut_sel;
    const { rut, nombre, direccion, telefono, email } = req.body;
    for (let i = 0; i < ArrayObjectclient.length; i++) {
        if (ArrayObjectclient[i].rut === rut_sel) {
            ArrayObjectclient[i] = {rut: rut, nombre: nombre, direccion: direccion, telefono: telefono, email: email};
            res.send(`Cliente ${nombre} actualizado con exito`);
            return;
        }
    }
    res.status(404).send('Cliente no encontrado');
}
    
);

app.delete('/api/cliente/:rut_sel', (req, res) => {
    const rut = req.params.rut_sel;
    for (let i = 0; i < ArrayObjectclient.length; i++) {
        if (ArrayObjectclient[i].rut === rut_sel) {
            ArrayObjectclient.splice(i, 1);
            res.send(`Cliente ${rut} eliminado con exito`);
            return;
        }
    }
    res.status(404).send('Cliente no encontrado');
}
);

// Server setup
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
