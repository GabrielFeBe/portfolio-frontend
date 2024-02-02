import { cookies } from 'next/headers'
import * as jwt from 'jsonwebtoken'

declare module 'jsonwebtoken' {
  interface UserRoleJwtPayload extends jwt.JwtPayload {
    email: string
    role: string
  }
}
// export function getUser() {
//   const token = cookies().get('token')?.value
//   if (!token) {
//     throw new Error('Unaunthenticated')
//   }
//   const user = <jwt.UserIDJwtPayload>jwt.decode(token)
//   return user
// }
