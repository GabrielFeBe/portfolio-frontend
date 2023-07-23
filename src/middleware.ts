import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const signInURL = 'http://localhost:3000/login'
  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; path=/; HttpOnly; max-age=600;`,
      },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/adding/:path*',
}
