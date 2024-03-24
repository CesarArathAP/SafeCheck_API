// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./db/conexion');
const cors = require("cors");
const docentesRouter = require('./routes/docentes');
const vigilanciaRouter = require('./routes/vigilancia'); // Importar el enrutador de vigilancia
const { loginVigilancia } = require('./controllers/loginVigilancia'); // Importar el controlador de login para vigilantes
const { login } = require('./controllers/login');
const { registrarVisita } = require('./controllers/NewVisits');


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

app.set('view engine', 'ejs'); // Configurar Express para usar EJS como motor de plantillas
// Rutas
app.use('/docentes', docentesRouter);
app.use('/vigilancia', vigilanciaRouter); // Usar el enrutador de vigilancia

// Ruta para mostrar el formulario de inicio de sesión para docentes
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

// Ruta para mostrar el formulario de inicio de sesión para vigilantes
app.get('/vigilancia/login', (req, res) => {
  res.send(`
    <form action="/vigilancia/login" method="post">
      <label for="username">Nombre de usuario:</label>
      <input type="text" id="username" name="username" required><br><br>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required><br><br>
      <button type="submit">Iniciar sesión</button>
    </form>
  `);
});

// Nueva ruta para mostrar el mensaje de bienvenida y el formulario de registro de visita para vigilantes autenticados
app.get('/vigilancia/login/acceso', (req, res) => {
  const nombreOficial = req.query.nombre; // Obtener el nombre del oficial de la consulta de la URL
  res.json({ message: `Bienvenido Oficial ${nombreOficial}` });
});


// Ruta para manejar el registro de visitas
app.post('/vigilancia/registro-visita', registrarVisita);

// Ruta para manejar el inicio de sesión para vigilantes
app.post('/vigilancia/login', loginVigilancia);

// Ruta para manejar el inicio de sesión de docentes
app.post('/docentes/login', login);

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