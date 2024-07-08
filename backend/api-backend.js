const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clientRoutes');
require('dotenv').config(); 
const app = express();

// Conectar a MongoDB
connectDB();

// Middleware para parsear cuerpos JSON
app.use(bodyParser.json());

// Usar rutas
app.use('/', homeRoutes);
app.use('/', userRoutes);
app.use('/', clientRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 33000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
