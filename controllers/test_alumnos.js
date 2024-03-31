const Reporte = require('../models/Test');

exports.enviarResultado = async (req, res) => {
  try {
    const { alumno, fecha, hora, resultado } = req.body;
    const nuevoReporte = new Reporte({
      alumno: alumno,
      fecha: fecha,
      hora: hora,
      resultado: resultado
    });
    await nuevoReporte.save();
    res.json(nuevoReporte);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
  }
};