import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_TC, Pacifico } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const _pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "萌萌茶屋 Meng-Meng-Cha-wu ✨萌境茶敘",
  description: "復古粉日式茶屋 一茶一坐享溫柔",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={`font-sans antialiased ${_notoSansTC.className} ${_pacifico.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
