# ✅ Checklist de Progreso - CRUD HTTP Manual y Herramientas Visuales

## 🏗 Parte 1: Configuración inicial del proyecto
- [X] Crear carpeta del proyecto `manual-http-[nombre-iniciales-apellidos]`
- [X] Inicializar proyecto con `npm init`
- [X] Completar `package.json` (name, version, description, author)
- [X] Instalar dependencias: `json-server`, `dotenv`
- [ ] Configurar `package.json` con:
  - [X] `"type": "module"`
  - [X] Script `server:up`
  - [X] Script `crud:curl`
  - [X] Script `validate`
- [X] Crear estructura de carpetas (`src/`, `scripts/`, `images/`)
- [X] Crear archivo `.env` con variables: PORT, API_BASE_URL, NODE_ENV
- [X] Crear `.env.example`
- [X] Crear `.gitignore` adecuado
- [X] Crear `src/db/db.json` con datos de ejemplo (students, courses, enrollments)

---

## 💻 Parte 2: Script CRUD con cURL (Angel)
- [X] Crear `src/crud-curl.js`
- [X] Importar y configurar `dotenv`
- [X] Construir `BASE_URL` con variables de entorno
- [X] Implementar funciones con JSDoc y `console.log` de comandos:
  - [X] `createStudent(studentData)`
  - [X] `readAllStudents()`
  - [X] `readStudentById(id)`
  - [X] `updateStudent(id, studentData)`
  - [X] `patchStudent(id, partialData)`
  - [X] `deleteStudent(id)`
- [X] Ejecutar todas las funciones en orden al final del archivo

---

## 📚 Parte 3: Documentación CRUD con cURL
- [x] Documentar en `README.md` cada operación:
  - [x] CREATE
  - [x] READ ALL
  - [x] READ BY ID
  - [x] UPDATE
  - [x] PATCH
  - [x] DELETE
- [x] Incluir:
  - [x] Comando cURL completo
  - [x] Explicación de flags y método
  - [x] Headers enviados
  - [x] Respuesta real con código de estado
- [x] Ejecutar y documentar pruebas reales

---

## ⚡ Parte 4: Thunder Client (Angel)
- [X] Crear colección `CRUD Students API`
- [X] Configurar entorno con variables (`baseUrl`, `port`, `fullUrl`)
- [X] Crear peticiones:
  - [X] CREATE Student (POST)
  - [X] GET All Students (GET)
  - [X] GET Student by ID (GET)
  - [X] UPDATE Student (PUT)
  - [X] PATCH Student (PATCH)
  - [X] DELETE Student (DELETE)
- [X] Capturas de cada petición guardadas en `/images`
- [X] Documentar en `README.md` con capturas y explicación

---

## 📝 Parte 5: REST Client (Alex)
- [X] Crear archivo `peticiones-crud.http`
- [X] Definir variables `@baseUrl`, `@port`, `@apiUrl`
- [X] Implementar operaciones:
  - [X] CREATE
  - [X] READ ALL
  - [X] READ by ID
  - [X] READ (filtrar estudiantes activos)
  - [X] READ (filtrar por nivel)
  - [X] UPDATE (PUT)
  - [X] PATCH
  - [X] DELETE
- [X] Separar con `###`
- [X] Probar todas las peticiones

---

## ✅ Parte 6: Script de Validación (Alex)
- [X] Crear `scripts/validate.sh`
- [X] Validar existencia de:
  - [X] `package.json`
  - [X] `src/db/db.json`
  - [X] `.gitignore`
  - [X] `.env.example`
  - [X] `README.md`
  - [X] `checklist.md`
  - [X] `peticiones-crud.http`
  - [X] Carpeta `src/`
  - [X] `src/crud-curl.js`
  - [X] Carpeta `images/` con ≥ 6 capturas
  - [X] Carpeta `scripts/`
- [X] Verificar en `package.json`:
  - [X] `"type": "module"`
  - [X] Dependencias `dotenv` y `json-server`
  - [X] Scripts `server:up` y `crud:curl`
- [X] Mostrar mensaje final (OK / FAIL)
- [X] Dar permisos de ejecución y probarlo en terminal

---

## 🌿 Parte 7: Git y GitHub
- [X] Crear Carpeta `manual-http-[nombre]`
- [X] Añadir al profesor como colaborador
- [X] Inicializar Git local y conectar con remoto
- [X] Crear rama `m1/http-request-response`
- [ ] Hacer commits incrementales (feat:, docs:, fix:, etc.)
- [ ] Crear Pull Request hacia `main` con:
  - [ ] Resumen de implementación
  - [ ] División del trabajo 
  - [ ] Dificultades y soluciones
  - [ ] Características completadas
- [ ] Asignar al profesor como reviewer
- [ ] Tras aprobación: merge en `main` y actualizar local
- [ ] Crear tag `M1/http-request-response` y subirlo

---

## 📊 Parte 8: Validación Final
- [X] Pasar script de validación sin errores
- [ ] Entregar PR antes de la fecha límite
- [X] Confirmar que `.env` NO está en el repo

---
