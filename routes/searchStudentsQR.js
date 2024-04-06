const express = require('express');
const router = express.Router();
const searchStudentsController = require('../controllers/searchStudentsQR');

router.get('/alumnos/:matricula', searchStudentsController.buscarAlumnoPorMatricula);

module.exports = router;