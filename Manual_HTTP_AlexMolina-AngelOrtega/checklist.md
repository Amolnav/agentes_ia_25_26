# ✅ Checklist de Progreso - CRUD HTTP Manual y Herramientas Visuales

## 🏗 Parte 1: Configuración inicial del proyecto
- [X] Crear carpeta del proyecto `manual-http-[nombre-iniciales-apellidos]`
- [X] Inicializar proyecto con `npm init`
- [X] Completar `package.json` (name, version, description, author)
- [X] Instalar dependencias: `json-server`, `dotenv`
- [ ] Configurar `package.json` con:
  - [X] `"type": "module"`
  - [ ] Script `server:up`
  - [ ] Script `crud:curl`
  - [ ] Script `validate`
- [X] Crear estructura de carpetas (`src/`, `scripts/`, `images/`)
- [ ] Crear archivo `.env` con variables: PORT, API_BASE_URL, NODE_ENV
- [X] Crear `.env.example`
- [X] Crear `.gitignore` adecuado
- [X] Crear `src/db/db.json` con datos de ejemplo (students, courses, enrollments)

---

## 💻 Parte 2: Script CRUD con cURL (Angel)
- [X] Crear `src/crud-curl.js`
- [ ] Importar y configurar `dotenv`
- [ ] Construir `BASE_URL` con variables de entorno
- [ ] Implementar funciones con JSDoc y `console.log` de comandos:
  - [ ] `createStudent(studentData)`
  - [ ] `readAllStudents()`
  - [ ] `readStudentById(id)`
  - [ ] `updateStudent(id, studentData)`
  - [ ] `patchStudent(id, partialData)`
  - [ ] `deleteStudent(id)`
- [ ] Ejecutar todas las funciones en orden al final del archivo

---

## 📚 Parte 3: Documentación CRUD con cURL
- [ ] Documentar en `README.md` cada operación:
  - [ ] CREATE
  - [ ] READ ALL
  - [ ] READ BY ID
  - [ ] UPDATE
  - [ ] PATCH
  - [ ] DELETE
- [ ] Incluir:
  - [ ] Comando cURL completo
  - [ ] Explicación de flags y método
  - [ ] Headers enviados
  - [ ] Respuesta real con código de estado
- [ ] Ejecutar y documentar pruebas reales

---

## ⚡ Parte 4: Thunder Client (Alex)
- [ ] Crear colección `CRUD Students API`
- [ ] Configurar entorno con variables (`baseUrl`, `port`, `fullUrl`)
- [ ] Crear peticiones:
  - [ ] CREATE Student (POST)
  - [ ] GET All Students (GET)
  - [ ] GET Student by ID (GET)
  - [ ] UPDATE Student (PUT)
  - [ ] PATCH Student (PATCH)
  - [ ] DELETE Student (DELETE)
- [ ] Capturas de cada petición guardadas en `/images`
- [ ] Documentar en `README.md` con capturas y explicación

---

## 📝 Parte 5: REST Client
- [X] Crear archivo `peticiones-crud.http`
- [ ] Definir variables `@baseUrl`, `@port`, `@apiUrl`
- [ ] Implementar operaciones:
  - [ ] CREATE
  - [ ] READ ALL
  - [ ] READ by ID
  - [ ] READ (filtrar estudiantes activos)
  - [ ] READ (filtrar por nivel)
  - [ ] UPDATE (PUT)
  - [ ] PATCH
  - [ ] DELETE
- [ ] Separar con `###`
- [ ] Probar todas las peticiones

---

## ✅ Parte 6: Script de Validación
- [X] Crear `scripts/validate.sh`
- [ ] Validar existencia de:
  - [ ] `package.json`
  - [ ] `src/db/db.json`
  - [ ] `.gitignore`
  - [ ] `.env.example`
  - [ ] `README.md`
  - [ ] `checklist.md`
  - [ ] `peticiones-crud.http`
  - [ ] Carpeta `src/`
  - [ ] `src/crud-curl.js`
  - [ ] Carpeta `images/` con ≥ 6 capturas
  - [ ] Carpeta `scripts/`
- [ ] Verificar en `package.json`:
  - [ ] `"type": "module"`
  - [ ] Dependencias `dotenv` y `json-server`
  - [ ] Scripts `server:up` y `crud:curl`
- [ ] Mostrar mensaje final (OK / FAIL)
- [ ] Dar permisos de ejecución y probarlo en terminal

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
- [ ] Pasar script de validación sin errores
- [ ] Entregar PR antes de la fecha límite
- [X] Confirmar que `.env` NO está en el repo

---
