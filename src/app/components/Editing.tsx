'use client'
import { api } from '@/lib/api'
import React, { FormEvent, useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import { useParams, useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import DatePickerComp from './DatePicker'
import Project from '@/types/Projects'
import { SingleImageDropzone } from './MediaPicker'
import { useEdgeStore } from '@/lib/edgestore'

interface Props {
  project: Project
}

export default function Editing({ project }: Props) {
  const [startDate, setStartDate] = useState(new Date(project.createdAt))
  const [isFavorite, setIsFavorite] = useState<boolean>(project.isFavorite)
  const [formError, setFormError] = useState(false)
  const [description, setDescription] = useState(project.projectDescription)
  const [mainLanguage, setMainLanguage] = useState(project.mainLanguage)
  const [repLink, setRepLink] = useState(project.repositoryLink)
  const [title, setTitle] = useState(project.title)
  const [file, setFile] = useState<File | string>()

  const { edgestore } = useEdgeStore()
  const router = useRouter()
  const params = useParams()
  console.log(`/posts/editing/${params.id}`)
  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const dateTime = dayjs(startDate).format()
    let image = project.projectImage
    const token = Cookie.get('token')
    if (!token) return setFormError(true)
    if (file instanceof File) {
      try {
        const response = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
            // you can use this to show a progress bar
            console.log(progress)
          },
          input: { token },
        })
        image = response.url
      } catch (err) {
        console.log(err)
        setFormError(true)
      }
    }
    try {
      await api.patch(
        `/posts/editing/${params.id}`,
        {
          projectImage: image,
          projectDescription: formData.get('content'),
          repositoryLink: formData.get('repositoryLink'),
          isFavorite,
          title: formData.get('title'),
          mainLanguage: formData.get('mainLanguage'),
          createdAt: dateTime,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      router.push('/')
      router.refresh()
    } catch (err) {
      console.log(err)
      setFormError(true)
    }
  }

  useEffect(() => {
    setFile(project.projectImage)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form
      onSubmit={handleCreateMemory}
      className="relative flex min-h-full w-full flex-col gap-2 xl:w-2/3"
    >
      <div className="flex flex-wrap items-center gap-4">
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
            value={repLink}
            onChange={({ target }) => setRepLink(target.value)}
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
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <label
          htmlFor="mainLanguage"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="text"
            name="mainLanguage"
            id="mainLanguage"
            placeholder="Linguagem principal do projeto"
            className="ml-1 h-6 w-52 rounded border-gray-400 bg-transparent"
            value={mainLanguage}
            onChange={({ target }) => setMainLanguage(target.value)}
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
        <DatePickerComp setStartDate={setStartDate} startDate={startDate} />
      </div>
      <SingleImageDropzone
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        width={'50%' as any}
        height={500}
        value={file}
        onChange={(file) => {
          setFile(file)
        }}
        className="bg-black"
      ></SingleImageDropzone>
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="<Coloque aqui seus projetos para que eles possam ser visualizados no site/>"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <button
        type="submit"
        className="font-alt hover:mix-blend inline-block self-end  rounded-full bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-sm uppercase leading-none transition duration-300 hover:opacity-70"
      >
        Salvar
      </button>
      {formError && (
        <p className="relative font-bold text-red-600">
          Você não tem permissão para colocar nada no banco.
        </p>
      )}
    </form>
  )
}
