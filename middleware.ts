import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const DEVELOPMENT_USER = "user"
const DEVELOPMENT_PASSWORD = "password"

export function middleware(request: NextRequest) {
  const authorizationHeader = request.headers.get("authorization")
  if (!authorizationHeader || !authorizationHeader.startsWith("Basic ")) {
    return new Response(null, {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "WWW-Authenticate": "Basic realm='Development Access'",
      },
    })
  }

  const encodedCredentials = authorizationHeader.replace("Basic ", "")
  const decodedCredentials = atob(encodedCredentials)

  const [username, password] = decodedCredentials.split(":")
  if (username !== DEVELOPMENT_USER || password !== DEVELOPMENT_PASSWORD) {
    return new Response(null, {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "WWW-Authenticate": "Basic realm='Development Access'",
      },
    })
  }

  return NextResponse.next()
}
