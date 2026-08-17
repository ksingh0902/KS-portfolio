export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  technologies: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Development',
    shortDesc: 'End-to-end application development.',
    fullDesc: 'Complete turn-key architectural design, frontend development, server-side APIs, database schemas, cloud infrastructure, and CI/CD pipelines engineered for reliability and high scale.',
    deliverables: [
      'Production-ready web application',
      'Clean modular architecture',
      'Continuous deployment pipeline',
      'End-to-end testing suite'
    ],
    technologies: ['React', 'Angular', 'Node.js', 'PostgreSQL', 'AWS'],
    icon: 'Layers'
  },
  {
    id: 'react-dev',
    title: 'React Development',
    shortDesc: 'Modern scalable React applications.',
    fullDesc: 'Architecting robust React client applications with TypeScript, modular design systems, optimized state management, and high-conversion UX.',
    deliverables: [
      'Custom reusable component library',
      'Responsive design across devices',
      'Performance audit & bundle optimization',
      'State management architecture'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Vite'],
    icon: 'Atom'
  },
  {
    id: 'angular-dev',
    title: 'Angular Development',
    shortDesc: 'Enterprise Angular applications.',
    fullDesc: 'Building enterprise-scale Single Page Applications with Angular, RxJS reactive programming, Angular Material design patterns, and strict TypeScript types.',
    deliverables: [
      'Modular Angular architecture',
      'Reactive forms & validation flows',
      'RxJS stream pipelines',
      'Enterprise design system integration'
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
    icon: 'Shield'
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend Development',
    shortDesc: 'Scalable Node.js and Express.js backend systems.',
    fullDesc: 'Engineering performant backend microservices with Express.js, structured error handling, asynchronous event loops, and bulletproof security practices.',
    deliverables: [
      'High-throughput REST/GraphQL endpoints',
      'JWT/OAuth authentication & RBAC',
      'Background workers & task queues',
      'Comprehensive API documentation'
    ],
    technologies: ['Node.js', 'Express.js', 'JWT', 'Winston', 'Jest'],
    icon: 'Server'
  },
  {
    id: 'api-dev',
    title: 'API Development',
    shortDesc: 'REST and GraphQL APIs.',
    fullDesc: 'Designing and deploying high-performance RESTful interfaces and flexible GraphQL schemas with Apollo Client / Server and optimistic caching.',
    deliverables: [
      'GraphQL Schema & Resolver design',
      'RESTful OpenAPI / Swagger specifications',
      'Rate limiting & API throttling',
      'Automated integration test suites'
    ],
    technologies: ['GraphQL', 'Apollo', 'REST', 'Postman', 'Express'],
    icon: 'Share2'
  },
  {
    id: 'database-dev',
    title: 'Database Development',
    shortDesc: 'PostgreSQL and SQL solutions.',
    fullDesc: 'Relational data modeling, schema migrations, query profiling, index optimization, and distributed caching strategies with Redis for sub-millisecond lookups.',
    deliverables: [
      'Optimized schema & relational models',
      'Indexing & query tuning strategy',
      'Automated migration scripts',
      'Redis caching implementation'
    ],
    technologies: ['PostgreSQL', 'SQL', 'MySQL', 'MongoDB', 'Redis'],
    icon: 'Database'
  },
  {
    id: 'cloud-dev',
    title: 'Cloud Development',
    shortDesc: 'AWS and GCP applications.',
    fullDesc: 'Cloud-native deployment, serverless architectures with AWS Lambda & API Gateway, cloud storage, IAM security policies, and GCP integrations.',
    deliverables: [
      'Serverless function architectures',
      'Cloud storage & CDN configuration',
      'IAM security hardening',
      'High-availability hosting strategy'
    ],
    technologies: ['AWS', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'GCP'],
    icon: 'Cloud'
  },
  {
    id: 'ai-app-dev',
    title: 'AI Application Development',
    shortDesc: 'AI-powered applications and AI integrations.',
    fullDesc: 'Infusing generative AI, LLM APIs, autonomous agents, and intelligent workflows directly into your web applications and backend systems.',
    deliverables: [
      'LLM API orchestrations & prompt chains',
      'Streaming chat & generative UI',
      'Document parsing & AI automation',
      'AI error fallback & token caching'
    ],
    technologies: ['LLM APIs', 'AI Agents', 'OpenAI', 'Claude', 'Node.js'],
    icon: 'Sparkles'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    shortDesc: 'Interactive dashboards and data visualization.',
    fullDesc: 'Transforming raw operational and financial data into interactive, real-time executive dashboards, KPI monitors, and drill-down charts.',
    deliverables: [
      'Interactive chart & metric views',
      'Multi-variable filtering & sorting grids',
      'CSV / PDF export capabilities',
      'Fast rendering for large datasets'
    ],
    technologies: ['React', 'Data Grids', 'SVG Charts', 'GraphQL', 'SQL'],
    icon: 'BarChart3'
  },
  {
    id: 'app-modernization',
    title: 'Application Modernization',
    shortDesc: 'Modernizing existing and legacy applications.',
    fullDesc: 'Refactoring legacy codebases into modern TypeScript, upgrading framework versions, untangling monolithic backends, and boosting overall performance.',
    deliverables: [
      'Legacy code audit & refactor roadmap',
      'Incremental migration strategy',
      'Zero-downtime database upgrades',
      'Modern UI/UX redesign'
    ],
    technologies: ['TypeScript', 'React Migration', 'Angular Upgrades', 'Node.js'],
    icon: 'RefreshCw'
  }
];
