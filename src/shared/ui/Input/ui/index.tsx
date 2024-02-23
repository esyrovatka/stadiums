"use client"

import { FC, useId } from "react"
import { InputProps } from "../types"

import styles from "./Input.module.scss"
import { classNames } from "@/shared/lib"

const Input: FC<InputProps> = props => {
  const { label, className, ...otherProps } = props

  const id = useId()

  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...otherProps} className={classNames(styles.wrapper__input, {}, [className])} />
    </div>
  )
}

export default Input
