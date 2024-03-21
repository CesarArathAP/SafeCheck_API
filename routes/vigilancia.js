// routes/vigilancia.js

const express = require('express');
const router = express.Router();
const { listarVigilantes } = require('../controllers/vigilancia');

// Ruta para obtener todos los vigilantes en formato JSON
router.get('/', listarVigilantes);

module.exports = router;