const mongoose = require('mongoose');

const { Schema } = mongoose;

// Definir el esquema de la visita
const visitaSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  visita: {
    visitante: {
      nombre: {
        type: String,
        required: true
      }
    },
    motivo: {
      descripcion: {
        type: String,
        required: true
      }
    },
    ubicacion: {
      area: {
        type: String,
        required: true
      }
    },
    registro: {
      fecha: {
        type: String,
        required: true
      },
      hora_entrada: {
        type: String,
        required: true
      },
      hora_salida: {
        type: String,
        required: true
      }
    },
    fotografia: {
      type: String,
    }
  }
}, { versionKey: false });

// Crear el modelo de Visita utilizando el esquema definido
const Visita = mongoose.model('Visita', visitaSchema);

module.exports = Visita;