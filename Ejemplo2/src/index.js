// IMPORTS
import dotenv from "dotenv";

// Cargo las variables enviroment
dotenv.config();
// Todas las varibales estan en process.env.NOMBRE

// Mostrar por consola el valor de las variables de entorno
console.log("URL de acceso: ",process.env.URL)
console.log(`URL con puerto ${process.env.URL}:${process.env.PORT}`)
