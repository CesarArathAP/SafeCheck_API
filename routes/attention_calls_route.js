// routes/attention_calls_route.js

const express = require('express');
const router = express.Router();
const createAttentionCall = require('../controllers/create_attention_call');

// Ruta para crear una nueva llamada de atención
router.post('/', createAttentionCall);

module.exports = router;