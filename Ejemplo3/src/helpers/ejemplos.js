//IMPORTS
import dotenv from "dotenv"
import { exec } from "node:child_process";

// Declaracion de variables
dotenv.config();

const API_URL = process.env.API_URL;


export const getAllUsers = () => {
    const URL_BASE = `${API_URL}/users`
    const cmd = `curl -s -X GET ${URL_BASE}`

    exec(cmd, (error,stdout,stderr) => {
        if(error){
            console.error("Error ejecutando el curl: ", error.message);
            return;
        }
        if (stderr && stderr.trim() !== "") {
            console.error("Error en la salida: ", stderr);
            return;
        }
        const data = JSON.parse(stdout);
        console.log(data)

    })
};