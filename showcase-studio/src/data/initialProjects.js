export const TEMPLATES_CONFIG = [
  {
    id: 'template-a',
    name: 'Hero Showcase',
    description: 'Prominent 75–85% dominant screenshot with clean typographic metadata.',
  },
  {
    id: 'template-b',
    name: 'Editorial Showcase',
    description: 'Asymmetric Swiss dual-view layout with balanced negative space.',
  },
  {
    id: 'template-c',
    name: 'Feature Grid',
    description: 'Structured 3-column screenshot grid with technical feature callouts.',
  },
  {
    id: 'template-d',
    name: 'Full-Bleed Showcase',
    description: 'Edge-to-edge cinematic capture with subdued typographic footer.',
  },
  {
    id: 'template-e',
    name: 'Project Overview',
    description: 'Case study layout with architectural intro, badges, and primary frame.',
  },
];

export const BACKGROUND_PRESETS = [
  { name: 'Swiss Neutral', value: '#F7F7F5', textDark: true },
  { name: 'Pure White', value: '#FFFFFF', textDark: true },
  { name: 'Warm Editorial', value: '#F5F3EF', textDark: true },
  { name: 'Cool Slate', value: '#EBEBE8', textDark: true },
  { name: 'Editorial Dark', value: '#171717', textDark: false },
  { name: 'Obsidian Night', value: '#0E131F', textDark: false },
];

export const INITIAL_PROJECTS = [
  {
    id: 'proj-docvyn',
    title: 'Docvyn',
    subtitle: 'Conversational Neural Document Intelligence & RAG Platform',
    category: 'AI / Enterprise SaaS',
    url: 'https://docvyn.vercel.app',
    year: '2026',
    client: 'Production Software',
    role: 'Lead Architect & Full Stack',
    accentColor: '#171717',
    description:
      'Production-oriented document intelligence platform that enables users to upload business documents (PDF, DOCX, PNG, TIFF), index 384-dimensional FastEmbed dense vectors, and execute grounded RAG queries with verifiable page citations.',
    features: [
      {
        title: 'Verifiable Page Citations',
        description: 'Page-level provenance mapping ensuring 100% deterministic, verifiable responses.',
      },
      {
        title: 'Hybrid OCR & Ingestion',
        description: 'RapidOCR and PyMuPDF text extraction pipeline handling complex legal documents.',
      },
      {
        title: 'Asynchronous Vector Pipeline',
        description: 'Fault-tolerant background task queues processing multi-page documents with stage-based progress.',
      },
    ],
    techStack: ['FastAPI', 'React 18', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'Groq LPU', 'FastEmbed'],
    screenshots: [
      {
        id: 'shot-docvyn-1',
        name: 'Grounded RAG Chat Interface',
        url: '/captured/step_57_shot_1.png',
        viewport: 'Desktop 1440x900',
        caption: 'Conversational Intelligence Workspace with Real-Time Grounding and Source Citations',
      },
      {
        id: 'shot-docvyn-2',
        name: 'Workspace Ingestion Activity & Analytics',
        url: '/captured/step_45_shot_1.png',
        viewport: 'Desktop 1440x900',
        caption: 'Workspace Analytics showing 14-day ingestion activity, document breakdown, and storage metrics',
      },
      {
        id: 'shot-docvyn-3',
        name: 'Document Library & Status Manager',
        url: '/captured/step_47_shot_1.png',
        viewport: 'Desktop 1440x900',
        caption: 'Document library with processing states, filters, and multi-tenant isolation',
      },
    ],
    selectedTemplate: 'template-b', // Editorial Showcase
    canvasSettings: {
      aspectRatio: '16:9',
      width: 1920,
      height: 1080,
      background: '#F7F7F5',
      fontFamily: 'sans',
      titleSize: 'large',
      borderRadius: '12px',
      shadow: 'editorial',
      borderStyle: 'subtle',
      spacing: 'generous',
      showMetadata: true,
      showTechStack: true,
      showFeatures: true,
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'proj-flowforge',
    title: 'FlowForge AI',
    subtitle: 'Visual AI Workflow & DAG Orchestrator',
    category: 'Developer Infrastructure',
    url: 'https://flowforge-ai-iota.vercel.app',
    year: '2026',
    client: 'Production Software',
    role: 'Lead Architect & Full Stack',
    accentColor: '#171717',
    description:
      'Multi-tenant visual workflow orchestrator executing multi-step AI pipelines with topological DAG scheduling, sub-40ms async task dispatch via Redis, distributed leases, and automated schema repair.',
    features: [
      {
        title: 'Topological DAG Scheduling',
        description: 'Deterministic task resolution via Kahn’s algorithm with automatic cycle detection.',
      },
      {
        title: 'Step Observability & Traces',
        description: 'Real-time trace drawer showing per-node inputs, outputs, timestamps, and model latency metrics.',
      },
      {
        title: 'Multi-Tenant Isolation',
        description: 'Strict organization scoping with role-based governance across Acme Corporation and Globex.',
      },
    ],
    techStack: ['FastAPI', 'React Flow', 'PostgreSQL 17', 'Celery', 'Upstash Redis', 'Groq LPU', 'Pydantic v2'],
    screenshots: [
      {
        id: 'shot-ff-1',
        name: 'Operations Dashboard & KPI Stream',
        url: '/captured/step_8_shot_1.png',
        viewport: 'Desktop 1440x900',
        caption: 'Multi-tenant cloud operations dashboard displaying active workflows, metrics, and audit stream',
      },
      {
        id: 'shot-ff-2',
        name: 'Live Execution Trace & Step Logs',
        url: '/captured/step_26_shot_1.png',
        viewport: 'Desktop 1440x900',
        caption: 'Live step-by-step DAG node execution trace showing node status badges, inputs, outputs, and latency',
      },
      {
        id: 'shot-ff-3',
        name: 'Workflow Blueprints & Use Cases Hub',
        url: '/captured/step_24_shot_1.png',
        viewport: 'Desktop 1440x900',
        caption: 'Enterprise workflow templates with interactive one-click live execution triggers',
      },
    ],
    selectedTemplate: 'template-b', // Editorial Showcase
    canvasSettings: {
      aspectRatio: '16:9',
      width: 1920,
      height: 1080,
      background: '#F7F7F5',
      fontFamily: 'sans',
      titleSize: 'large',
      borderRadius: '12px',
      shadow: 'editorial',
      borderStyle: 'subtle',
      spacing: 'generous',
      showMetadata: true,
      showTechStack: true,
      showFeatures: true,
    },
    updatedAt: new Date().toISOString(),
  },
];
