import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import jwtsecret from '@/lib/jwtsecret'
const correctEmail = process.env.EMAIL || 'emailteste@gmail.com'
const correctPassword = process.env.PASSWORD || 'teste'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, password } = body
  if (email !== correctEmail || password !== correctPassword)
    return NextResponse.error()

  const payload = { email, role: 'ADMIN' }
  const token = jwt.sign(payload, jwtsecret, {
    expiresIn: '1d',
  })
  return NextResponse.json({ token })
}
