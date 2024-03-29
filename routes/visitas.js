// routes/visitas.js

const express = require('express');
const router = express.Router();

// Controlador para registrar visitas
const { registrarVisita } = require('../controllers/registrarVisitas');

// Ruta para manejar el registro de visitas
router.post('/visitas', registrarVisita);

module.exports = router;