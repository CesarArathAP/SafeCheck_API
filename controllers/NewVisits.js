// controllers/NewVisits.js

const Visita = require('../models/Visita');
const fs = require('fs');

const registrarVisita = async (req, res) => {
  const { visitor_name, purpose, area, date, entry_time, exit_time } = req.body;
  let { photo } = req.body;

  try {
    // Verificar si se ha enviado una foto y si es un archivo válido
    if (req.file) {
      const filePath = req.file.path;
      photo = fs.readFileSync(filePath, { encoding: 'base64' });
      fs.unlinkSync(filePath); // Eliminar el archivo después de leerlo
    }

    // Crear un nuevo objeto de visita con los datos proporcionados
    const nuevaVisita = new Visita({
      visita: {
        visitante: {
          nombre: visitor_name
        },
        motivo: {
          descripcion: purpose
        },
        ubicacion: {
          area: area
        },
        registro: {
          fecha: date,
          hora_entrada: entry_time,
          hora_salida: exit_time
        },
        fotografia: photo
      }
    });

    // Guardar la nueva visita en la base de datos
    await nuevaVisita.save();

    res.status(201).json({ message: 'Visita registrada exitosamente' });
  } catch (error) {
    console.error('Error al registrar visita:', error);
    res.status(500).json({ error: 'Error interno del servidor al registrar visita' });
  }
};

module.exports = { registrarVisita };