export interface Experience {
  title: string
  company: string
  location: string
  date: string
  description: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Robotics Society Member',
    company: 'KGEC Robotics Society',
    location: 'Kalyani, Nadia',
    date: 'June 2025 – Present',
    description: [
      'Assisted in robotics and embedded systems activities, gaining hands-on exposure to electronics projects.',
      'Conducted technical seminars and workshops on robotics, IoT, and basic embedded systems.',
      'Collaborated with peers on technical discussions, demonstrations, and knowledge-sharing sessions.',
    ],
  },
]

export interface Education {
  degree: string
  field: string
  school: string
  location: string
  date: string
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Electronics and Communication Engineering',
    school: 'Kalyani Government Engineering College',
    location: 'Kalyani, Nadia',
    date: 'Aug 2024 – May 2028',
  },
]
