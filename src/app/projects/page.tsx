// import LoginAlreadyMade from '@/components/LoginAlreadyMade'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Image from 'next/image'

export default async function Home() {
  const response = await api.get('/posts')

  const posts: Project[] = response.data

  return (
    <>
      <div>
        {posts.map((post: Project) => (
          <div key={post.projectImage}>
            <p>{`Isso é favorito: ${post.isFavorite}`}</p>
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
