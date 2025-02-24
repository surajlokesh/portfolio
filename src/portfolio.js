const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://surajlokesh.github.io/portfolio/',
  title: 'SL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Suraj',
  role: 'Software Engineer',
  description:
    'I am a Software Engineer with expertise in full-stack development, specializing in Java, Spring Boot, React, and AWS. I thrive in fast-paced, collaborative environments where I can solve complex problems and build scalable, high-performance applications. With experience in both backend architecture and frontend development, I excel at designing robust APIs, optimizing databases, and creating seamless user experiences. My passion lies in developing impactful solutions that drive efficiency and innovation. I am currently based in Miami, FL, on F1-OPT (STEM eligible), and am open to relocation. Let’s connect and discuss how I can contribute to your team!',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/surajlokesh/',
    github: 'https://github.com/surajlokesh',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'F1-App (Ongoing)',
    description:
      'This is my latest project, where I am working on building an F1 data analytics platform.',
    stack: ['TypeScript', 'React', 'Node js'],
    sourceCode: 'https://github.com/F1-Insight/F1-app',
    livePreview: 'https://github.com',
  },
  {
    name: 'Sentiment-Analysis-From-Text-Input',
    description:
      'A machine learning model that analyzes sentiment from text input.',
    stack: ['Python', 'Flask', 'Machine Learning'],
    sourceCode:
      'https://github.com/surajlokesh/Sentiment-Analysis-From-Text-Input',
    livePreview: 'https://github.com',
  },
  {
    name: 'Walmart Sales Analysis',
    description:
      'A predictive sales analysis tool using PySpark for inventory management.',
    stack: ['Python', 'PySpark'],
    sourceCode:
      'https://github.com/surajlokesh/walmart-Sales-Analysis-using-PySpark',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'TypeScript',
  'React',
  'Spring Boot',
  'Python',
  'AWS (EC2, S3, Lambda, DynamoDB)',
  'Git',
  'CI/CD',
  'Microservices',
  'RESTful APIs',
  'Adobe Photshop',
]

// Add your experiences
const experience = [
  {
    title: 'Software Developer Intern',
    company: 'Lid Vizion, LLC',
    years: '2024 - Present',
    mainTech: ['Python', 'TensorFlow', 'React'],
    technologies: ['Machine Learning', '3D Object Generation', 'Meshy API'],
  },
  {
    title: 'Software Engineer',
    company: 'Evive Health',
    years: '2021 - 2022',
    mainTech: ['Java', 'Spring Boot', 'AWS'],
    technologies: ['Microservices', 'DynamoDB', 'Docker', 'React', 'CI/CD'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Evive Health',
    years: '2021 - 2022',
    mainTech: ['Java', 'Spring Boot', 'AWS'],
    technologies: ['Microservices', 'DynamoDB', 'Docker', 'React', 'CI/CD'],
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'surajlokesh12@gmail.com',
  phone: '+1 305-464-0283',
}

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Florida International University',
    years: '2022 - 2024',
    courses: [
      'Algorithms',
      'Data Structures',
      'Machine Learning',
      'Advance Data Science',
      'Principles of Data Analysis',
      'Operating Systems',
    ],
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'Siddaganga Institute of Technology',
    years: '2017 - 2021',
    courses: [
      'Software Engineering',
      'Databases',
      'Operating Systems',
      'Algorithms',
      'Database',
      'Java',
    ],
  },
]

export { header, about, projects, skills, contact, experience, education }
