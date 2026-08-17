export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Production-Grade', 'Architectural'
    experience: string;
    highlight?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description: 'Component architecture, reactive state management, micro-frontends, and high-performance user interfaces.',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 'Architectural', experience: '9+ Yrs', highlight: true },
      { name: 'Angular', level: 'Architectural', experience: '9+ Yrs', highlight: true },
      { name: 'TypeScript', level: 'Production-Grade', experience: '7+ Yrs', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Expert', experience: '9+ Yrs' },
      { name: 'RxJS', level: 'Advanced', experience: '6+ Yrs', highlight: true },
      { name: 'Redux / Toolkit', level: 'Advanced', experience: '7+ Yrs' },
      { name: 'Angular Material', level: 'Production-Grade', experience: '6+ Yrs' },
      { name: 'HTML5 & CSS3', level: 'Expert', experience: '9+ Yrs' },
      { name: 'Tailwind CSS', level: 'Advanced', experience: '5+ Yrs' },
      { name: 'Bootstrap', level: 'Advanced', experience: '8+ Yrs' },
      { name: 'Responsive Design', level: 'Expert', experience: '9+ Yrs' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Scalable server-side microservices, distributed API layers, robust authentication, and high-throughput routing.',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'Architectural', experience: '9+ Yrs', highlight: true },
      { name: 'Express.js', level: 'Production-Grade', experience: '9+ Yrs', highlight: true },
      { name: 'GraphQL', level: 'Production-Grade', experience: '6+ Yrs', highlight: true },
      { name: 'Apollo Client / Server', level: 'Advanced', experience: '6+ Yrs', highlight: true },
      { name: 'GraphQL Queries & Mutations', level: 'Expert', experience: '6+ Yrs' },
      { name: 'REST APIs', level: 'Architectural', experience: '9+ Yrs', highlight: true },
      { name: 'Server-Side Development', level: 'Expert', experience: '9+ Yrs' },
      { name: 'Authentication & JWT', level: 'Production-Grade', experience: '8+ Yrs' },
      { name: 'Authorization & RBAC', level: 'Production-Grade', experience: '8+ Yrs' }
    ]
  },
  {
    id: 'database',
    name: 'Database & Caching',
    description: 'Relational data modeling, complex SQL query tuning, ACID transactions, and sub-millisecond caching layers.',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Architectural', experience: '8+ Yrs', highlight: true },
      { name: 'SQL & Query Optimization', level: 'Expert', experience: '9+ Yrs', highlight: true },
      { name: 'MySQL', level: 'Advanced', experience: '7+ Yrs' },
      { name: 'MongoDB', level: 'Advanced', experience: '6+ Yrs' },
      { name: 'Redis', level: 'Production-Grade', experience: '6+ Yrs', highlight: true },
      { name: 'Firebase / Firestore', level: 'Advanced', experience: '5+ Yrs' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Cloud-native infrastructure, serverless compute, identity access management, and reliable deployment pipelines.',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 'Production-Grade', experience: '7+ Yrs', highlight: true },
      { name: 'AWS Lambda', level: 'Advanced', experience: '6+ Yrs', highlight: true },
      { name: 'API Gateway', level: 'Advanced', experience: '6+ Yrs' },
      { name: 'DynamoDB', level: 'Advanced', experience: '5+ Yrs' },
      { name: 'IAM Security', level: 'Production-Grade', experience: '7+ Yrs' },
      { name: 'GCP (Google Cloud)', level: 'Production-Grade', experience: '5+ Yrs', highlight: true },
      { name: 'Firebase Hosting', level: 'Advanced', experience: '6+ Yrs' }
    ]
  },
  {
    id: 'ai',
    name: 'AI Engineering & LLM Integration',
    description: 'Bridging full-stack architectures with modern AI APIs, autonomous agent workflows, and intelligent interfaces.',
    icon: 'Sparkles',
    skills: [
      { name: 'AI Application Development', level: 'Specialization', experience: 'Modern', highlight: true },
      { name: 'LLM Integration', level: 'Specialization', experience: 'Modern', highlight: true },
      { name: 'AI APIs Orchestration', level: 'Specialization', experience: 'Modern', highlight: true },
      { name: 'AI Automation & Agents', level: 'Specialization', experience: 'Modern', highlight: true },
      { name: 'AI-Powered Workflows', level: 'Specialization', experience: 'Modern', highlight: true },
      { name: 'AI Semantic Search', level: 'Specialization', experience: 'Modern' },
      { name: 'AI Chat Applications', level: 'Specialization', experience: 'Modern' },
      { name: 'AI Content Generation', level: 'Specialization', experience: 'Modern' }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Ecosystem',
    description: 'Engineering workflows, developer tooling, version control, API testing, and automated bundling.',
    icon: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', experience: '9+ Yrs', highlight: true },
      { name: 'Postman / Insomnia', level: 'Expert', experience: '9+ Yrs' },
      { name: 'VS Code', level: 'Expert', experience: '9+ Yrs' },
      { name: 'npm & Package Mgmt', level: 'Expert', experience: '9+ Yrs' },
      { name: 'Vite & Webpack', level: 'Advanced', experience: '6+ Yrs', highlight: true },
      { name: 'Agile / Scrum', level: 'Production-Grade', experience: '9+ Yrs' }
    ]
  }
];
