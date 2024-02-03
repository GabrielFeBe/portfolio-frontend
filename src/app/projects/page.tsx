// import LoginAlreadyMade from '@/components/LoginAlreadyMade'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
// import Image from 'next/image'
import ProjectsHome from '../components/ProjectsHome'

export default async function Home() {
  let posts: Project[] = []
  let error = false
  try {
    const response = await api.get('/posts')
    console.log(response)
    posts = response.data
  } catch (err) {
    error = true
  }
  if (error)
    return (
      <h1 className="h-[578px] w-full bg-customSlate pt-20 text-center text-6xl font-bold text-red-500">
        SERVER ERROR
      </h1>
    )
  return (
    <main>
      <ProjectsHome projects={posts} />
    </main>
  )
}
