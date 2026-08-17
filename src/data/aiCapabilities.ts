export interface AICapability {
  id: string;
  title: string;
  category: 'Integration' | 'Applications' | 'Automation' | 'Enterprise';
  description: string;
  techStack: string[];
  icon: string;
  benefit: string;
}

export const aiCapabilitiesData: AICapability[] = [
  {
    id: 'ai-web-apps',
    title: 'AI-Powered Web Applications',
    category: 'Applications',
    description: 'Transforming traditional web apps into adaptive, context-aware platforms that anticipate user actions and personalize interactions.',
    techStack: ['React', 'Angular', 'TypeScript', 'Streaming APIs'],
    icon: 'Cpu',
    benefit: 'Higher user engagement and streamlined task completion.'
  },
  {
    id: 'llm-integration',
    title: 'LLM Integration',
    category: 'Integration',
    description: 'Integrating foundation Large Language Models seamlessly into existing enterprise backend microservices and databases.',
    techStack: ['OpenAI APIs', 'Claude APIs', 'Node.js', 'LangChain'],
    icon: 'Layers',
    benefit: 'Zero disruption to existing workflows with enterprise data governance.'
  },
  {
    id: 'ai-api-integration',
    title: 'AI API Integration',
    category: 'Integration',
    description: 'Connecting external AI model endpoints with robust retry mechanisms, latency handling, and schema validation.',
    techStack: ['REST', 'GraphQL', 'Express', 'Rate Limiting'],
    icon: 'Network',
    benefit: 'Resilient and predictable AI response handling in production.'
  },
  {
    id: 'ai-workflows',
    title: 'AI-Powered Workflows',
    category: 'Automation',
    description: 'Building multi-step deterministic pipelines that leverage AI for validation, classification, and transformation.',
    techStack: ['Node.js', 'RxJS', 'PostgreSQL', 'Redis'],
    icon: 'Workflow',
    benefit: 'Eliminates repetitive manual verification steps.'
  },
  {
    id: 'intelligent-automation',
    title: 'Intelligent Automation',
    category: 'Automation',
    description: 'Automating business logic, customer routing, and operational exceptions using intelligent decision trees.',
    techStack: ['Node.js', 'AWS Lambda', 'Cron Tasks'],
    icon: 'Zap',
    benefit: 'Drastic reduction in processing turnaround time.'
  },
  {
    id: 'ai-chat-interfaces',
    title: 'AI Chat Interfaces',
    category: 'Applications',
    description: 'Engineering responsive, low-latency streaming chat components with Markdown rendering and conversation memory.',
    techStack: ['React', 'WebSocket', 'Server-Sent Events', 'Tailwind'],
    icon: 'MessageSquare',
    benefit: 'Real-time conversational experiences with natural feel.'
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    category: 'Applications',
    description: 'Dynamic synthesis of reports, document summaries, marketing copy, and structured data outputs on demand.',
    techStack: ['Node.js', 'JSON Schema Parsing', 'PostgreSQL'],
    icon: 'FileText',
    benefit: 'Instant document drafting and structured synthesis.'
  },
  {
    id: 'ai-search',
    title: 'AI-Powered Search',
    category: 'Integration',
    description: 'Semantic and vector-driven search indexing to retrieve relevant enterprise documents and entities by meaning.',
    techStack: ['Embeddings', 'PostgreSQL pgvector', 'Redis'],
    icon: 'Search',
    benefit: 'High-accuracy search results beyond plain keywords.'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    category: 'Automation',
    description: 'Structuring autonomous agents equipped with tool-calling capabilities to execute compound multi-step operational tasks.',
    techStack: ['Tool Calling APIs', 'Node.js', 'State Machines'],
    icon: 'Bot',
    benefit: 'Handles compound tasks with autonomous error recovery.'
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    category: 'Automation',
    description: 'End-to-end trigger-based pipelines that combine OCR, text parsing, database writes, and external webhooks.',
    techStack: ['Express', 'AWS SQS', 'PostgreSQL'],
    icon: 'GitBranch',
    benefit: 'Full straight-through automated document processing.'
  },
  {
    id: 'ai-react-apps',
    title: 'AI + React Applications',
    category: 'Applications',
    description: 'Custom React hooks, state reducers, and optimistic UI updates built specifically for real-time generative streaming.',
    techStack: ['React 18/19', 'Custom Hooks', 'Suspense'],
    icon: 'Code2',
    benefit: 'Silky smooth streaming UI without browser freeze or jank.'
  },
  {
    id: 'ai-nodejs-apps',
    title: 'AI + Node.js Applications',
    category: 'Enterprise',
    description: 'Hardened server-side architectures managing token budgets, prompt template versioning, and cache optimization.',
    techStack: ['Node.js', 'Express', 'Redis Cache', 'Winston'],
    icon: 'Server',
    benefit: 'Cost-optimized token usage with sub-second cache hits.'
  },
  {
    id: 'enterprise-ai-integrations',
    title: 'Enterprise AI Integrations',
    category: 'Enterprise',
    description: 'SOC2/Enterprise compliant integration patterns ensuring data isolation, encryption in transit, and role-based access.',
    techStack: ['AWS IAM', 'PostgreSQL', 'RBAC Security'],
    icon: 'ShieldCheck',
    benefit: 'Strict enterprise compliance and data protection.'
  },
  {
    id: 'api-orchestration',
    title: 'API Orchestration',
    category: 'Enterprise',
    description: 'Centralized API gateway patterns coordinating multiple AI models, fallback fallthroughs, and telemetry monitoring.',
    techStack: ['GraphQL', 'Apollo Server', 'REST Gateway'],
    icon: 'Share2',
    benefit: 'Zero vendor lock-in with multi-model failover.'
  }
];
