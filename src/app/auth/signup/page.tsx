"use client"
import { FC, FormEvent } from "react"
import styles from "./page.module.scss"
import { Typography } from "@/shared"
import Image from "next/image"

const SignUp: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/img/signup1.webp"
        alt="img"
        width={1123}
        height={749}
        className={styles["wrapper__image-top"]}
      />
      <Image
        src="/assets/img/signup2.webp"
        alt="img"
        width={1093}
        height={729}
        className={styles["wrapper__image-bottom"]}
      />
      <form className={styles.wrapper__form} onSubmit={handleSubmit}>
        <Typography tag="h2" weight="six" className={styles.wrapper__title}>
          Login
        </Typography>

        <input />
        <input />

        <div className={styles.wrapper__remember}>
          <input type="checkbox" />
          <Typography>Remember me</Typography>
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignUp
