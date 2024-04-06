const CarrerasModel = require('../models/CarrerasModel');

const buscarAlumnoPorMatricula = async (req, res) => {
  const matricula = req.params.matricula;
  try {
    const carrera = await CarrerasModel.findOne({ "especialidades.alumnos.matricula": matricula }, { "especialidades.alumnos.$": 1 });
    if (!carrera) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }
    const alumno = carrera.especialidades[0].alumnos[0];
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { buscarAlumnoPorMatricula };