'use client'
import { api } from '@/lib/api'
import { FormEvent } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function LoginForm(){
  const route = useRouter()


  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    try {
      const uploadResponse = await api.post('user/login', { email: formData.get('email' ) , password: formData.get('password')})
      const { token } = uploadResponse.data
      Cookies.set('token',token,{expires:7 })
      route.push('/adding')
      
    } catch(err: any){
      console.log(err.response.data.message)
     }

    
  }

  return (

    <main  className="flex min-h-screen flex-col items-center justify-center p-24">
        <form onSubmit={handleLogin} action="" className='flex flex-col h-96 justify-evenly'>
         <input type="text" className='p-2 rounded-lg w-96 m-1 h-14 text-black' name='email'/>
         <input type="password"  className='p-2 rounded-lg w-96 m-1 h-14 text-black' name='password'/>
         <button
           type="submit"
           className="text-sm inline-block self-center rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black hover:bg-green-600 w-44"
         >
           Logando
         </button>
        </form>
   
       </main>
    
     )
}