// controllers/registrarVisitas.js

const Visitas = require('../models/Visitas');
const fs = require('fs').promises;

async function registrarVisita(req, res, next) {
  try {
    const visitaData = req.body;
    // Leer la imagen cargada y convertirla a base64
    const fotografia = req.file.path;
    const tipoMIME = req.file.mimetype;
    const imagenBuffer = await fs.readFile(fotografia);
    const imagenBase64 = `data:${tipoMIME};base64,${imagenBuffer.toString('base64')}`;

    // Agregar la imagen base64 a los datos de la visita
    visitaData.visita.fotografia = imagenBase64;

    // Obtener el último ID y sumarle 1 para generar un nuevo ID
    const ultimoId = await Visitas.findOne({}, {}, { sort: { 'id': -1 } });
    const nuevoId = ultimoId ? ultimoId.id + 1 : 1;

    // Agregar el ID al objeto visitaData
    visitaData.id = nuevoId;

    const nuevaVisita = new Visitas(visitaData);
    await nuevaVisita.save();
    // Enviar solo el mensaje de éxito en la respuesta
    res.json({ message: 'Visita registrada correctamente' });
  } catch (error) {
    next(error);
  }
}

module.exports = { registrarVisita };