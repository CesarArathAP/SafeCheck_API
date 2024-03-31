const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
    alumno: {
        matricula: String,
        nombre: String,
        grupo: String,
    },
    fecha: String,
    hora: String,
    resultado: String
}, { versionKey: false });

const Reporte = mongoose.model('Reporte', reporteSchema);

module.exports = Reporte;