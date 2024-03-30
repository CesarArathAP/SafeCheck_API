const Visitas = require('../models/Visitas');

const updateHoraSalida = async (idVisita, nuevaHoraSalida) => {
  try {
    // Utiliza el campo "id" adicional para buscar la visita
    const visita = await Visitas.findOne({ id: idVisita });
    if (!visita) {
      throw new Error('Visita no encontrada');
    }
    // Actualiza la hora de salida
    visita.visita.registro.hora_salida = nuevaHoraSalida;
    // Guarda los cambios
    await visita.save();
    return visita;
  } catch (error) {
    console.error('Error en UpdateVisitasController:', error.message);
    throw error;
  }
};

module.exports = { updateHoraSalida };