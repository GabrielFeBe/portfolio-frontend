export default interface Project {
  id?: number
  projectImage: string
  repositoryLink: string
  projectDescription: string
  isFavorite: boolean
  title: string
  mainLanguage: string
  createdAt: Date
  deployLink: string
}
