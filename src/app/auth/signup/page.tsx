import { FC } from "react"
import styles from "./page.module.scss"
import { Typography } from "@/shared"

const SignUp: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Typography tag="h1" weight="six">
        Sign Up
      </Typography>
    </div>
  )
}

export default SignUp
