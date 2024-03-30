const express = require('express');
const router = express.Router();
const { obtenerVisitas } = require('../controllers/obtener_visitas');

router.get('/', obtenerVisitas);

module.exports = router;
