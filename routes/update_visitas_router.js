const express = require('express');
const router = express.Router();
const { updateHoraSalida } = require('../controllers/update_visitas');

router.put('/:idVisita', async (req, res) => {
  const { idVisita } = req.params;
  const { nuevaHoraSalida } = req.body;
  try {
    const visitaActualizada = await updateHoraSalida(idVisita, nuevaHoraSalida);
    res.json(visitaActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;