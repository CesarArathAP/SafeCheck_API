// controllers/loginVigilancia.js

const Vigilancia = require('../models/Vigilancia');

const loginVigilancia = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el vigilante por nombre de usuario
    const vigilante = await Vigilancia.findOne({ username });

    if (!vigilante) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con la almacenada en texto plano
    if (password !== vigilante.password) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Autenticación exitosa
    // Envía el nombre completo del vigilante
    res.status(200).json({ message: `Bienvenido Oficial ${vigilante.nombre} ${vigilante.apellidos}` });
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

module.exports = { loginVigilancia };