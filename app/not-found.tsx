import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Página no encontrada
      </h1>
      <p className="mt-4 text-muted-foreground">
        La ruta que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium underline-offset-4 hover:underline"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
