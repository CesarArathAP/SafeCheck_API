const express = require('express');
const router = express.Router();
const { login } = require('../controllers/login');

// Rutas para la autenticación de docentes
router.post('/login', login);

module.exports = router;