const Visitas = require('../models/Visitas');

async function obtenerVisitas(req, res, next) {
  try {
    const visitas = await Visitas.find();
    const visitasFormateadas = visitas.map(visita => ({
      id: visita.id,
      visitante: visita.visita.visitante.nombre,
      motivo: visita.visita.motivo.descripcion,
      ubicacion: visita.visita.ubicacion.area,
      registro: visita.visita.registro,
      // Devolver la cadena completa de la fotografía base64
      fotografia: visita.visita.fotografia || null //  fotografia: visita.visita.fotografia ? `${visita.visita.fotografia.substring(0, 50)}...` : nul
    }));
    res.json(visitasFormateadas);
  } catch (error) {
    next(error);
  }
}

module.exports = { obtenerVisitas };