import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Nav Bar */}
      <Link
        href="/adding"
        className="inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-center text-sm leading-none text-black hover:bg-green-600"
      >
        Add New Project
      </Link>
      <Link
        href="/login"
        className="inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-center text-sm leading-none text-black hover:bg-green-600"
      >
        Login
      </Link>
      {/*  */}
    </main>
  )
}
