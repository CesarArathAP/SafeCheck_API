# SafeCheck API

## Descripción
Este archivo `package.json` describe las dependencias y scripts de la API SafeCheck, una aplicación para gestionar la seguridad y el control de accesos.

## Dependencias

| Dependencia     | Comando para Descargar     |
|-----------------|----------------------------|
| bcrypt          | `npm install bcrypt`       |
| cors            | `npm install cors`         |
| express         | `npm install express`      |
| image-type      | `npm install image-type`   |
| mongoose        | `npm install mongoose`     |
| multer          | `npm install multer`       |
| node-notifier   | `npm install node-notifier`|
| nodemon         | `npm install nodemon`      |
| socket.io       | `npm install socket.io`    |
|serial port      | `npm install serialport`   |

## Scripts

- **start:** `nodemon index.js`
- **test:** `echo "Error: no test specified" && exit 1`

El script `start` inicia la API utilizando `nodemon` para monitorizar los cambios en los archivos y reiniciar automáticamente el servidor cuando sea necesario.

## Instalación de Dependencias

Para instalar todas las dependencias del proyecto, ejecuta el siguiente comando en la terminal:

```bash
npm install