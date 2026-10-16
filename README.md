# Olga Coll — web personal

Web estática para `https://ocollp.github.io/`, sin instalación ni compilación.

## Vista previa

Desde esta carpeta: `python3 -m http.server 4173`. Abre `http://localhost:4173`.

## Personalización

- `index.html`: presentación y foto (actualmente usa el avatar público de GitHub).
- `projects.html`: selección de repositorios públicos.
- `blog.html`: preparado para incorporar artículos reales.
- `style.css`: diseño adaptable a móvil.

## Publicación en GitHub Pages

Sube los archivos a un repositorio llamado `ocollp.github.io` de la cuenta `ocollp`. En Settings → Pages selecciona Deploy from a branch, la rama `main` y la carpeta `/ (root)`. La dirección final será `https://ocollp.github.io/`.

La publicación requiere acceso a esa cuenta. Esta carpeta todavía no se ha subido.

## Añadir artículos

Copia `article-template.html.txt` a `blog/mi-articulo.html`. Cambia el título de la pestaña, la descripción y el contenido de `<article>`. Añade un enlace en la lista de `blog.html`. La plantilla no aparece en la navegación.

El índice del blog contiene los artículos compartidos por Olga, con fecha y enlace. La nota inicial de GitHub Pages se conserva como archivo, fuera del índice.
