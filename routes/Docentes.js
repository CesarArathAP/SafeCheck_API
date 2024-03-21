// routes/docentes.js

const express = require('express');
const router = express.Router();
const { obtenerDocentes } = require('../controllers/docentes');

// Ruta para obtener todos los docentes en formato JSON
router.get('/', obtenerDocentes);

module.exports = router;