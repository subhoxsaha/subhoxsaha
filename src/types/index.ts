export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  category: string
  items: string[]
}

export interface NavLink {
  href: string
  label: string
}
