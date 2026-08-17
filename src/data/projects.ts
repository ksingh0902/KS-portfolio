export interface Project {
  id: string;
  name: string;
  companyOrOrg: string;
  role: string;
  industry: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  responsibilities: string[];
  architecture?: string;
  features?: string[];
  screenshots: {
    src: string;
    caption: string;
    description: string;
  }[];
  tags: ('Enterprise' | 'React' | 'Angular' | 'Node.js' | 'Cloud & DB' | 'AI & Analytics')[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'bank-credit-card',
    name: 'Major Canadian Bank — Credit Card Migration',
    companyOrOrg: 'Major Canadian Bank',
    role: 'Full-Stack Developer',
    industry: 'Banking & Financial Services',
    shortDescription: 'Enterprise credit card migration platform handling complex validation pipelines, reactive user workflows, and high-throughput data migration.',
    fullDescription: 'Worked as a Full-Stack Developer on an enterprise credit card migration project for a major Canadian bank. Built responsive, resilient web interfaces, integrated secure REST and GraphQL APIs, developed robust Node.js backend services, and managed mission-critical SQL/PostgreSQL database migrations.',
    architecture: 'Angular / React → REST / GraphQL → Node.js / Express.js → SQL / PostgreSQL → AWS',
    tags: ['Enterprise', 'Angular', 'React', 'Node.js', 'Cloud & DB'],
    featured: true,
    technologies: [
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'RxJS',
      'Redux',
      'Angular Material',
      'REST APIs',
      'GraphQL',
      'Node.js',
      'Express.js',
      'SQL',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Git',
      'GitHub',
      'AWS'
    ],
    responsibilities: [
      'Developed enterprise frontend applications',
      'Built reusable React and Angular components',
      'Integrated REST APIs and GraphQL',
      'Developed GraphQL Queries and Mutations',
      'Worked with Node.js and Express.js',
      'Worked extensively with SQL and PostgreSQL',
      'Implemented data validation and migration workflows',
      'Built reactive forms',
      'Integrated APIs',
      'Debugged complex application issues',
      'Supported testing',
      'Supported production releases',
      'Collaborated with developers, QA, business analysts, and stakeholders',
      'Worked in Agile/Scrum environment'
    ],
    features: [
      'Automated account migration pipelines',
      'Data integrity validation and auditing',
      'Reactive multi-step credit application forms',
      'High-throughput GraphQL query resolution',
      'Enterprise AWS cloud deployment'
    ],
    screenshots: [
      {
        src: '/images/projects/bank-credit-card-01.png',
        caption: 'Credit Card Migration Matrix',
        description: 'Multi-tiered migration workflow showing real-time batch processing and account mapping verification.'
      },
      {
        src: '/images/projects/bank-credit-card-02.png',
        caption: 'Audit & Data Validation Console',
        description: 'Comprehensive audit trail, discrepancy resolution table, and PostgreSQL synchronization state.'
      }
    ]
  },
  {
    id: 'insurance-loan',
    name: 'Leading Insurance Company — Home Loan & Auto Loan',
    companyOrOrg: 'Leading Insurance Company',
    role: 'Full-Stack Developer',
    industry: 'Insurance & Financial Services',
    shortDescription: 'Comprehensive loan origination and underwriting platform facilitating home and auto loan approvals with real-time GraphQL APIs.',
    fullDescription: 'Worked on enterprise Home Loan and Auto Loan applications for a leading insurance company. Engineered reusable React/TypeScript component systems, structured Node.js microservices, implemented GraphQL Apollo Client querying, and maintained secure PostgreSQL persistence.',
    architecture: 'React → Apollo / GraphQL → Node.js → PostgreSQL → AWS',
    tags: ['Enterprise', 'React', 'Node.js', 'Cloud & DB'],
    featured: true,
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'GraphQL',
      'Apollo Client',
      'GraphQL Queries',
      'GraphQL Mutations',
      'PostgreSQL',
      'SQL',
      'AWS',
      'REST APIs',
      'Git',
      'Agile/Scrum'
    ],
    responsibilities: [
      'Developed React applications',
      'Built reusable React/TypeScript components',
      'Developed Node.js backend services',
      'Integrated GraphQL APIs using Apollo Client',
      'Implemented GraphQL Queries and Mutations',
      'Worked with PostgreSQL and SQL',
      'Integrated AWS services',
      'Implemented business workflows',
      'Built API-driven application architecture',
      'Debugged production issues',
      'Supported testing and deployment'
    ],
    features: [
      'Dynamic loan eligibility & interest rate calculator',
      'Secure applicant document upload & verification',
      'Real-time underwriting state synchronization',
      'Apollo Client state caching & optimistic UI updates',
      'PostgreSQL transactional integrity workflows'
    ],
    screenshots: [
      {
        src: '/images/projects/insurance-loan-01.png',
        caption: 'Loan Application & Underwriting Portal',
        description: 'Interactive loan calculator, rate comparative matrix, and multi-stage applicant evaluation.'
      },
      {
        src: '/images/projects/insurance-loan-02.png',
        caption: 'Credit Risk & Amortization Engine',
        description: 'Real-time schedule breakdown, risk score analysis, and approval workflow manager.'
      }
    ]
  },
  {
    id: 'teksearch-restaurant',
    name: 'Teksearch — Restaurant Web & Mobile Experience',
    companyOrOrg: 'Teksearch',
    role: 'Full-Stack / Frontend Developer',
    industry: 'IT Services / Hospitality Tech',
    shortDescription: 'Modern, high-conversion restaurant web and mobile ordering platform featuring fluid menu browsing, cart management, and seamless UX.',
    fullDescription: 'Worked on an IT Services project for Teksearch, developing a modern Restaurant UI for web and mobile platforms. Focused on high-performance rendering, responsive layouts, intuitive menu customization, and conversion-optimized mobile checkouts.',
    tags: ['React'],
    featured: false,
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive Design'
    ],
    responsibilities: [
      'Developed responsive web interfaces',
      'Built reusable React components',
      'Implemented mobile-responsive layouts',
      'Created restaurant/menu browsing experiences',
      'Implemented intuitive navigation',
      'Converted designs into production-ready UI',
      'Collaborated with business and design teams',
      'Optimized cross-device user experience'
    ],
    features: [
      'Interactive item customization & modifier selector',
      'Mobile-first responsive ordering flow',
      'Fast client-side menu filtering & search',
      'Cross-browser optimized micro-animations'
    ],
    screenshots: [
      {
        src: '/images/projects/teksearch-restaurant-01.png',
        caption: 'Restaurant Menu & Browsing Portal',
        description: 'Interactive category browsing, dietary tags filtering, and real-time order drawer.'
      },
      {
        src: '/images/projects/teksearch-restaurant-02.png',
        caption: 'Mobile-Optimized Checkout Flow',
        description: 'Streamlined checkout interface with localized delivery zones and frictionless payment flow.'
      }
    ]
  },
  {
    id: 'teksearch-smart-park',
    name: 'Teksearch — Smart Park Project',
    companyOrOrg: 'Teksearch',
    role: 'Full-Stack / Angular Engineer',
    industry: 'Smart Mobility & Facility Management',
    shortDescription: 'Enterprise smart parking and facility management system featuring real-time sensor occupancy telemetry, reactive slot reservation workflows, automated tariff calculation, and multi-cloud analytics.',
    fullDescription: 'Worked on the Smart Park Project for Teksearch across frontend Angular architecture, reactive RxJS telemetry streams, Angular Material design systems, Node.js/Express.js backend services, PostgreSQL database transactions, Redis caching, and AWS/GCP cloud deployments.',
    architecture: 'Angular → REST / GraphQL / Apollo → Node.js / Express.js → PostgreSQL + Redis → AWS / GCP',
    tags: ['Enterprise', 'Angular', 'Node.js', 'Cloud & DB'],
    featured: true,
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'Angular Material',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'SQL',
      'Redis',
      'AWS',
      'GCP',
      'Git',
      'GitHub'
    ],
    responsibilities: [
      'Developed enterprise Angular applications and interactive slot reservation interfaces',
      'Built reusable Angular components, services, and reactive forms',
      'Implemented TypeScript architecture and RxJS data streams for real-time sensor telemetry',
      'Developed Node.js/Express backend APIs and integrated REST and GraphQL endpoints',
      'Worked with PostgreSQL for transactional slot allocation and SQL queries',
      'Used Redis for sub-millisecond caching of parking occupancy states',
      'Integrated cloud infrastructure across AWS and GCP',
      'Implemented authentication, authorization, and role-based access control',
      'Debugged, tested, and optimized application performance in high-concurrency production environments'
    ],
    features: [
      'Real-time parking bay occupancy telemetry',
      'Dynamic slot reservation and extension workflows',
      'Interactive facility map & multi-level floor plan viewer',
      'Automated tariff calculation and billing',
      'Admin dashboard with occupancy analytics and revenue reporting',
      'Role-based access control and security policies'
    ],
    screenshots: [
      {
        src: '/images/projects/teksearch-smart-park-01.png',
        caption: 'Smart Park Slot Telemetry & Reservation Hub',
        description: 'Interactive floor plan with real-time bay availability status, sensor telemetry, and instant slot reservation.'
      },
      {
        src: '/images/projects/teksearch-smart-park-02.png',
        caption: 'Facility Operations & Revenue Analytics Console',
        description: 'Comprehensive administration console for tariff management, utilization heatmaps, and audit logging.'
      }
    ]
  },
  {
    id: 'teksearch-angular',
    name: 'Teksearch — Enterprise Angular Application',
    companyOrOrg: 'Teksearch',
    role: 'Full-Stack Engineer',
    industry: 'Enterprise IT Services',
    shortDescription: 'Large-scale enterprise application with reactive RxJS state management, Redis caching layer, and multi-cloud AWS & GCP architecture.',
    fullDescription: 'Worked on an enterprise Angular application across frontend, server-side development, APIs, databases, caching, and cloud infrastructure. Engineered clean RxJS streams, Angular Material design patterns, Node.js/Express.js backend services, and high-speed Redis caching.',
    architecture: 'Angular → Node.js / Express.js → REST APIs → PostgreSQL + Redis → AWS / GCP',
    tags: ['Enterprise', 'Angular', 'Node.js', 'Cloud & DB'],
    featured: true,
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'Angular Material',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'SQL',
      'Redis',
      'AWS',
      'GCP',
      'RITE Application',
      'REST APIs',
      'Server-Side Development',
      'Git',
      'GitHub'
    ],
    responsibilities: [
      'Developed enterprise Angular applications',
      'Built reusable Angular components and services',
      'Implemented TypeScript architecture',
      'Implemented reactive forms and RxJS flows',
      'Developed Node.js server-side functionality',
      'Built Express.js backend services',
      'Integrated REST APIs',
      'Worked with PostgreSQL and SQL',
      'Implemented database operations',
      'Used Redis for caching and performance',
      'Worked with AWS',
      'Worked with GCP',
      'Supported server-side application development',
      'Debugged and optimized applications',
      'Supported testing and production environments'
    ],
    features: [
      'Reactive state management via RxJS observables',
      'Sub-millisecond query responses with Redis caching',
      'Multi-cloud AWS & GCP deployment resilience',
      'Complex enterprise role-based access control'
    ],
    screenshots: [
      {
        src: '/images/projects/teksearch-angular-01.png',
        caption: 'Enterprise Operations Console',
        description: 'Centralized telemetry dashboard with Angular Material data grids and RxJS live data updates.'
      },
      {
        src: '/images/projects/teksearch-angular-02.png',
        caption: 'Cache & Infrastructure Monitor',
        description: 'Redis cache hit-rate telemetry, query execution latency monitors, and multi-cloud load views.'
      }
    ]
  },
  {
    id: 'nayab-hotel',
    name: 'Nayab Enterprise — Hotel Management Website',
    companyOrOrg: 'Nayab Enterprise',
    role: 'Full-Stack Engineer',
    industry: 'Hospitality & Property Management',
    shortDescription: 'Full-stack hotel management platform with room browsing, live availability calendars, booking workflows, and comprehensive admin dashboard.',
    fullDescription: 'Worked on a full-stack Hotel Management Website for Nayab Enterprise. Built dynamic React frontend interfaces, GraphQL and REST backend services on Node.js/Express, PostgreSQL relational data structures, Redis session caching, and role-based administrative dashboards.',
    tags: ['React', 'Node.js', 'Cloud & DB'],
    featured: false,
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'SQL',
      'Redis',
      'AWS',
      'Git'
    ],
    responsibilities: [
      'Developed React frontend architecture',
      'Built reusable components',
      'Developed Node.js/Express.js backend services',
      'Integrated REST and GraphQL APIs',
      'Implemented PostgreSQL database operations',
      'Developed business workflows',
      'Built responsive interfaces',
      'Implemented authentication/authorization',
      'Performed testing',
      'Debugged application issues',
      'Optimized application performance'
    ],
    features: [
      'Hotel information',
      'Room management',
      'Room browsing',
      'Availability workflows',
      'Booking-related interfaces',
      'Customer management',
      'Admin dashboard',
      'Responsive UI',
      'Authentication',
      'Authorization',
      'API integrations',
      'Database-driven workflows',
      'Business logic'
    ],
    screenshots: [
      {
        src: '/images/projects/nayab-hotel-01.png',
        caption: 'Room Booking & Availability Engine',
        description: 'Interactive room browsing with date range availability, amenity badges, and pricing tiers.'
      },
      {
        src: '/images/projects/nayab-hotel-02.png',
        caption: 'Property & Reservation Management Console',
        description: 'Comprehensive staff dashboard for reservation lifecycle management, guest check-in, and billing.'
      }
    ]
  },
  {
    id: 'tcs-dashboard',
    name: 'TCS — Interactive Data Analytics Dashboard',
    companyOrOrg: 'TCS',
    role: 'Full-Stack Engineer',
    industry: 'Data Analytics & Enterprise IT',
    shortDescription: 'High-performance interactive data analytics suite with real-time KPI metrics, advanced temporal filtering, chart visualizations, and drill-down analysis.',
    fullDescription: 'Worked on an Interactive Data Analytics Dashboard for TCS focused on presenting complex business data through intuitive, responsive, and interactive dashboards. Architected React dashboard components, Apollo GraphQL queries, PostgreSQL data models, and high-volume data grid rendering.',
    architecture: 'React → Apollo / GraphQL → Node.js → PostgreSQL → AWS',
    tags: ['Enterprise', 'React', 'Node.js', 'AI & Analytics', 'Cloud & DB'],
    featured: true,
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'GraphQL',
      'Apollo Client',
      'PostgreSQL',
      'SQL',
      'REST APIs',
      'AWS'
    ],
    responsibilities: [
      'Developed reusable React dashboard components',
      'Built interactive data visualization interfaces',
      'Integrated GraphQL APIs using Apollo Client',
      'Developed REST API integrations',
      'Worked with PostgreSQL and SQL',
      'Implemented filtering, sorting, searching, and pagination',
      'Optimized large-data rendering',
      'Built responsive analytics views',
      'Improved dashboard performance',
      'Supported testing and production'
    ],
    features: [
      'Interactive analytics dashboards',
      'KPI cards',
      'Data visualization',
      'Interactive charts',
      'Advanced filtering',
      'Search',
      'Date-range filtering',
      'Tables and data grids',
      'Drill-down analytics',
      'Responsive layouts',
      'API-driven data',
      'GraphQL Queries',
      'GraphQL Mutations',
      'PostgreSQL data integration'
    ],
    screenshots: [
      {
        src: '/images/projects/tcs-dashboard-01.png',
        caption: 'Executive KPI & Revenue Analytics',
        description: 'Multi-dimensional executive view with interactive trend lines, performance metrics, and cohort comparison.'
      },
      {
        src: '/images/projects/tcs-dashboard-02.png',
        caption: 'Drill-Down Data Grid & Query Engine',
        description: 'Fast paginated data grid with dynamic multi-column filtering, sorting, and CSV export pipelines.'
      },
      {
        src: '/images/projects/tcs-dashboard-03.png',
        caption: 'Visual Metric Distribution Explorer',
        description: 'Heatmaps and distribution charts built with responsive SVG rendering and optimized memory usage.'
      }
    ]
  },
  {
    id: 'trucking-logistics',
    name: 'Trucking & Logistics — Operations Management Platform',
    companyOrOrg: 'Trucking & Logistics Platform',
    role: 'Full-Stack Engineer',
    industry: 'Logistics & Supply Chain',
    shortDescription: 'Centralized operations platform providing real-time visibility into transportation fleets, driver dispatch, active trip tracking, and logistics analytics.',
    fullDescription: 'Developed a modern Trucking & Logistics Management application designed to provide centralized visibility into transportation operations, drivers, vehicles, trips, deliveries, and logistics data. Engineered responsive React dashboards, Node.js backend services, GraphQL APIs, Redis caching, and PostgreSQL databases on AWS.',
    architecture: 'React → GraphQL / REST → Node.js / Express.js → PostgreSQL + Redis → AWS',
    tags: ['Enterprise', 'React', 'Node.js', 'AI & Analytics', 'Cloud & DB'],
    featured: true,
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'SQL',
      'Redis',
      'REST APIs',
      'AWS'
    ],
    responsibilities: [
      'Developed responsive React interfaces',
      'Built reusable dashboard components',
      'Developed Node.js and Express.js backend services',
      'Integrated REST APIs',
      'Integrated GraphQL',
      'Implemented Apollo',
      'Developed GraphQL Queries and Mutations',
      'Worked with PostgreSQL and SQL',
      'Used Redis for caching',
      'Implemented filtering, sorting, search, and pagination',
      'Built analytics and KPI dashboards',
      'Integrated AWS services',
      'Implemented authentication and authorization',
      'Optimized frontend/backend performance',
      'Supported testing and deployment'
    ],
    features: [
      'Logistics dashboard',
      'Fleet management',
      'Truck management',
      'Vehicle management',
      'Driver management',
      'Trip management',
      'Delivery tracking',
      'Shipment information',
      'Dispatch management',
      'Status tracking',
      'Search',
      'Advanced filtering',
      'KPI dashboards',
      'Interactive charts',
      'Route/trip information',
      'Responsive UI',
      'Role-based access',
      'Reports'
    ],
    screenshots: [
      {
        src: '/images/projects/trucking-dashboard-01.png',
        caption: 'Fleet Telematics & Live Map Overview',
        description: 'Interactive dispatch dashboard tracking active truck routes, delivery ETAs, and driver status.'
      },
      {
        src: '/images/projects/trucking-dashboard-02.png',
        caption: 'Trip Dispatch & Manifest Management',
        description: 'Real-time shipment assignment table with status filtering, bill of lading generation, and driver assignments.'
      },
      {
        src: '/images/projects/trucking-dashboard-03.png',
        caption: 'Logistics KPI & Operational Reports',
        description: 'Fuel efficiency, on-time delivery rates, vehicle maintenance schedules, and route cost analytics.'
      }
    ]
  },
  {
    id: 'teksearch-driving-school',
    name: 'Teksearch — Driving School Application',
    companyOrOrg: 'Teksearch',
    role: 'Full-Stack Engineer',
    industry: 'EdTech & Scheduling Platforms',
    shortDescription: 'Full-scale driving school management ecosystem supporting student bookings, instructor schedules, reactive appointment workflows, and reporting.',
    fullDescription: 'Worked on a Driving School application for Teksearch across frontend, backend, APIs, database, caching, and cloud development. Built reusable Angular components, reactive RxJS flows, Node.js/Express backend APIs, PostgreSQL data queries, Redis caching, and AWS/GCP cloud deployments.',
    architecture: 'Angular → REST / GraphQL / Apollo → Node.js / Express.js → PostgreSQL + Redis → AWS / GCP',
    tags: ['Enterprise', 'Angular', 'Node.js', 'Cloud & DB'],
    featured: false,
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'Angular Material',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'SQL',
      'Redis',
      'AWS',
      'GCP',
      'Git',
      'GitHub'
    ],
    responsibilities: [
      'Developed Angular applications',
      'Built reusable Angular components',
      'Built Angular services',
      'Implemented TypeScript architecture',
      'Implemented reactive forms',
      'Used RxJS for data flows',
      'Integrated Angular Material',
      'Integrated REST APIs',
      'Integrated GraphQL',
      'Used Apollo',
      'Developed Node.js backend services',
      'Developed Express.js server-side functionality',
      'Worked with PostgreSQL',
      'Developed SQL queries',
      'Used Redis for caching',
      'Integrated AWS',
      'Integrated GCP',
      'Implemented authentication/authorization',
      'Debugged applications',
      'Performed testing',
      'Optimized performance',
      'Used Git/GitHub'
    ],
    features: [
      'Student management',
      'Instructor management',
      'Driving lesson scheduling',
      'Appointment management',
      'Booking workflows',
      'Course management',
      'Student dashboards',
      'Instructor dashboards',
      'Admin dashboard',
      'Search and filtering',
      'Forms and validation',
      'Responsive application',
      'Authentication',
      'Authorization',
      'Reporting'
    ],
    screenshots: [
      {
        src: '/images/projects/teksearch-driving-school-01.png',
        caption: 'Instructor Scheduling & Appointment Matrix',
        description: 'Interactive calendar planner with drag-and-drop slot assignment, vehicle availability, and instant notifications.'
      },
      {
        src: '/images/projects/teksearch-driving-school-02.png',
        caption: 'Student Progress & Administration Portal',
        description: 'Curriculum milestones, test preparedness scoring, invoicing, and certification tracking.'
      }
    ]
  }
];
