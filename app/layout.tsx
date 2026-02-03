import type { Metadata } from 'next'
import { Urbanist, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'HITT Contracting | Los Angeles, CA',
  description: 'HITT Contracting Los Angeles office - Commercial construction services in Southern California',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${dmSerifDisplay.variable} antialiased font-urbanist`}>
        {children}
      </body>
    </html>
  )
}
