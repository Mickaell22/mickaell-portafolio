import "./globals.css"

// Fallback for requests that don't resolve to a locale segment. Locale-aware
// 404s are handled by app/[locale]/not-found.tsx.
export default function GlobalNotFound() {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col items-center justify-center bg-white px-6 py-32 text-center text-zinc-800">
        <p className="text-sm font-medium text-zinc-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Página no encontrada · Page not found
        </h1>
        <p className="mt-4 text-zinc-500">
          La ruta que buscas no existe. · The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <a
          href="/"
          className="mt-8 text-sm font-medium underline underline-offset-4"
        >
          Inicio · Home
        </a>
      </body>
    </html>
  )
}
