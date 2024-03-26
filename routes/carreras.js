// routes/carreras.js

const express = require('express');
const router = express.Router();
const carrerasController = require('../controllers/carreras');

// Ruta para obtener todas las carreras y los alumnos
router.get('/', carrerasController.obtenerCarrerasYAlumnos);

module.exports = router;