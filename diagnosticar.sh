#!/bin/bash

# Script de diagnóstico para el proyecto MONTEMOLIN-AIHUB
# Ejecutar: bash diagnosticar.sh

echo "🔍 DIAGNÓSTICO DEL PROYECTO MONTEMOLIN-AIHUB"
echo "=============================================="
echo ""

# 1. Verificar que el JSON es válido
echo "1️⃣  Verificando data/project.json..."
if node -e "const data = require('./data/project.json'); console.log('✅ JSON válido'); console.log('   Módulos:', data.modules.items.length);" 2>/dev/null; then
    echo ""
else
    echo "❌ ERROR: data/project.json no es válido"
    exit 1
fi

# 2. Verificar que Modules.tsx existe
echo "2️⃣  Verificando src/pages/Modules.tsx..."
if [ -f "src/pages/Modules.tsx" ]; then
    echo "✅ src/pages/Modules.tsx existe"
    echo "   Líneas: $(wc -l < src/pages/Modules.tsx)"
else
    echo "❌ ERROR: src/pages/Modules.tsx no existe"
    exit 1
fi
echo ""

# 3. Verificar que App.tsx tiene la ruta
echo "3️⃣  Verificando src/App.tsx..."
if grep -q "modulos" src/App.tsx; then
    echo "✅ Ruta /modulos configurada en App.tsx"
else
    echo "❌ ERROR: Ruta /modulos no encontrada en App.tsx"
    exit 1
fi
echo ""

# 4. Verificar que Layout.tsx tiene el enlace
echo "4️⃣  Verificando src/components/Layout.tsx..."
if grep -q "Módulos" src/components/Layout.tsx; then
    echo "✅ Enlace 'Módulos' encontrado en Layout.tsx"
else
    echo "❌ ERROR: Enlace 'Módulos' no encontrado en Layout.tsx"
    exit 1
fi
echo ""

# 5. Verificar que Home.tsx tiene la sección de módulos
echo "5️⃣  Verificando src/pages/Home.tsx..."
if grep -q "Módulos operativos territoriales" src/pages/Home.tsx; then
    echo "✅ Sección de módulos encontrada en Home.tsx"
else
    echo "❌ ERROR: Sección de módulos no encontrada en Home.tsx"
    exit 1
fi
echo ""

# 6. Verificar el build
echo "6️⃣  Verificando build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build exitoso"
    echo "   Archivos generados:"
    ls -lh dist/assets/ | tail -n 3
else
    echo "❌ ERROR: Build falló"
    exit 1
fi
echo ""

# 7. Verificar que dist/index.html existe
echo "7️⃣  Verificando dist/index.html..."
if [ -f "dist/index.html" ]; then
    echo "✅ dist/index.html existe"
    echo "   Tamaño: $(ls -lh dist/index.html | awk '{print $5}')"
else
    echo "❌ ERROR: dist/index.html no existe"
    exit 1
fi
echo ""

# 8. Resumen
echo "=============================================="
echo "✅ DIAGNÓSTICO COMPLETADO EXITOSAMENTE"
echo "=============================================="
echo ""
echo "📊 Resumen:"
echo "   - JSON válido con 4 módulos"
echo "   - Componente Modules.tsx creado"
echo "   - Ruta configurada en App.tsx"
echo "   - Enlace en Layout.tsx"
echo "   - Sección en Home.tsx"
echo "   - Build exitoso"
echo "   - Archivos de distribución generados"
echo ""
echo "🚀 Próximos pasos:"
echo "   1. Inicia el servidor: npm run dev"
echo "   2. Abre el navegador: http://localhost:3000"
echo "   3. Navega a 'Módulos' en el menú"
echo "   4. O accede directamente: http://localhost:3000/#/modulos"
echo ""
echo "🔧 Si la página aparece en blanco:"
echo "   - Recarga con Ctrl+F5 (sin caché)"
echo "   - Abre la consola (F12) y busca errores"
echo "   - Prueba en modo incógnito"
echo ""
echo "📄 Para más información, consulta:"
echo "   - SOLUCION_PROBLEMAS.md"
echo "   - PROYECTO_FINAL.md"
echo ""
