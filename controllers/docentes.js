// controllers/docentes.js

const Docente = require('../models/SafeCheck');

const obtenerDocentes = async (req, res) => {
  try {
    // Consultar la base de datos para obtener todos los docentes
    const docentes = await Docente.find();
    
    // Enviar la lista de docentes como respuesta en formato JSON
    res.json(docentes);
  } catch (error) {
    console.error('Error al obtener los docentes:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

module.exports = { obtenerDocentes };