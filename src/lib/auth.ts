import { cookies } from 'next/headers'
import * as jwt from 'jsonwebtoken'


declare module 'jsonwebtoken' {
   interface UserIDJwtPayload extends jwt.JwtPayload {
      email:string
      id:number
  }
}
export function getUser() {
  const token = cookies().get('token')?.value
  if (!token) {
    throw new Error('Unaunthenticated')
  }
  const user = <jwt.UserIDJwtPayload>jwt.decode(token);
  return user
  
}
