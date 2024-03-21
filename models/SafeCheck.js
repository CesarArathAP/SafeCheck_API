const mongoose = require("mongoose");

const DocenteSchema = new mongoose.Schema({
  nombre: String,
  apellido_paterno: String,
  apellido_materno: String,
  telefono: String,
  nss: String,
  email: String,
  username: String,
  password_md5: String,
  carreras: [{
    id: Number,
    nombre: String,
  }],
});

const Docente = mongoose.model('Docente', DocenteSchema);

module.exports = Docente;