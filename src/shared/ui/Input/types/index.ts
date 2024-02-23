import { InputHTMLAttributes } from "react"

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">
export interface InputProps extends HtmlInputProps {
  label?: string
  className?: string
}
