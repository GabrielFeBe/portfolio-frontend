import AboutMe from './components/aboutme/AboutMe'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Stacks from './components/aboutme/Stacks'
import ProjectsHome from './components/ProjectsHome'
import StatementBall from './components/StatementBall'

export default async function Home() {
  let data: Project[] = []
  let error = false
  const asyncRequest = async () => {
    // Usando a função setTimeout para simular um atraso de 15 segundos
    // await new Promise((resolve) => setTimeout(resolve, 15000))
    const response = await api.get('/favorites')
    data = response.data
    return Promise.resolve('certo')
  }

  const checkServerStatus = async () => {
    return new Promise((resolve, reject) => {
      const timeToThrowErrorIfServerIsDown = 7000
      const clearIfApiIsFine = setTimeout(() => {
        console.log('demorou muito')
        reject(new Error('Server is down'))
      }, timeToThrowErrorIfServerIsDown)

      asyncRequest()
        .then((res) => {
          console.log(res)
          clearTimeout(clearIfApiIsFine)
          return resolve('done')
        })
        .catch((err) => {
          console.log(err)
          clearTimeout(clearIfApiIsFine)
          reject(new Error('Server is down'))
        })
    })
  }

  try {
    await checkServerStatus()
    console.log(data)
    // const response = await api.get('/favorites')
    // console.log(response)
    // data = response.data
  } catch (err) {
    error = true
  }

  return (
    <main>
      <div className="grid bg-customGray sm:h-[1000px] sm:grid-cols-1 lg:h-[578px] lg:grid-cols-2">
        {/* right side */}
        <div className="flex w-5/6 flex-1 flex-col justify-center pl-20">
          <AboutMe />
        </div>
        {/* left side */}
        <Stacks />
      </div>
      {/* down side */}
      <div className="bg-customSlate pt-10">
        <StatementBall orange="P" rest="rojetos" bgColor="bg-customSlate" />
      </div>
      {error ? (
        <h1 className="h-[578px] w-full bg-customSlate pt-20 text-center text-6xl font-bold text-red-500">
          SERVER ERROR
        </h1>
      ) : (
        <ProjectsHome projects={data} />
      )}
    </main>
  )
}
