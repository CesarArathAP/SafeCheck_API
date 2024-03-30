// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./db/conexion');
const cors = require("cors");
const docentesRouter = require('./routes/docentes');
const vigilanciaRouter = require('./routes/vigilancia');
const { loginVigilancia } = require('./controllers/loginVigilancia');
const { login } = require('./controllers/login');
const carrerasRouter = require('./routes/carreras');
const visitasRouter = require('./routes/visitas');
const { registrarVisita } = require('./controllers/registrarVisitas');
const multer = require('multer');
const path = require('path');
const obtenerVisitasRouter = require('./routes/obtener_visitas');
const updateVisitasRouter = require('./routes/update_visitas_router');

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

// Configuración de Multer para guardar la imagen en la carpeta uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// Rutas
app.use('/docentes', docentesRouter);
app.use('/vigilancia', vigilanciaRouter);
app.use('/carreras', carrerasRouter);
app.use('/obtener_visitas', obtenerVisitasRouter);
app.use('/api/update_visitas', updateVisitasRouter);

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

// Ruta para mostrar el formulario de registro de visitas
app.get('/registrar-visita', (req, res) => {
  res.send(`
    <form action="/visitas" method="post" enctype="multipart/form-data">
      <label for="nombre">Nombre del visitante:</label>
      <input type="text" id="nombre" name="visita[visitante][nombre]" required><br><br>
      <label for="motivo">Motivo de la visita:</label>
      <input type="text" id="motivo" name="visita[motivo][descripcion]" required><br><br>
      <label for="area">Área a visitar:</label>
      <input type="text" id="area" name="visita[ubicacion][area]" required><br><br>
      <label for="fecha">Fecha de registro:</label>
      <input type="text" id="fecha" name="visita[registro][fecha]" required><br><br>
      <label for="hora_entrada">Hora de entrada:</label>
      <input type="text" id="hora_entrada" name="visita[registro][hora_entrada]" required><br><br>
      <label for="hora_salida">Hora de salida:</label>
      <input type="text" id="hora_salida" name="visita[registro][hora_salida]" required><br><br>
      <label for="fotografia">Fotografía:</label>
      <input type="file" id="fotografia" name="fotografia" required><br><br>
      <button type="submit">Registrar visita</button>
    </form>
  `);
});

// Ruta para manejar el inicio de sesión para vigilantes
app.post('/vigilancia/login', loginVigilancia);

// Ruta para manejar el inicio de sesión de docentes
app.post('/docentes/login', login);

// Ruta para manejar las visitas
app.post('/visitas', upload.single('fotografia'), registrarVisita);

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