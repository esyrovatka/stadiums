import { FC, PropsWithChildren } from "react"
import { Poppins } from "next/font/google"
import type { Metadata } from "next"

import "@/shared/styles/main.scss"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stadiums",
  description: "Stadiums",
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
