const Visitas = require('../models/Visitas');
const fs = require('fs').promises;

async function registrarVisita(req, res, next) {
  try {
    // Imprimir los datos del formulario recibidos
    console.log('Datos del formulario recibidos:', req.body);

    const { visitante, motivo, area, fecha, hora_entrada, hora_salida, fotografia } = req.body;

    // Obtener el último ID y sumarle 1 para generar un nuevo ID
    const ultimoId = await Visitas.findOne({}, {}, { sort: { 'id': -1 } });
    const nuevoId = ultimoId ? ultimoId.id + 1 : 1;

    // Crear un nuevo documento de visita con los datos recibidos y el ID generado
    const nuevaVisita = new Visitas({
      id: nuevoId,
      visita: {
        visitante: { nombre: visitante },
        motivo: { descripcion: motivo },
        ubicacion: { area: area },
        registro: {
          fecha: fecha,
          hora_entrada: hora_entrada,
          hora_salida: hora_salida
        },
        fotografia: fotografia
      }
    });

    // Guardar la nueva visita en la base de datos
    await nuevaVisita.save();

    // Enviar una respuesta con los detalles completos de la visita registrada
    res.json({
      message: 'Visita registrada correctamente',
      visita: nuevaVisita
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { registrarVisita };