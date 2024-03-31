// controllers/create_attention_call.js

const AttentionCall = require('../models/AttentionCall');

// Controlador para crear una nueva llamada de atención
const createAttentionCall = async (req, res) => {
  try {
    // Crear una nueva instancia de AttentionCall con los datos del cuerpo de la solicitud
    const attentionCall = new AttentionCall(req.body);

    // Guardar la nueva llamada de atención en la base de datos
    await attentionCall.save();

    // Responder con la nueva llamada de atención creada
    res.status(201).json(attentionCall);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al registrar la llamada de atención.' });
  }
};

module.exports = createAttentionCall;