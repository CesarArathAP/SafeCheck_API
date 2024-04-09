const CarrerasModel = require('../models/CarrerasModel');

const buscarAlumnoPorMatricula = async (req, res) => {
  const matricula = req.params.matricula;
  try {
    const carrera = await CarrerasModel.findOne({ "especialidades.alumnos.matricula": matricula });
    if (!carrera) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }
    
    // Buscamos el alumno dentro de las especialidades
    let alumnoEncontrado = null;
    carrera.especialidades.forEach(especialidad => {
      const alumno = especialidad.alumnos.find(alumno => alumno.matricula === matricula);
      if (alumno) {
        alumnoEncontrado = alumno;
      }
    });
    
    if (!alumnoEncontrado) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }
    
    res.json(alumnoEncontrado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { buscarAlumnoPorMatricula };