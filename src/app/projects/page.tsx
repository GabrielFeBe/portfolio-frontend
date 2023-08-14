// import LoginAlreadyMade from '@/components/LoginAlreadyMade'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
// import Image from 'next/image'
import ProjectsHome from '../components/ProjectsHome'

export default async function Home() {
  const response = await api.get('/posts')

  const posts: Project[] = response.data

  return (
    <main>
      <ProjectsHome projects={posts} />
    </main>
  )
}
