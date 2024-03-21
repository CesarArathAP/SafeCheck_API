// controllers/vigilancia.js

const Vigilancia = require('../models/Vigilancia');

const listarVigilantes = async (req, res) => {
  try {
    const vigilantes = await Vigilancia.find();
    res.json(vigilantes);
  } catch (error) {
    console.error('Error al obtener los vigilantes:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

module.exports = { listarVigilantes };