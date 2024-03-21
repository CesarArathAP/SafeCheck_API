const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./db/conexion');
const cors = require("cors");
const docentesRouter = require('./routes/docentes');

console.log("La aplicación de Node se ha inicializado correctamente.");

// Conectar a la base de datos de MongoDB
conexion();

const app = express();
const puerto = process.env.PORT || 3000;

// Configurar cors
app.use(cors());

// Middleware para analizar los cuerpos de las solicitudes como JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
app.use('/docentes', docentesRouter);

// Ruta para mostrar el formulario de inicio de sesión
app.get('/login', (req, res) => {
  res.send(`
    <form action="/docentes/login" method="post">
      <label for="username">Nombre de usuario:</label>
      <input type="text" id="username" name="username" required><br><br>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required><br><br>
      <button type="submit">Iniciar sesión</button>
    </form>
  `);
});

// Manejo de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error('Error en la aplicación:', err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Escuchar las peticiones HTTP
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto " + puerto);
});