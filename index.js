const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./db/conexion');
const cors = require("cors");
const docentesRouter = require('./routes/docentes');

console.log("El App de Node incializada correctamente");
// Concetar a la base de datos de mongo
conexion();

const app = express();
const puerto = process.env.PORT || 3000;
// Configurar cors
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/docentes', docentesRouter);

//Escuchar las peticiones HTTP
app.listen(puerto, () => {
  console.log(" Servidor Corriendo en el puerto " + puerto);
});