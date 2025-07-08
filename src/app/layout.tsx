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
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}