import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const projects = [
  {
    name: 'bank-credit-card-01',
    title: 'Major Canadian Bank — Credit Card Migration',
    subtitle: 'Account Migration Matrix & Card Lifecycle Flow',
    badge: 'Angular • GraphQL • PostgreSQL',
    color1: '#0f172a',
    color2: '#1e293b',
    accent: '#38bdf8'
  },
  {
    name: 'bank-credit-card-02',
    title: 'Major Canadian Bank — Validation Pipeline',
    subtitle: 'Data Migration Verification & Transaction Audit',
    badge: 'React • Node.js • AWS',
    color1: '#0f172a',
    color2: '#1e293b',
    accent: '#60a5fa'
  },
  {
    name: 'insurance-loan-01',
    title: 'Leading Insurance Co. — Loan Portal',
    subtitle: 'Home & Auto Loan Eligibility & Underwriting Engine',
    badge: 'React • Apollo • GraphQL',
    color1: '#091e3a',
    color2: '#132f57',
    accent: '#06b6d4'
  },
  {
    name: 'insurance-loan-02',
    title: 'Leading Insurance Co. — Risk Assessment',
    subtitle: 'Credit Risk Analysis & Rate Calculation Interface',
    badge: 'TypeScript • PostgreSQL • AWS',
    color1: '#091e3a',
    color2: '#132f57',
    accent: '#3b82f6'
  },
  {
    name: 'teksearch-restaurant-01',
    title: 'Teksearch — Restaurant Web Experience',
    subtitle: 'Interactive Menu Browsing & Order Customization',
    badge: 'React • Responsive UI • CSS3',
    color1: '#1c1917',
    color2: '#292524',
    accent: '#f97316'
  },
  {
    name: 'teksearch-restaurant-02',
    title: 'Teksearch — Mobile Checkout View',
    subtitle: 'High-Conversion Cart, Table Booking & Payment UI',
    badge: 'React • TypeScript • Mobile First',
    color1: '#1c1917',
    color2: '#292524',
    accent: '#fb923c'
  },
  {
    name: 'teksearch-angular-01',
    title: 'Teksearch — Enterprise Angular Portal',
    subtitle: 'RITE System Monitoring & Micro-Frontend Services',
    badge: 'Angular • RxJS • Node.js',
    color1: '#18181b',
    color2: '#27272a',
    accent: '#ec4899'
  },
  {
    name: 'teksearch-angular-02',
    title: 'Teksearch — Distributed Cache & DB Ops',
    subtitle: 'Redis Cache Layer & PostgreSQL Query Analytics',
    badge: 'Redis • PostgreSQL • AWS/GCP',
    color1: '#18181b',
    color2: '#27272a',
    accent: '#a855f7'
  },
  {
    name: 'nayab-hotel-01',
    title: 'Nayab Enterprise — Hotel Management System',
    subtitle: 'Real-Time Room Availability & Reservation Engine',
    badge: 'React • Express • GraphQL',
    color1: '#132e2b',
    color2: '#1a433f',
    accent: '#10b981'
  },
  {
    name: 'nayab-hotel-02',
    title: 'Nayab Enterprise — Guest & Admin Console',
    subtitle: 'Booking Lifecycle, Billing & Role-Based Control',
    badge: 'PostgreSQL • Redis • Auth',
    color1: '#132e2b',
    color2: '#1a433f',
    accent: '#34d399'
  },
  {
    name: 'tcs-dashboard-01',
    title: 'TCS — Interactive Analytics Suite',
    subtitle: 'Executive Business KPIs, Revenue & Cohort Metrics',
    badge: 'React • GraphQL • Apollo Client',
    color1: '#0f172a',
    color2: '#1e1b4b',
    accent: '#818cf8'
  },
  {
    name: 'tcs-dashboard-02',
    title: 'TCS — Advanced Multi-Filter Grid',
    subtitle: 'Drill-Down Aggregations & Temporal Timeframes',
    badge: 'TypeScript • PostgreSQL • SQL',
    color1: '#0f172a',
    color2: '#1e1b4b',
    accent: '#6366f1'
  },
  {
    name: 'tcs-dashboard-03',
    title: 'TCS — Data Visualization Explorer',
    subtitle: 'Interactive Heatmaps, Funnel Flows & Performance Stats',
    badge: 'React • AWS • High-Perf Rendering',
    color1: '#0f172a',
    color2: '#1e1b4b',
    accent: '#a78bfa'
  },
  {
    name: 'trucking-dashboard-01',
    title: 'Trucking & Logistics — Operations Command',
    subtitle: 'Fleet Live Tracking, Dispatch & Active Trip Overview',
    badge: 'React • Node.js • Redis',
    color1: '#18181b',
    color2: '#1e293b',
    accent: '#f59e0b'
  },
  {
    name: 'trucking-dashboard-02',
    title: 'Trucking & Logistics — Dispatch & Deliveries',
    subtitle: 'Driver Schedule, Route Optimization & Status Matrix',
    badge: 'GraphQL • PostgreSQL • Express',
    color1: '#18181b',
    color2: '#1e293b',
    accent: '#eab308'
  },
  {
    name: 'trucking-dashboard-03',
    title: 'Trucking & Logistics — KPI & Freight Analytics',
    subtitle: 'Fuel Efficiency, Mileage Logs & Maintenance Schedules',
    badge: 'AWS • REST APIs • Analytics',
    color1: '#18181b',
    color2: '#1e293b',
    accent: '#fbbf24'
  },
  {
    name: 'teksearch-driving-school-01',
    title: 'Teksearch — Driving School Academy Hub',
    subtitle: 'Student Scheduling, Instructor Rosters & Course Plans',
    badge: 'Angular • Angular Material • RxJS',
    color1: '#1e1e24',
    color2: '#2b2b36',
    accent: '#0284c7'
  },
  {
    name: 'teksearch-driving-school-02',
    title: 'Teksearch — Driving School Admin Portal',
    subtitle: 'Payment Verification, Student Progress & Test Booking',
    badge: 'Node.js • PostgreSQL • Redis • GCP',
    color1: '#1e1e24',
    color2: '#2b2b36',
    accent: '#38bdf8'
  },
  {
    name: 'teksearch-smart-park-01',
    title: 'Teksearch — Smart Park Management Hub',
    subtitle: 'Real-Time Bay Telemetry, Sensor Stream & Slot Booking',
    badge: 'Angular • RxJS • Angular Material',
    color1: '#0f2027',
    color2: '#203a43',
    accent: '#2dd4bf'
  },
  {
    name: 'teksearch-smart-park-02',
    title: 'Teksearch — Smart Park Admin & Analytics',
    subtitle: 'Occupancy Heatmaps, Dynamic Tariffs & Multi-Cloud Ops',
    badge: 'Node.js • PostgreSQL • Redis • AWS/GCP',
    color1: '#0f2027',
    color2: '#203a43',
    accent: '#14b8a6'
  }
];

