import { ym } from './lib/span'

// Source of truth: public/Final_Resume__fullStack.pdf.
// Years drive the stint bars, so every record carries a numeric span.
// `to: null` means "still running" and renders as open-ended.

const about = {
  name: 'Suraj Lokesh',
  predicate:
    'I build the services other people’s products run on — Java, Spring Boot and Node, and lately the AI systems layered on top of them.',
  location: 'Bengaluru, India',
  current: 'City Furniture',
  availability: 'Open to opportunities',
  focus: 'Backend, APIs & applied AI',
  resume: 'Final_Resume__fullStack.pdf',
  social: {
    github: 'https://github.com/surajlokesh',
    linkedin: 'https://www.linkedin.com/in/surajlokesh/',
  },
}

const experience = [
  {
    id: 'city-furniture',
    title: 'Senior Software Engineer, Full-Stack',
    company: 'City Furniture, via True North Infotek',
    place: 'Bengaluru',
    from: ym(2026, 6),
    to: null,
    period: 'Jun 2026 — Present',
    stack: ['Node.js', 'React'],
    detail: [
      'Carrier API integration',
      'Webhooks and bidirectional sync',
      'Idempotency and retries',
      'DispatchTracker',
    ],
  },
  {
    id: 'perfect-solutions',
    title: 'Software Engineer',
    company: 'Perfect Solutions',
    place: 'Miami, Florida',
    from: ym(2025, 9),
    to: ym(2026, 3),
    period: 'Sep 2025 — Mar 2026',
    stack: ['Java', 'Spring Boot', 'React'],
    detail: ['REST APIs', 'JUnit and Mockito', 'CI/CD'],
  },
  {
    id: 'lid-vizion',
    title: 'Generative AI Engineer, Intern',
    company: 'Lid Vizion LLC',
    place: 'Miami, Florida',
    from: ym(2024, 8),
    to: ym(2025, 4),
    period: 'Aug 2024 — Apr 2025',
    stack: ['Python', 'OpenAI API', 'Meshy AI'],
    detail: ['Text-to-3D pipeline', 'Pre-signed S3 URLs', 'MongoDB'],
  },
  {
    id: 'evive',
    title: 'Software Engineer I',
    company: 'Evive Health',
    place: 'Bengaluru',
    from: ym(2021, 1),
    to: ym(2022, 9),
    period: 'Jan 2021 — Sep 2022',
    stack: ['Java', 'Spring Boot', 'AWS'],
    detail: ['Microservices', 'Lambda', 'DynamoDB', 'Docker'],
  },
]

const education = [
  {
    id: 'fiu',
    title: 'MS, Computer Science',
    company: 'Florida International University',
    gpa: '3.9 / 4.0',
    from: 2022,
    to: 2024,
    period: '2022 — 2024',
    stack: ['Algorithms', 'Data Structures', 'Machine Learning'],
    detail: [
      'Advanced Data Science',
      'Principles of Data Analysis',
      'Operating Systems',
    ],
  },
  {
    id: 'sit',
    title: 'BE, Computer Science',
    company: 'Siddaganga Institute of Technology',
    gpa: '3.4 / 4.0',
    from: 2017,
    to: 2021,
    period: '2017 — 2021',
    stack: ['Software Engineering', 'Databases', 'Operating Systems'],
    detail: ['Algorithms', 'Java'],
  },
]

const projects = [
  {
    id: 'focustube',
    name: 'FocusTube',
    description:
      'A paid Chrome extension that strips YouTube down to a search-only interface. Runs entirely client-side, with no server and no data collection. Built, launched, sold and marketed solo.',
    stack: ['Chrome extension', 'JavaScript'],
    status: 'complete',
    links: [{ label: 'focustube.tech', url: 'https://focustube.tech' }],
  },
  {
    id: 'vehicle-telemetry',
    name: 'Real-Time Vehicle Telemetry Platform',
    description:
      'An event-driven pipeline ingesting high-frequency sensor data through Cloud Pub/Sub, feeding live telemetry into Gemini for in-context strategic predictions and pushing updates to the browser over WebSockets at sub-200ms latency.',
    stack: ['FastAPI', 'Next.js', 'GCP', 'Vertex AI', 'Pub/Sub'],
    status: 'complete',
    links: [],
  },
  {
    id: 'market-intelligence',
    name: 'Financial Market Intelligence Platform',
    description:
      'An agentic RAG system where the model orchestrates its own tools — market data APIs, news scrapers — over the Model Context Protocol. Vector embeddings and sentiment analysis turn unstructured news into quantitative signals, with daily briefings generated in under three seconds.',
    stack: ['FastAPI', 'React', 'Model Context Protocol'],
    status: 'complete',
    links: [],
  },
  {
    id: 'resume-analyser',
    name: 'Resume Analyser',
    description:
      'Scores a resume against a job description and reports what is missing, running the OpenAI API behind a Spring Boot service.',
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'OpenAI API'],
    status: 'complete',
    links: [
      {
        label: 'Read the source on GitHub',
        url: 'https://github.com/surajlokesh/Resume_Analyser',
      },
    ],
  },
  {
    id: 'f1-insight',
    name: 'F1 Insight',
    description:
      'An analytics platform for Formula 1 race data. Timing, telemetry and race pace, which is also where this page gets its manners.',
    stack: ['TypeScript', 'React', 'Node.js'],
    status: 'running',
    links: [
      {
        label: 'Read the source on GitHub',
        url: 'https://github.com/F1-Insight/F1-app',
      },
    ],
  },
  {
    id: 'sentiment',
    name: 'Sentiment Analysis',
    description:
      'A model that reads free text and classifies its sentiment, served over a Flask API.',
    stack: ['Python', 'Flask', 'Machine learning'],
    status: 'complete',
    links: [
      {
        label: 'Read the source on GitHub',
        url: 'https://github.com/surajlokesh/Sentiment-Analysis-From-Text-Input',
      },
    ],
  },
  {
    id: 'walmart',
    name: 'Walmart Sales Analysis',
    description:
      'Predicts store-level sales from historical data with PySpark, to plan inventory.',
    stack: ['Python', 'PySpark'],
    status: 'complete',
    links: [
      {
        label: 'Read the source on GitHub',
        url: 'https://github.com/surajlokesh/walmart-Sales-Analysis-using-PySpark',
      },
    ],
  },
]

// Grouped rather than a flat cloud: a reader scanning for "does he know our
// stack" wants the categories, not an alphabet.
const skills = [
  {
    group: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    group: 'Backend',
    items: [
      'Spring Boot',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'Microservices',
      'Event-driven systems',
    ],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
  },
  {
    group: 'AI and machine learning',
    items: [
      'RAG',
      'LangChain',
      'Model Context Protocol',
      'OpenAI API',
      'Vertex AI',
      'Vector databases',
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      'GCP (Cloud Run, Pub/Sub, Vertex AI)',
      'AWS (Lambda, S3, DynamoDB)',
      'Docker',
      'Kubernetes',
      'CI/CD',
    ],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Supabase', 'Redis'],
  },
]

const contact = {
  email: 'surajlokesh12@gmail.com',
  phone: '+91 95137 53355',
}

export { about, experience, education, projects, skills, contact }
