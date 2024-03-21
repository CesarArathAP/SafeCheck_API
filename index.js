const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/conexion');
const docentesRouter = require('./routes/Docentes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/docentes', docentesRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});