import Chakra from '@/components/chakra'
import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Hardaware',
  description: 'Bienvenue sur Hardaware',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Chakra>
          <Navbar />
          {children}
        </Chakra>
      </body>
    </html>
  )
}
