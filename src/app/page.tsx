"use client"

import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"

const Home: FC = () => {
  const router = useRouter()

  // TODO: add state manager for user auth
  const isUserInit = false
  const [isUserLoad, setIsUserLoad] = useState<boolean>(true)

  useEffect(() => {
    setIsUserLoad(false)
  }, [])

  if (isUserLoad) return <div>Loading...</div>

  if (!isUserInit) router.push("/auth/signup")

  return <main>Stadiums</main>
}

export default Home
