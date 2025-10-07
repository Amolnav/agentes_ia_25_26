// Importaciones
import dotenv from "dotenv";

// Cargo las variables .env a este fichero
dotenv.config();
// Todas la variables estan en process.env.Nombre_de_la_Variable

const BASE_URL = `${process.env.API_BASE_URL}:${process.env.PORT}`;


console.log(`BASE_URL configurada: ${BASE_URL}`);


/**
 * @param {Object} studentData - Objeto con los datos del estudiante
 * Ejemplo:
 * {
 *   id: 1
 *   name: "María García López",
 *   email: "maria.garcia@email.com",
 *   enrollmentDate: "2024-09-15",
 *   active: true,
 *   level: "intermediate"
 * }
 */
function createStudent(studentData) {
    const command = `curl -i -X POST ${BASE_URL}/students -H "Content-Type: application/json" -d '{\"id\": ${studentData.id}, \"name\": \"${studentData.name}\", \"email\": \"${studentData.email}\", \"enrollmentDate\": \"${studentData.enrollmentDate}\", \"active\": ${studentData.active}, \"level\": \"${studentData.level}\"}'`;
    console.log(command);
    console.log("-------------------------------------------")
}

/**
 * Lee todos los estudiantes
 */
function readAllStudents() {
    const command = `curl -i -X GET ${BASE_URL}/students -H "Accept: application/json"`;
    console.log(command);
    console.log("-------------------------------------------")
}

/**
 * Lee un estudiante por su ID
 * @param {number} id - ID del estudiante a consultar
 */
function readStudentById(id) {
    const command = `curl -i -X GET ${BASE_URL}/students/${id} -H "Accept: application/json"`;
    console.log(command);
    console.log("-------------------------------------------")
}

/**
 * Actualiza completamente un estudiante (PUT)
 * @param {number} id - ID del estudiante
 * @param {Object} studentData - Objeto con los datos completos del estudiante
 */
function updateStudent(id, studentData) {
    const command = `curl -i -X PUT ${BASE_URL}/students/${id} -H "Content-Type: application/json" -d '{\"id\": ${studentData.id}, \"name\": \"${studentData.name}\", \"email\": \"${studentData.email}\", \"enrollmentDate\": \"${studentData.enrollmentDate}\", \"active\": ${studentData.active}, \"level\": \"${studentData.level}\"}'`;
    console.log(command);
    console.log("-------------------------------------------")
}

/**
 * Actualiza parcialmente un estudiante (PATCH)
 * @param {number} id - ID del estudiante
 * @param {Object} partialData - Objeto con los datos a modificar
 */
function patchStudent(id, partialData) {
    const jsonData = JSON.stringify(partialData);
    const command = `curl -i -X PATCH ${BASE_URL}/students/${id} -H "Content-Type: application/json" -d '${jsonData}'`;
    console.log(command);
    console.log("-------------------------------------------")
}



/**
 *  Elimina un estudiante por su ID
 *  @param {number|string} id - ID del estudiante a eliminar
 */
function deleteStudent(id) {
    const command = `curl -i -X DELETE ${BASE_URL}/students/${id} -H "Accept: application/json"`;
    console.log(command);
    console.log("-------------------------------------------")
}



// Datos de ejemplo
const newStudent = {
    id: 8,
    name: "María García López",
    email: "maria.garcia@email.com",
    enrollmentDate: "2024-09-15",
    active: true,
    level: "intermediate"
};

// Ejecución de todas las funciones CRUD
console.log("Ejecutando funciones CRUD en orden...");
console.log("==========================================");


console.log("creacion de estudiante");
createStudent(newStudent);
console.log("Leer todos los estudiantes");
readAllStudents();
console.log("Leer un estudiante especifico");
readStudentById(1);
console.log("Actualización de estudiante");
updateStudent(1, {
    id: 1,
    name: "María García López",
    email: "maria.garcia@email.com",
    enrollmentDate: "2024-09-15",
    active: false,
    level: "advanced"
});
console.log("Actualización parcial de estudiante");
patchStudent(1, { level: "expert" });
console.log("Eliminación de estudiante");
deleteStudent(5);

console.log("========================================");

