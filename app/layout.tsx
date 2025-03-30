import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Odessey',
  description: 'Made Up',
  generator: 'v0.dev',
  icons: '/favicon.ico',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
