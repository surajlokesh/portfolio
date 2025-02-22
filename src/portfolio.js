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
    github: 'https://github.com/surajlokesh?tab=repositories',
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
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'surajlokesh12@gmail.com',
  phone: '+1 305-464-0283',
}

export { header, about, projects, skills, contact }
