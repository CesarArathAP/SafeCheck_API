const mongoose = require('mongoose');

let CarrerasModel;

try {
  // Intenta obtener el modelo si ya está definido
  CarrerasModel = mongoose.model('Carrera');
} catch (e) {
  // Si el modelo no está definido, lo define
  const carreraSchema = new mongoose.Schema({
    carrera_id: Number,
    nombre: String,
    especialidades: [
      {
        id: Number,
        nombre: String,
        nivel: String,
        alumnos: [
          {
            matricula: String,
            nombre: String,
            apellido_paterno: String,
            apellido_materno: String,
            correo_electronico: String,
            grupo: String,
            nss: String,
            estado: String
          }
        ]
      }
    ]
  });
  CarrerasModel = mongoose.model('Carrera', carreraSchema);
}

module.exports = CarrerasModel;