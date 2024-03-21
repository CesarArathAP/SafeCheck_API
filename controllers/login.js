const bcrypt = require('bcrypt');
const Docente = require('../models/SafeCheck');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el docente por nombre de usuario
    const docente = await Docente.findOne({ username });

    if (!docente) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con la almacenada
    const match = await bcrypt.compare(password, docente.password_md5);

    if (!match) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Autenticación exitosa
    res.status(200).json({ message: 'Autenticación exitosa' });
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

module.exports = { login };