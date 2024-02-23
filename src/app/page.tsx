"use client"

import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"

const Home: FC = () => {
  const router = useRouter()

  // TODO: add state manager for user auth
  const [isUserLoad, setIsUserLoad] = useState<boolean>(true)

  useEffect(() => {
    setIsUserLoad(false)
    router.push("/auth/signup")
  }, [])

  if (isUserLoad) return <div>Loading...</div>

  return <main>Stadiums</main>
}

export default Home
