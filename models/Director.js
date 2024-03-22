const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  id_director: Number,
  username: String,
  email: String,
  password_md5: String,
  nss: String,
  numero_trabajador: Number,
  telefono: String,
  nombre: String,
  apellido_paterno: String,
  apellido_materno: String,
  carreras: [{
    id: Number,
    nombre: String
  }]
}, { collection: 'directores' }); // Especificamos el nombre de la colección

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;