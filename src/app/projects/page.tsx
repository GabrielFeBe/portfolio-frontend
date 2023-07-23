// import LoginAlreadyMade from '@/components/LoginAlreadyMade'
import { api } from '@/lib/api'
import Image from 'next/image'

export default async function Home() {
  const posts = await api.get('/posts')

  return (
    <>
      <div>
        {posts.data.map((post: any) => (
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
