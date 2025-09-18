#!/bin/bash
# @autor: Alex MN
# @comment:
# @description: script que valida si tenemos instalados: git, node, npm, curl
# crear un script que utilizando command -v verifique si tengo instalado los paquetes git, node, npm, curl. Si alguno de dichos paquetes no esta en el sistema mostraremos mensaje de error

paquetes=(git node npm curl)
correcto=true

for i in "${paquetes[@]}"; do
    if command -v "$i" &>/dev/null; then
        version=$($i --version 2>/dev/null | head -n1)
        echo "Instalado correctamente: $i versión: $version"
    else
        echo "Paquete $i no instalado"
        correcto=false
    fi
done

if [ "$correcto" = true ]; then
    echo "Todo está instalado correctamente"
else
    echo "Faltan paquetes"
fi

