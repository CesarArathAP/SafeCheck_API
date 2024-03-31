// controllers/get_attention_calls.js

const AttentionCall = require('../models/AttentionCall');

// Controlador para obtener los documentos de la colección attentioncalls
const getAttentionCalls = async (req, res) => {
  try {
    // Obtener todos los documentos de la colección
    const attentionCalls = await AttentionCall.find();

    // Enviar respuesta con los documentos en formato JSON
    res.json(attentionCalls);
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ error: 'Hubo un error al obtener las llamadas de atención.' });
  }
};

module.exports = getAttentionCalls;