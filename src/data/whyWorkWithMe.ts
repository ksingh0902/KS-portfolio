export interface WhyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bullets: string[];
}

export const whyWorkWithMeData: WhyItem[] = [
  {
    id: 'years-experience',
    title: '9+ Years Experience',
    subtitle: 'Enterprise & Production Proven',
    description: 'Deep engineering background building, launching, and maintaining complex enterprise applications under high reliability requirements.',
    icon: 'Award',
    bullets: [
      'Comprehensive product lifecycle experience',
      'Proven track record in production releases',
      'Zero learning curve on enterprise standards'
    ]
  },
  {
    id: 'fullstack-capability',
    title: 'True Full-Stack Capability',
    subtitle: 'From Interface to Infrastructure',
    description: 'Mastery across the complete technology stack: frontend, backend, APIs, relational databases, caching, cloud infrastructure, analytics, and AI.',
    icon: 'Layers',
    bullets: [
      'Single point of engineering ownership',
      'Seamless frontend to backend data flow',
      'No communication silos between layers'
    ]
  },
  {
    id: 'enterprise-experience',
    title: 'Enterprise Experience',
    subtitle: 'Regulated & High-Stakes Domains',
    description: 'Direct hands-on experience in banking, insurance, financial services, IT consulting, logistics, and data analytics.',
    icon: 'ShieldCheck',
    bullets: [
      'Security-first development mindset',
      'Strict adherence to compliance & RBAC',
      'Agile/Scrum team collaboration excellence'
    ]
  },
  {
    id: 'modern-technology',
    title: 'Modern Technology',
    subtitle: 'Cutting-Edge, battle-tested tools',
    description: 'Mastery of React, Angular, Node.js, GraphQL, PostgreSQL, Redis, AWS, GCP, and modern AI integration patterns.',
    icon: 'Cpu',
    bullets: [
      'TypeScript strict typing throughout',
      'Reactive streams & sub-millisecond cache',
      'Cloud-native deployment patterns'
    ]
  },
  {
    id: 'scalable-engineering',
    title: 'Scalable Engineering',
    subtitle: 'Built for Longevity & Growth',
    description: 'Clean, modular, and maintainable code architecture engineered to scale gracefully as user volume and feature complexity increase.',
    icon: 'TrendingUp',
    bullets: [
      'Separation of concerns & DRY principles',
      'Comprehensive testing & error boundaries',
      'Maintainable by any future developer'
    ]
  },
  {
    id: 'longterm-partnership',
    title: 'Long-Term Partnership',
    subtitle: 'Committed to Your Success',
    description: 'Available as a trusted technical partner for greenfield builds, ongoing feature iterations, modernization, maintenance, and scaling.',
    icon: 'Handshake',
    bullets: [
      'Reliable communication & transparent milestones',
      'Proactive architectural suggestions',
      'Flexible engagement models for startups & enterprise'
    ]
  }
];
