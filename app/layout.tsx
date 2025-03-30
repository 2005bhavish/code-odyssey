import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Odessey',
  description: 'Made Up',
  generator: 'v0.dev',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
