// controllers/login.js

const Docente = require('../models/SafeCheck');
const Carrera = require('../models/Carreras');
const Director = require('../models/Directores');

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

    // Obtener la información de las carreras del docente
    const carreras = await Carrera.find({ carrera_id: { $in: docente.carreras.map(carrera => carrera.id) } });

    // Obtener el nombre del director de la carrera del docente
    let directorCarrera = "Director no asignado";
    for (const carrera of carreras) {
      const director = await Director.findOne({ "carreras.id": carrera.carrera_id });
      if (director) {
        directorCarrera = `${director.nombre} ${director.apellido_paterno} ${director.apellido_materno}`;
        break;
      }
    }

    // Construir el mensaje de bienvenida con el nombre del docente y sus carreras asignadas
    const nombreCompleto = `${docente.nombre} ${docente.apellido_paterno} ${docente.apellido_materno}`;
    const mensajeBienvenida = `¡Bienvenido ${nombreCompleto}!`;

    // Construir la información de las carreras y sus especialidades
    const infoCarreras = carreras.map(carrera => {
      const especialidades = carrera.especialidades.map(especialidad => {
        // Incluir la información de los alumnos para cada especialidad
        const alumnos = especialidad.alumnos.map(alumno => ({
          matricula: alumno.matricula,
          nombre: alumno.nombre,
          apellido_paterno: alumno.apellido_paterno,
          apellido_materno: alumno.apellido_materno,
          correo_electronico: alumno.correo_electronico,
          grupo: alumno.grupo,
          nss: alumno.nss,
          estado: alumno.estado
        }));
        return {
          nombre: especialidad.nombre,
          nivel: especialidad.nivel,
          alumnos: alumnos
        };
      });
      return {
        nombreCarrera: carrera.nombre,
        directorCarrera: directorCarrera,
        especialidades: especialidades
      };
    });

    // Autenticación exitosa, devolver el mensaje de bienvenida y la información de las carreras
    res.status(200).json({ message: mensajeBienvenida, carreras: infoCarreras });
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(500).json({ error: 'Error de servidor' });
  }
};

module.exports = { login };