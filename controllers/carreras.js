// controllers/carreras.js

const Carrera = require('../models/Carreras');

// Función para obtener todas las carreras y los alumnos
const obtenerCarrerasYAlumnos = async (req, res, next) => {
  try {
    const carreras = await Carrera.find(); // Obtener todas las carreras
    res.json(carreras);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  obtenerCarrerasYAlumnos
};