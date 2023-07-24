// import LoginAlreadyMade from '@/components/LoginAlreadyMade'
import { api } from '@/lib/api'
import Image from 'next/image'
interface Project {
  projectImage: string
  repositoryLink: string
  projectDescription: string
}

export default async function Home() {
  const response = await api.get('/posts')

  const posts: Project[] = response.data

  return (
    <>
      <div>
        {posts.map((post: Project) => (
          <div key={post.projectImage}>
            <Image
              src={post.projectImage}
              alt="Project made by gabriel"
              width={592}
              height={280}
            />
            <a href={post.repositoryLink}>Link para o repositorio</a>
            <p>{post.projectDescription}</p>
          </div>
        ))}
      </div>
    </>
  )
}
