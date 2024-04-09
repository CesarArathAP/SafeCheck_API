const SerialPort = require('serialport');

// Ruta del puerto serie de la placa de Arduino
const puertoSerie = 'COM3'; // Cambia esto según tu configuración en Windows

// Configuración del puerto serie
const portOptions = {
  baudRate: 9600
};

// Intenta crear una nueva instancia de SerialPort
try {
  const port = new SerialPort(puertoSerie, portOptions);

  // Evento 'open': se ejecuta cuando se abre la conexión con éxito
  port.on('open', () => {
    console.log('Conexión establecida con la placa de Arduino en el puerto:', puertoSerie);
  });

  // Evento 'data': se ejecuta cuando se recibe un mensaje desde Arduino
  port.on('data', (data) => {
    console.log('Datos recibidos desde Arduino:', data.toString());
    // Aquí puedes agregar la lógica para procesar los datos recibidos
  });

  // Evento 'error': se ejecuta cuando ocurre un error en la conexión
  port.on('error', (err) => {
    console.error('Error en la conexión con la placa de Arduino:', err.message);
  });
} catch (err) {
  // Captura cualquier error durante la creación del puerto serie
  console.error('Error al crear el puerto serie:', err.message);
}