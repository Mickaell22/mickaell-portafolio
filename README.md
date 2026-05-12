# mickaell-portafolio

Portafolio personal y CV dinámico de Mickaell Morán — desarrollador fullstack freelance, Guayaquil, Ecuador.

**URL:** [mickaell.novamicktools.com](https://mickaell.novamicktools.com)

## Stack

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + shadcn/ui
- **Contenido:** MDX con next-mdx-remote
- **CV PDF:** @react-pdf/renderer
- **Deploy:** Railway

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/              # rutas Next.js
components/       # ui, layout, sections, content
content/          # proyectos, experiencia, educación (MDX)
lib/              # parsers y utilidades
types/            # tipos TypeScript
```

## Contenido

Todo el contenido vive en archivos MDX dentro de `content/`. Para actualizar proyectos, experiencia o habilidades: editar el archivo correspondiente y hacer push.
