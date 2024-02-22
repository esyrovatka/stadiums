import { FC, PropsWithChildren, useMemo } from "react"

import { classNames } from "@/shared/lib"
import { ITypographyProps } from "../types"

import styles from "./Typography.module.scss"

const Typography: FC<PropsWithChildren<ITypographyProps>> = props => {
  const { className, children, color = "black", weight = "four", tag: Tag = "p", ...otherProps } = props

  const combinedClassName = useMemo(
    () => classNames(styles.text, { [styles[color]]: true, [styles[weight]]: true }, [className]),
    [color, weight, className],
  )

  return (
    <Tag className={combinedClassName} {...otherProps}>
      {children}
    </Tag>
  )
}

export default Typography
