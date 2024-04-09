// routes/arduino_mq3.js

const express = require('express');
const router = express.Router();
const arduinoMQ3Controller = require('../controllers/arduino_mq3');

// Ruta para iniciar la comunicación con el sensor MQ3
router.get('/iniciar-comunicacion', (req, res) => {
  arduinoMQ3Controller.iniciarComunicacionPuertoSerie(); // Llama a la función del controlador para iniciar la comunicación
  res.send('Comunicación con el sensor MQ3 iniciada correctamente');
});

module.exports = router;