function generateSvgPlaceholder(p) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" width="1280" height="800">
  <defs>
    <linearGradient id="bg-${p.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.color1}"/>
      <stop offset="100%" stop-color="${p.color2}"/>
    </linearGradient>
    <linearGradient id="accent-grad-${p.name}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.accent}"/>
      <stop offset="100%" stop-color="${p.accent}" stop-opacity="0.4"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1280" height="800" fill="url(#bg-${p.name})"/>
  
  <!-- Subtle Grid Lines -->
  <g opacity="0.08" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="160" x2="1280" y2="160" />
    <line x1="0" y1="320" x2="1280" y2="320" />
    <line x1="0" y1="480" x2="1280" y2="480" />
    <line x1="0" y1="640" x2="1280" y2="640" />
    <line x1="256" y1="0" x2="256" y2="800" />
    <line x1="512" y1="0" x2="512" y2="800" />
    <line x1="768" y1="0" x2="768" y2="800" />
    <line x1="1024" y1="0" x2="1024" y2="800" />
  </g>

  <!-- Browser/App Window Frame -->
  <g transform="translate(60, 50)" filter="url(#shadow)">
    <!-- Window Header -->
    <rect width="1160" height="50" rx="10" ry="10" fill="#0d1117" />
    <circle cx="25" cy="25" r="6" fill="#ef4444" opacity="0.8"/>
    <circle cx="45" cy="25" r="6" fill="#eab308" opacity="0.8"/>
    <circle cx="65" cy="25" r="6" fill="#22c55e" opacity="0.8"/>
    <rect x="100" y="12" width="400" height="26" rx="6" fill="#161b22" />
    <text x="120" y="29" fill="#8b949e" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">https://app.internal/production/${p.name}</text>

    <!-- App Body -->
    <rect y="50" width="1160" height="650" fill="#0b0f19" />
    
    <!-- Sidebar -->
    <rect x="0" y="50" width="220" height="650" fill="#0e1422" />
    <rect x="20" y="80" width="180" height="36" rx="6" fill="${p.accent}" fill-opacity="0.15" stroke="${p.accent}" stroke-opacity="0.3" />
    <text x="36" y="103" fill="${p.accent}" font-family="sans-serif" font-size="13" font-weight="600">Smart Park Console</text>
    
    <!-- Sidebar nav items -->
    <rect x="20" y="135" width="140" height="12" rx="3" fill="#334155" />
    <rect x="20" y="165" width="110" height="12" rx="3" fill="#334155" opacity="0.6"/>
    <rect x="20" y="195" width="150" height="12" rx="3" fill="#334155" opacity="0.6"/>
    <rect x="20" y="225" width="120" height="12" rx="3" fill="#334155" opacity="0.6"/>
    <rect x="20" y="255" width="130" height="12" rx="3" fill="#334155" opacity="0.6"/>

    <!-- Main Content Area -->
    <g transform="translate(250, 80)">
      <text x="0" y="25" fill="#f8fafc" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="22" font-weight="700">${p.title}</text>
      <text x="0" y="50" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14">${p.subtitle}</text>
      
      <!-- Tech Badge Tag -->
      <rect x="660" y="6" width="220" height="28" rx="6" fill="#1e293b" stroke="${p.accent}" stroke-opacity="0.4"/>
      <text x="770" y="24" fill="${p.accent}" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">${p.badge}</text>
    </g>

    <!-- Cards Row -->
    <g transform="translate(250, 160)">
      <rect x="0" y="0" width="270" height="100" rx="8" fill="#131b2e" stroke="#1e293b"/>
      <text x="20" y="30" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="500">REAL-TIME OCCUPANCY</text>
      <text x="20" y="65" fill="#2dd4bf" font-family="sans-serif" font-size="20" font-weight="700">84% Capacity</text>
      <rect x="20" y="78" width="180" height="6" rx="3" fill="#2dd4bf" fill-opacity="0.4"/>

      <rect x="295" y="0" width="270" height="100" rx="8" fill="#131b2e" stroke="#1e293b"/>
      <text x="315" y="30" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="500">SENSOR TELEMETRY</text>
      <text x="315" y="65" fill="${p.accent}" font-family="sans-serif" font-size="20" font-weight="700">Sub-Second RxJS</text>
      <rect x="315" y="78" width="210" height="6" rx="3" fill="${p.accent}" fill-opacity="0.5"/>

      <rect x="590" y="0" width="280" height="100" rx="8" fill="#131b2e" stroke="#1e293b"/>
      <text x="610" y="30" fill="#94a3b8" font-family="sans-serif" font-size="12" font-weight="500">CLOUD &amp; CACHE LAYER</text>
      <text x="610" y="65" fill="#e2e8f0" font-family="sans-serif" font-size="18" font-weight="700">Postgres + Redis (AWS/GCP)</text>
      <rect x="610" y="78" width="190" height="6" rx="3" fill="#14b8a6" fill-opacity="0.5"/>
    </g>

    <!-- Main Visual Canvas -->
    <g transform="translate(250, 285)">
      <rect x="0" y="0" width="870" height="375" rx="8" fill="#111827" stroke="#1f2937"/>
      
      <line x1="40" y1="310" x2="830" y2="310" stroke="#374151" stroke-width="1.5"/>
      <line x1="40" y1="240" x2="830" y2="240" stroke="#374151" stroke-dasharray="4" stroke-width="1"/>
      <line x1="40" y1="170" x2="830" y2="170" stroke="#374151" stroke-dasharray="4" stroke-width="1"/>
      <line x1="40" y1="100" x2="830" y2="100" stroke="#374151" stroke-dasharray="4" stroke-width="1"/>
      
      <path d="M 60 250 Q 180 120, 300 190 T 540 100 T 780 70" fill="none" stroke="${p.accent}" stroke-width="4" stroke-linecap="round"/>
      <path d="M 60 250 Q 180 120, 300 190 T 540 100 T 780 70 L 780 310 L 60 310 Z" fill="${p.accent}" fill-opacity="0.12"/>
      
      <circle cx="60" cy="250" r="5" fill="${p.accent}" stroke="#0b0f19" stroke-width="2"/>
      <circle cx="300" cy="190" r="5" fill="${p.accent}" stroke="#0b0f19" stroke-width="2"/>
      <circle cx="540" cy="100" r="5" fill="${p.accent}" stroke="#0b0f19" stroke-width="2"/>
      <circle cx="780" cy="70" r="6" fill="#2dd4bf" stroke="#ffffff" stroke-width="2"/>

      <text x="435" y="355" fill="#475569" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">
        PRODUCTION ARCHITECTURE &amp; SMART PARK TELEMETRY • TEKSEARCH
      </text>
    </g>
  </g>
</svg>`;
}

projects.forEach(p => {
  const svgContent = generateSvgPlaceholder(p);
  const svgPath = path.join(targetDir, `${p.name}.svg`);
  const pngPath = path.join(targetDir, `${p.name}.png`);
  
  fs.writeFileSync(svgPath, svgContent);
  fs.writeFileSync(pngPath, svgContent);
});

console.log('All image placeholders updated successfully including Smart Park!');
