// import LoginAlreadyMade from '@/components/LoginAlreadyMade'
import AdminButton from '@/components/AdminButton'
import LoginForm from '@/components/LoginFrom'
// import Navigation from '@/components/Navigation'
// import { cookies } from 'next/headers'

export default function Home() {
  // const isAuthenticated = cookies().has('token')
  // if(isAuthenticated){
  //   return (
  //     <Navigation/>
  //   )
  // }

  return (
    <>
      <LoginForm />
      <AdminButton />
    </>
  )
}
