'use client'
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const route = useRouter()
  return (
    <>
   { route.push('/adding')}
    </>
    )
}


