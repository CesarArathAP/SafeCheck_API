// controllers/registrarVisitas.js

const Visitas = require('../models/Visitas');

async function registrarVisita(req, res, next) {
  try {
    const visitaData = req.body;
    // Capturar la ruta del archivo cargado
    const fotografia = req.file.path; // Esto asume que multer ha guardado la imagen en el sistema de archivos y ha adjuntado la ruta al objeto req.file

    // Agregar la ruta de la fotografía a los datos de la visita
    visitaData.visita.fotografia = fotografia;

    const nuevaVisita = new Visitas(visitaData);
    await nuevaVisita.save();
    res.json({ message: 'Visita registrada correctamente', visita: nuevaVisita });
  } catch (error) {
    next(error);
  }
}

module.exports = { registrarVisita };