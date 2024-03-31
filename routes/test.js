const express = require('express');
const router = express.Router();
const testController = require('../controllers/test_alumnos');

router.post('/', testController.enviarResultado);

module.exports = router;