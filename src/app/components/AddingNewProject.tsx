'use client'
import { api } from '@/lib/api'
import React, { FormEvent, useState } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import MediaPicker from '@/app/components/MediaPicker'
import { Camera } from 'lucide-react'
import StatementBall from './StatementBall'

export default function AddingNewProject() {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

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
    const token = Cookie.get('token')

    await api.post(
      '/posts',
      {
        projectImage: image,
        projectDescription: formData.get('content'),
        repositoryLink: formData.get('repositoryLink'),
        isFavorite,
        title: formData.get('title'),
      },
      {
        headers: {
          Authorization: token,
        },
      },
    )

    router.push('/')
    router.refresh()
  }

  return (
    <form
      onSubmit={handleCreateMemory}
      className="flex  min-h-full w-2/3 flex-col gap-2"
    >
      <div className="flex items-center justify-start">
        <StatementBall
          orange="C"
          rest="oloque aqui seu projeto"
          bgColor="customGray"
        />
      </div>
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm "
        >
          <Camera className="h-4 w-4"></Camera>
          Anexar mídia
        </label>
        <label
          htmlFor="repositoryLink"
          className=" ml-1 flex items-center gap-1.5 text-sm "
        >
          <input
            type="text"
            name="repositoryLink"
            id="repositoryLink"
            placeholder="link para o repositorio"
            className="h-6 w-52 rounded border-gray-400 bg-transparent"
          />
        </label>
        <label
          htmlFor="title"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="text"
            name="title"
            id="title"
            placeholder="titulo para o repositorio"
            className="ml-1 h-6 w-52 rounded border-gray-400 bg-transparent"
          />
        </label>
        <label
          htmlFor="isFavorite"
          className="flex items-center gap-1.5 text-sm hover:text-gray-400 "
        >
          <input
            type="checkbox"
            name="isFavorite"
            id="isFavorite"
            checked={isFavorite}
            onChange={() => setIsFavorite(!isFavorite)}
            className="h-4 w-4 appearance-none rounded border-gray-400 bg-gray-700 text-purple-500  checked:bg-purple-900 focus:border-purple-300 focus:outline-none focus:ring"
          />
          Tornar Projeto Favorito
        </label>
      </div>
      <MediaPicker />
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Coloque aqui seus projetos para que eles possam ser visualizados no site/>"
      />
      <button
        type="submit"
        className="font-alt hover:mix-blend inline-block self-end  rounded-full bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-sm uppercase leading-none transition duration-300 hover:opacity-70"
      >
        Salvar
      </button>
    </form>
  )
}
