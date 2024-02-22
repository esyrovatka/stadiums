import { HTMLAttributes } from "react"

type TTypographyColor = "primary" | "secondary" | "white" | "black" | "dark"
type TTypographyWeight = "four" | "five" | "six" | "seven" | "eight"
type TTypographyTag = "h1" | "h2" | "h3" | "h4" | "p"

export interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: TTypographyColor
  weight?: TTypographyWeight
  className?: string
  tag?: TTypographyTag
}
