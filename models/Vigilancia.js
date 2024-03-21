// models/Vigilancia.js

const mongoose = require('mongoose');

const VigilanciaSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  telefono: String,
  username: String,
  password: String,
}, { collection: 'vigilancia' }); // Aquí especificamos el nombre de la colección

const Vigilancia = mongoose.model('Vigilancia', VigilanciaSchema);

module.exports = Vigilancia;