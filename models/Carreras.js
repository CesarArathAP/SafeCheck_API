// models/Carrera.js

const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
  matricula: String,
  nombre: String,
  apellido_paterno: String,
  apellido_materno: String,
  correo_electronico: String,
  grupo: String,
  nss: String,
  estado: String,
});

const especialidadSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  nivel: String,
  alumnos: [alumnoSchema], // Agregar el esquema de alumno como un arreglo
});

const carreraSchema = new mongoose.Schema({
  carrera_id: Number,
  nombre: String,
  especialidades: [especialidadSchema],
});

const Carrera = mongoose.model('Carrera', carreraSchema);

module.exports = Carrera;