// routes/docentes.js
const express = require('express');
const router = express.Router();
const { obtenerDocentes } = require('../controllers/docentes'); // Importar el controlador para obtener los docentes
const { login } = require('../controllers/login'); // Importar el controlador para el inicio de sesión de los docentes

// Ruta para obtener todos los docentes en formato JSON
router.get('/', obtenerDocentes);

// Ruta para el inicio de sesión de los docentes
router.post('/login', login);

module.exports = router;