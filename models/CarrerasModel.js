const mongoose = require('mongoose');

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

const CarrerasModel = mongoose.model('Carrera', carreraSchema);

module.exports = CarrerasModel;
