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
      route.refresh()
      // eslint-disable-next-line
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-24">
      <form
        onSubmit={handleLogin}
        action=""
        className="flex h-96 flex-col justify-evenly"
      >
        <label
          htmlFor="email"
          className="border-gradient flex h-[40px] w-[268px] items-center justify-center rounded-lg bg-gradient-to-r from-customOrange to-customRed p-2 sm:h-[58px] sm:w-[386px]"
        >
          <input
            type="text"
            className="h-[38px] w-[266px] flex-shrink-0 rounded-lg bg-customGray pl-2 sm:h-14 sm:w-[384px]"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>
        <label
          htmlFor="password"
          className="flex h-[40px] w-[268px] items-center justify-center rounded-lg bg-gradient-to-r from-customOrange to-customRed p-2 sm:h-[58px] sm:w-[386px]"
        >
          <input
            type="password"
            id="password"
            className="h-[38px] w-[266px] flex-shrink-0 rounded-lg bg-customGray pl-2 sm:h-14 sm:w-[384px]"
            name="password"
            placeholder="Senha"
          />
        </label>
        <button
          type="submit"
          className="hover:mix-blend inline-block w-44 self-center rounded-full bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-center text-sm leading-none text-black transition duration-300 hover:opacity-70"
        >
          Logando
        </button>
      </form>
    </main>
  )
}
