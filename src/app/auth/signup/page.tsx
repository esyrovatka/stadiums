"use client"
import { FC, FormEvent } from "react"
import styles from "./page.module.scss"
import { Input, Typography } from "@/shared"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SignUp: FC = () => {
  const router = useRouter()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push("/")
  }
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/img/signup1.webp"
        alt="img"
        width={110}
        height={195}
        className={styles["wrapper__image-top"]}
      />
      <Image
        src="/assets/img/signup2.webp"
        alt="img"
        width={103}
        height={171}
        className={styles["wrapper__image-bottom"]}
      />
      <Image
        src="/assets/img/signup3.webp"
        alt="img"
        width={1123}
        height={749}
        className={styles["wrapper__image-top__desktop"]}
      />
      <Image
        src="/assets/img/signup4.webp"
        alt="img"
        width={1093}
        height={729}
        className={styles["wrapper__image-bottom__desktop"]}
      />
      <form className={styles.wrapper__form} onSubmit={handleSubmit}>
        <Typography tag="h2" weight="six" className={styles.wrapper__title}>
          Login
        </Typography>

        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />

        <div className={styles.wrapper__remember}>
          <Input type="checkbox" />
          <Typography>Remember me</Typography>
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignUp
