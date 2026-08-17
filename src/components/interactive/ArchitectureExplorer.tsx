import React, { useState, useRef } from 'react';
import { Layout, Code2, Network, Server, Database, Zap, Cloud, Sparkles, CheckCircle2, Activity, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ArchitectureTier {
  id: string;
  name: string;
  subtitle: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
  accentBorder: string;
  description: string;
  enterpriseFeatures: string[];
  samplePayload: string;
}

export const ArchitectureExplorer: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>('frontend');
  const detailsRef = useRef<HTMLDivElement>(null);

  const tiers: ArchitectureTier[] = [
    {
      id: 'frontend',
      name: 'Frontend Layer',
      subtitle: 'React / Angular',
      technologies: ['React 18/19', 'Angular 17+', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Redux'],
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/10',
      accentBorder: 'border-cyan-500/40',
      description: 'Component-driven, accessible, and reactive user interfaces optimized for high-conversion UX and micro-second responsiveness across devices.',
      enterpriseFeatures: [
        'Atomic component hierarchy & design tokens',
        'Optimistic UI mutations with zero layout shifts',
        'RxJS reactive stream pipelines & observables',
        'WCAG AA accessibility & responsive layouts'
      ],
      samplePayload: `// Reactive State & Component Hook
const { data, loading, mutate } = useEnterpriseQuery({
  query: GET_FINANCIAL_METRICS,
  variables: { timeRange: 'Q3_2026' },
  cachePolicy: 'cache-and-network'
});`
    },
    {
      id: 'app-layer',
      name: 'Application Layer',
      subtitle: 'TypeScript / JavaScript',
      technologies: ['TypeScript Strict', 'ESNext', 'Schema Validation', 'Zod', 'RxJS Flows'],
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/10',
      accentBorder: 'border-blue-500/40',
      description: 'Strict end-to-end type safety, runtime payload validation, shared data contracts, and deterministic business logic.',
      enterpriseFeatures: [
        'Strict type contracts shared across client & server',
        'Runtime schema validation preventing corrupt states',
        'Immutable state reducers & functional helpers',
        'Unit & integration test suites'
      ],
      samplePayload: `export interface TransactionPayload {
  readonly id: UUID;
  readonly amount: Decimal;
  readonly currency: 'USD' | 'CAD';
  readonly status: 'PENDING' | 'SETTLED';
  readonly metadata: Record<string, unknown>;
}`
    },
    {
      id: 'api-layer',
      name: 'API Layer',
      subtitle: 'REST / GraphQL / Apollo',
      technologies: ['GraphQL', 'Apollo Client', 'RESTful Endpoints', 'OpenAPI', 'WebSockets'],
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      color: 'from-indigo-500/20 to-purple-500/10',
      accentBorder: 'border-indigo-500/40',
      description: 'Unified gateway providing efficient data querying, GraphQL Queries & Mutations, REST endpoints, and secure API contracts.',
      enterpriseFeatures: [
        'Apollo GraphQL schema stitch & federated subgraphs',
        'Elimination of over-fetching with precise selections',
        'JWT bearer token authentication & rate throttling',
        'Real-time streaming via Server-Sent Events / WS'
      ],
      samplePayload: `query GetLoanPortfolio($userId: ID!) {
  user(id: $userId) {
    creditScore
    applications(limit: 5) {
      loanId
      status
      approvedAmount
    }
  }
}`
    },
    {
      id: 'backend',
      name: 'Backend Services',
      subtitle: 'Node.js / Express.js',
      technologies: ['Node.js', 'Express.js', 'Async Event Loop', 'Winston Logging', 'Middleware'],
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10',
      accentBorder: 'border-emerald-500/40',
      description: 'Resilient Node.js and Express.js microservices engineered for high concurrency, robust middleware chains, and clean modular domain logic.',
      enterpriseFeatures: [
        'Non-blocking async I/O handling thousands of req/sec',
        'Centralized error propagation & structured JSON logs',
        'Role-based access control (RBAC) middleware',
        'Graceful shutdown & worker pool management'
      ],
      samplePayload: `app.post('/api/v1/migrate-account', 
  authenticateJWT,
  validateSchema(MigrationSchema),
  async (req, res, next) => {
    const result = await migrationService.execute(req.body);
    return res.status(200).json({ success: true, result });
  }
);`
    },
    {
      id: 'data',
      name: 'Data Layer',
      subtitle: 'PostgreSQL / SQL / MongoDB',
      technologies: ['PostgreSQL', 'SQL Optimizations', 'MongoDB', 'ACID Transactions', 'Prisma / Knex'],
      icon: <Database className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/10',
      accentBorder: 'border-amber-500/40',
      description: 'Mission-critical relational data modeling, query optimization, indexed table partitions, and transactional consistency.',
      enterpriseFeatures: [
        'Strict ACID guarantees for banking & loan workflows',
        'Indexed queries with sub-10ms execution times',
        'Automated database migration scripts & seeders',
        'Point-in-time recovery & automated replication'
      ],
      samplePayload: `BEGIN TRANSACTION;
UPDATE accounts 
  SET balance = balance - 5000.00, updated_at = NOW() 
  WHERE account_id = 'c4b8e2' AND balance >= 5000.00;
INSERT INTO audit_logs (event_type, payload) VALUES (...);
COMMIT;`
    },
    {
      id: 'cache',
      name: 'Caching Layer',
      subtitle: 'Redis',
      technologies: ['Redis In-Memory', 'Pub/Sub', 'Rate Limiting', 'Key Eviction', 'Session Storage'],
      icon: <Zap className="w-5 h-5 text-rose-400" />,
      color: 'from-rose-500/20 to-red-500/10',
      accentBorder: 'border-rose-500/40',
      description: 'Distributed in-memory caching delivering sub-millisecond query responses, token throttling, and distributed session storage.',
      enterpriseFeatures: [
        'Sub-millisecond latency on frequently accessed queries',
        'Distributed lock manager for concurrent operations',
        'Sliding window rate limiters against DDoS/abuse',
        'Pub/Sub channels for real-time notification dispatch'
      ],
      samplePayload: `// Cache-Aside Redis Pattern
const cached = await redis.get(\`user:\${userId}:summary\`);
if (cached) return JSON.parse(cached);

const freshData = await db.query(...);
await redis.setex(\`user:\${userId}:summary\`, 300, JSON.stringify(freshData));`
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      subtitle: 'AWS / GCP',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'AWS IAM', 'GCP Compute', 'S3'],
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      color: 'from-sky-500/20 to-cyan-500/10',
      accentBorder: 'border-sky-500/40',
      description: 'Cloud-native deployments leveraging serverless compute, hardened IAM policies, CDN distribution, and multi-region resilience.',
      enterpriseFeatures: [
        'Auto-scaling serverless microservices with AWS Lambda',
        'Zero-trust IAM roles & KMS key encryption in transit',
        'Edge CDN caching for lightning-fast global assets',
        'Automated health telemetry & CloudWatch alarms'
      ],
      samplePayload: `// AWS Serverless Handler Pattern
export const handler = async (event: APIGatewayProxyEvent) => {
  const context = initRequestContext(event);
  const response = await routeController.dispatch(context);
  return formatApiResponse(200, response);
};`
    },
    {
      id: 'ai',
      name: 'AI Layer',
      subtitle: 'LLM APIs / AI Services / Automation',
      technologies: ['LLM APIs', 'AI Agents', 'Embeddings', 'Streaming Output', 'Intelligent Workflows'],
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/10',
      accentBorder: 'border-purple-500/40',
      description: 'Infusing foundation LLMs, semantic vector search, tool-calling agents, and intelligent automated workflows directly into production systems.',
      enterpriseFeatures: [
        'Structured JSON response streaming into React/Node',
        'Deterministic validation guards around AI outputs',
        'Semantic indexing with vector embeddings',
        'Autonomous task orchestration with error recovery'
      ],
      samplePayload: `// Enterprise AI Orchestration
const completion = await aiClient.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'system', content: PROMPT_TEMPLATE }],
  response_format: { type: 'json_object' }
});`
    }
  ];

  const activeTier = tiers.find(t => t.id === activeTierId) || tiers[0];

  const handleSelectTier = (tierId: string) => {
    setActiveTierId(tierId);

    // On mobile / tablet screens where layout is vertically stacked, scroll to details card
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && detailsRef.current) {
      const yOffset = -80; // Account for sticky navbar height
      const y = detailsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Status Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              Live Architecture Pipeline
            </span>
          </div>
          <span className="hidden sm:inline text-xs text-slate-500">|</span>
          <span className="hidden sm:inline text-xs text-slate-400">
            Tap any tier to instantly inspect blueprints &amp; data payloads
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
          <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span>Active Pipeline (8 Tiers)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Vertical Flow */}
        <div className="lg:col-span-6 space-y-3 relative">
          {tiers.map((tier, index) => {
            const isActive = tier.id === activeTierId;
            return (
              <React.Fragment key={tier.id}>
                <div
                  onClick={() => handleSelectTier(tier.id)}
                  className={`group relative p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? `bg-slate-900 ${tier.accentBorder} shadow-lg shadow-cyan-950/40 scale-[1.01]`
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  {/* Glowing Edge Indicator */}
                  {isActive && (
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 rounded-r bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform flex-shrink-0 ${
                          isActive ? 'border-cyan-400/50 bg-cyan-500/10' : ''
                        }`}
                      >
                        {tier.icon}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-400">
                            0{index + 1}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {tier.name}
                          </h3>
                        </div>
                        <p className="text-xs font-mono text-cyan-400/90 font-medium">
                          {tier.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60">
                        {tier.technologies.length} Modules
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'}`} />
                    </div>
                  </div>
                </div>

                {/* Animated Data Packet Connector */}
                {index < tiers.length - 1 && (
                  <div className="flex justify-center my-0.5 relative h-3.5">
                    <div className="w-0.5 h-full bg-slate-800 relative overflow-hidden">
                      <div
                        className="w-full h-2 bg-gradient-to-b from-cyan-400 to-blue-500 animate-pulse-slow"
                        style={{
                          animationDuration: '1.2s',
                          animationIterationCount: 'infinite'
                        }}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Column: Detailed Inspector Card */}
        <div ref={detailsRef} className="lg:col-span-6 lg:sticky lg:top-24 scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex-shrink-0">
                  {activeTier.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    Architecture Deep-Dive
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {activeTier.name}
                  </h3>
                </div>
              </div>
              <Badge variant="cyan" size="sm">
                Production-Ready
              </Badge>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeTier.description}
            </p>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Technologies &amp; Standards
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeTier.technologies.map((t, idx) => (
                  <Badge key={idx} variant="slate" size="sm">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enterprise Guarantees */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Enterprise Engineering Guarantees
              </h4>
              <div className="space-y-2">
                {activeTier.enterpriseFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Code / Payload Blueprint */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Pattern / Payload Blueprint
                </h4>
                <span className="text-[11px] font-mono text-cyan-400">TypeScript / Schema</span>
              </div>
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-w-full">
                <pre>
                  <code>{activeTier.samplePayload}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
