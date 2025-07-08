import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxury Films - Transformamos ideas en emociones visuales',
  description: 'Productora audiovisual especializada en fotografía profesional, producción de videos, diseño web y publicidad digital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/luxury-films/globals.css" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}