'use client'
import { api } from '@/lib/api'
import { FormEvent } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import MediaPicker from '@/app/components/MediaPicker'

export default function LoginForm() {
  const router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fileToUpload = formData.get('coverUrl')
    let image = ''
    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)
      const uploadResponse = await api.post('/upload', uploadFormData)
      image = uploadResponse.data
    }
    console.log(image)

    const token = Cookie.get('token')
    await api.post(
      '/posts',
      {
        projectImage: image,
        projectDescription: formData.get('content'),
        repositoryLink: formData.get('repositoryLink'),
      },
      {
        headers: {
          Authorization: token,
        },
      },
    )

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center justify-start">
        <span className="w-60 text-sm leading-snug text-gray-200">
          Coloque aqui seu projeto
        </span>
      </div>
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          {/* <Camera className="h-4 w-4"></Camera> */}
          Anexar mídia
        </label>
        <label
          htmlFor="repositoryLink"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="text"
            name="repositoryLink"
            id="repositoryLink"
            placeholder="link para o repositorio"
            className="ml-1 h-6 w-52 rounded border-gray-400 bg-gray-700 text-purple-500 placeholder:text-purple-500"
          />
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />
      <button
        type="submit"
        className="font-alt inline-block self-end rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Salvar
      </button>
    </form>
  )
}
