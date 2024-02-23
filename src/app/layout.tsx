import { FC, PropsWithChildren } from "react"
import type { Metadata } from "next"
import "@/shared/styles/main.scss"
export const metadata: Metadata = {
  title: "Stadiums",
  description: "Stadiums",
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
