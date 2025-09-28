#!/bin/bash

# Petición GET a un recurso
echo "=== GET /books ==="
curl -s http://localhost:3000/books
echo -e "\n"

# Petición POST a un recurso
echo "=== POST /books ==="
curl -s -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code","author":"Robert C. Martin","category":"Software Engineering","year":2008,"available":true}'
echo -e "\n"

# Petición PUT para actualizar
echo "=== PUT /books/1 ==="
curl -s -X PUT http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code","author":"Robert C. Martin","category":"Software Engineering","year":2008,"available":false}'
echo -e "\n"

# Petición DELETE
echo "=== DELETE /books/1 ==="
curl -s -X DELETE http://localhost:3000/books/1
echo -e "\n"
