import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"]
})

// <CHANGE> Updated metadata for @402-stellar
export const metadata: Metadata = {
  title: "@402-stellar | Monetize Web3 Effortlessly",
  description:
    "The definitive @402-stellar solution for borderless micropayments and programmatic access control using XLM on the Stellar Network.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${geistMono.variable} ${spaceGrotesk.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
