'use client'
import { api } from '@/lib/api'
import { FormEvent } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const route = useRouter()

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    try {
      const uploadResponse = await api.post('user/login', {
        email: formData.get('email'),
        password: formData.get('password'),
      })
      const { token } = uploadResponse.data
      Cookies.set('token', token, { expires: 7 })
      route.push('/adding')
      // eslint-disable-next-line
    } catch (err: any) {
      console.log(err.response.data.message)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form
        onSubmit={handleLogin}
        action=""
        className="flex h-96 flex-col justify-evenly"
      >
        <input
          type="text"
          className="m-1 h-14 w-96 rounded-lg p-2 text-black"
          name="email"
        />
        <input
          type="password"
          className="m-1 h-14 w-96 rounded-lg p-2 text-black"
          name="password"
        />
        <button
          type="submit"
          className="font-alt inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
        >
          Logando
        </button>
      </form>
    </main>
  )
}
