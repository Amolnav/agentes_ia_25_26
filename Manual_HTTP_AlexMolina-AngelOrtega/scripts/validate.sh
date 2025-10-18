#!/bin/bash

# -----------------------------
# Script de Validación del Proyecto
# -----------------------------

# Colors for output
GREEN="\033[0;32m"
RED="\033[0;31m"
NC="\033[0m"

# Track overall status
STATUS=0

echo "🔍 Validando estructura del proyecto..."

# Helper function to check file/folder
check_file() {
    if [ -e "$1" ]; then
        echo -e "$1: ${GREEN}OK${NC}"
    else
        echo -e "$1: ${RED}FAIL${NC}"
        STATUS=1
    fi
}
echo ""
# Check required files
check_file "package.json"
check_file "src/db/db.json"
check_file ".gitignore"
check_file ".env.example"
check_file "README.md"
check_file "checklist.md"
check_file "src/peticiones-crud.http"
check_file "src/crud-curl.js"

# Check folders
check_file "src/"
check_file "images/"
check_file "scripts/"

# Check images folder has ≥ 6 files
if [ -d "images" ]; then
    count=$(ls images | wc -l)
    if [ "$count" -ge 6 ]; then
        echo -e "images folder files ≥ 6: ${GREEN}OK${NC}"
    else
        echo -e "images folder files ≥ 6: ${RED}FAIL (found $count)${NC}"
        STATUS=1
    fi
fi

echo ""
# Check package.json contents
if [ -f "package.json" ]; then
    # type: module
    if grep -q "\"type\": \"module\"" package.json; then
        echo -e "package.json type: ${GREEN}OK${NC}"
    else
        echo -e "package.json type: ${RED}FAIL${NC}"
        STATUS=1
    fi

    # dependencies: dotenv & json-server
    for dep in dotenv json-server; do
        if grep -q "\"$dep\"" package.json; then
            echo -e "package.json dependency $dep: ${GREEN}OK${NC}"
        else
            echo -e "package.json dependency $dep: ${RED}FAIL${NC}"
            STATUS=1
        fi
    done

    # scripts: server:up & crud:curl
    for script in "server:up" "crud:curl"; do
        if grep -q "\"$script\"" package.json; then
            echo -e "package.json script $script: ${GREEN}OK${NC}"
        else
            echo -e "package.json script $script: ${RED}FAIL${NC}"
            STATUS=1
        fi
    done
fi

echo ""
# Final message
if [ $STATUS -eq 0 ]; then
    echo -e "${GREEN}✅ Todo correcto${NC}"
else
    echo -e "${RED}❌ Faltan elementos o configuraciones${NC}"
fi
