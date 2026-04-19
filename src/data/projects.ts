import { Project } from '@/types'

const getScreenshotUrl = (url: string) => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`

export const projects: Project[] = [
  {
    id: 'task-app',
    title: 'Task App',
    description:
      'A secure full-stack to-do application with authentication and real-time task management for daily productivity workflows.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT Authentication'],
    imageUrl: getScreenshotUrl('https://to-do-list-15y6.vercel.app/'),
    demoUrl: 'https://to-do-list-15y6.vercel.app/',
    featured: true,
  },
  {
    id: 'chatt-app',
    title: 'Chatt',
    description:
      'A real-time chat platform with instant messaging, room-based conversations, and collaborative communication features.',
    technologies: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
    imageUrl: getScreenshotUrl('https://chat-map.onrender.com/'),
    demoUrl: 'https://chat-map.onrender.com/',
    featured: true,
  },
  {
    id: 'network-monitor',
    title: 'Network Monitor App',
    description:
      'Real-time network monitoring dashboard with performance metrics, bandwidth analytics, and system health visualization. Features interactive charts and live alerts for network anomalies.',
    technologies: ['Next.js', 'TypeScript', 'D3.js', 'Node.js'],
    imageUrl: getScreenshotUrl('https://network-monitor-git-dev-subhoxsahas-projects.vercel.app/'),
    demoUrl: 'https://network-monitor-git-dev-subhoxsahas-projects.vercel.app/',
    featured: true,
  },
]

