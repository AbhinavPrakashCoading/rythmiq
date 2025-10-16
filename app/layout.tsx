import "styles/tailwind.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rythmiq - AI-Powered Solutions',
  description: 'AI-Powered Music Creation and DocKit Solutions',
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="shortcut icon" href="/icon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
