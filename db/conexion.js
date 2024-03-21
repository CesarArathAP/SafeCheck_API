const mongoose = require("mongoose");

const conexion = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/safecheckschool");
        console.log("Conectando correctamente a la base de Datos, integradora");
    } catch(error) {
        console.error("No fue posible conectarse a tu db XD");
        // Aquí puedes decidir si lanzar el error para que lo maneje la aplicación o simplemente imprimirlo
        throw error;
    }
}

module.exports = {
    conexion
};