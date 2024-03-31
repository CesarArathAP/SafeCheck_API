// routes/get_alumnos_test.js

const express = require('express');
const router = express.Router();
const { getAlumnosTest } = require('../controllers/get_alumnos_test');

router.get('/', getAlumnosTest);

module.exports = router;