# Portal de Transparencia — Asamblea Iconik 68

Portal web informativo para la Asamblea General 2026 del conjunto residencial **Iconik 68**.

Desarrollado por **Juan Manuel Escandón** en colaboración con el Consejo de Administración General y Sectorial.

---

## Estructura del proyecto

```
portal-iconik68/
├── index.html                  ← Pantalla de introducción y acceso
├── informe-gestion.html        ← Informe de Gestión 2024-2025
├── presupuesto.html            ← Presupuesto Ordinario 2026
├── proyectos.html              ← Proyectos Cuota Extraordinaria
├── manual-convivencia.html     ← Manual de Convivencia (cambios clave)
├── assets/
│   ├── nav.js                  ← Componente de navegación compartida
│   └── iconik-core.css         ← Estilos base del design system
├── stitch/                     ← Diseños originales del Stitch (referencia)
│   ├── iconik_institutional/DESIGN.md
│   └── ...
├── .gitignore
└── README.md
```

## Cómo correr el proyecto localmente

Es un sitio 100% estático. No requiere build tools ni servidor especial.

**Opción 1 — VS Code Live Server:**
1. Abre la carpeta `portal-iconik68/` en VS Code
2. Instala la extensión "Live Server"
3. Clic derecho sobre `index.html` → "Open with Live Server"

**Opción 2 — Python (cualquier terminal):**
```bash
cd portal-iconik68
python3 -m http.server 8080
# Abre http://localhost:8080
```

**Opción 3 — Node.js:**
```bash
npx serve portal-iconik68
```

> ⚠️ No abrir los archivos directamente con `file://` — el `nav.js` compartido requiere un servidor HTTP para funcionar correctamente.

---

## Design System

El portal sigue el sistema de diseño **"Architectural Monolith"** documentado en `stitch/iconik_institutional/DESIGN.md`.

Principios clave:
- Colores: `primary` (#003b93) + superficies neutras institucionales
- Tipografía: Outfit (headlines) + Inter (body)
- Sin bordes explícitos — separación por contraste tonal
- Glassmorphism en la navegación flotante
- Mobile-first con sidebar colapsable en desktop

---

## Marcadores de contenido pendiente

Busca `<!-- TODO:` en los HTML para identificar todos los textos que deben actualizarse con datos reales de la administración.

```bash
grep -rn "TODO:" *.html
```

---

## Deployment en GitHub Pages

1. Crea el repositorio en GitHub (ej. `iconik68-portal`)
2. Sube el contenido de esta carpeta a la rama `main`
3. En Settings → Pages → Source: selecciona `main` / `/ (root)`
4. El portal estará en: `https://[tu-usuario].github.io/iconik68-portal/`

---

## Próximos pasos

- [ ] Reemplazar datos placeholder con cifras reales del presupuesto
- [ ] Agregar enlaces reales a PDFs de actas y documentos
- [ ] Conectar el botón "Descargar" a los archivos en Google Drive o repositorio
- [ ] Integrar el link del Simulador de Cuota definitivo
- [ ] Actualizar foto de Juan Manuel Escandón si es necesario
- [ ] Revisar año "2026" en todos los footers antes del lanzamiento

---

*Portal informativo — sin sistemas de votación. Optimizado para desktop.*
