import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* Nav Bar */}
    <Link href='/adding'
    className="text-sm inline-block self-center rounded-full bg-green-500 px-5 py-3 leading-none text-black hover:bg-green-600 w-44 text-center"
    
    >Add New Project</Link>
    <Link href='/login'
    className="text-sm inline-block self-center rounded-full bg-green-500 px-5 py-3 leading-none text-black hover:bg-green-600 w-44 text-center"
    
    >Login</Link>
    {/*  */}
    </main>
  )
}
