export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Frontend Frameworks',
    items: ['React', 'Material-UI', 'Tailwind CSS', 'WordPress'],
  },
  {
    category: 'Backend Frameworks',
    items: ['Node.js', 'Express', 'Flask', 'FastAPI'],
  },
  {
    category: 'Databases & Tools',
    items: ['MongoDB', 'Git', 'Postman', 'VS Code'],
  },
  {
    category: 'Data & ML',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
  },
  {
    category: 'Hardware & IoT',
    items: ['Arduino UNO', 'ESP32', 'OpenCV', 'Embedded Systems'],
  },
]
