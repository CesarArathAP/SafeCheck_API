// controllers/login.js

const Docente = require('../models/SafeCheck');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Registro de consola para verificar el nombre de usuario
    console.log('Username:', username);

    // Buscar el docente por nombre de usuario
    const docente = await Docente.findOne({ username });

    // Registro de consola para verificar si se encuentra el docente
    console.log('Docente encontrado:', docente);

    if (!docente) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con la almacenada en texto plano
    if (password !== docente.password_md5) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Autenticación exitosa
    res.status(200).json({ message: `¡Bienvenido ${docente.nombre}!` });
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

module.exports = { login };