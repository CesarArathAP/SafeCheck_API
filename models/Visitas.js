// models/Visitas.js

const mongoose = require('mongoose');

const visitasSchema = new mongoose.Schema({
  id: Number,
  visita: {
    visitante: {
      nombre: String
    },
    motivo: {
      descripcion: String
    },
    ubicacion: {
      area: String
    },
    registro: {
      fecha: String,
      hora_entrada: String,
      hora_salida: String
    },
    fotografia: String // Almacena la ruta de la fotografía
  }
}, { versionKey: false }); // No incluir el campo versionKey (__v)

const Visitas = mongoose.model('Visitas', visitasSchema);

module.exports = Visitas;