// controllers/login.js

const Docente = require('../models/SafeCheck');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el docente por nombre de usuario
    const docente = await Docente.findOne({ username });

    if (!docente) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con la almacenada en texto plano
    if (password !== docente.password_md5) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Construir el mensaje de bienvenida con el nombre del docente y sus carreras asignadas
    const nombreCompleto = `${docente.nombre} ${docente.apellido_paterno} ${docente.apellido_materno}`;
    const carreras = docente.carreras.map(carrera => carrera.nombre).join(', ');

    const mensajeBienvenida = `¡Bienvenido ${nombreCompleto}! Sus carreras asignadas son: ${carreras}`;

    // Autenticación exitosa, devolver solo el mensaje de bienvenida
    res.status(200).json({ message: mensajeBienvenida });
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

module.exports = { login };