// controllers/get_alumnos_test.js

const Test = require('../models/Test');

const getAlumnosTest = async (req, res) => {
  try {
    const alumnos = await Test.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAlumnosTest };