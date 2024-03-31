// models/AttentionCall.js

const mongoose = require('mongoose');

// Definición del esquema para los documentos de la colección attentioncalls
const attentionCallSchema = new mongoose.Schema({
  matricula: {
    type: String,
    required: true
  },
  nombreCompleto: {
    type: String,
    required: true
  },
  grupo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
}, {
  // Establecer la opción de excluir el campo "__v" en la respuesta
  versionKey: false
});

// Creación del modelo AttentionCall basado en el esquema attentionCallSchema
const AttentionCall = mongoose.model('AttentionCall', attentionCallSchema);

module.exports = AttentionCall;