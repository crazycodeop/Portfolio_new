import React from 'react';

interface StackCategory {
  number: string;
  category: string;
  description: string;
  primary: string[];
  secondary: string[];
}

const stackData: StackCategory[] = [
  {
    number: '01',
    category: 'LANGUAGES & RUNTIMES',
    description: 'Core languages utilized for backend services, scripting, data manipulation, and web clients.',
    primary: ['Python', 'SQL (PostgreSQL, MySQL)', 'JavaScript', 'TypeScript'],
    secondary: ['HTML5', 'CSS3', 'Bash / Shell'],
  },
  {
    number: '02',
    category: 'BACKEND ENGINEERING & ARCHITECTURE',
    description: 'Frameworks and distributed patterns for high-throughput, low-latency microservices.',
    primary: [
      'FastAPI',
      'Django',
      'Django REST Framework',
      'Celery',
      'RESTful Microservices',
      'System Design',
      'Redis Caching',
    ],
    secondary: ['Asynchronous Architecture', 'Event-Driven Workflows', 'ORM Query Tuning', 'WebSockets', 'WebDAV'],
  },
  {
    number: '03',
    category: 'AI & GENERATIVE AI ARCHITECTURES',
    description: 'Enterprise-grade RAG pipelines, dense embeddings, vector retrieval, and deterministic LLM guardrails.',
    primary: [
      'Gemini API',
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'pgvector',
      'FastEmbed',
      'Groq LPUs (Llama 3.3 70B)',
      'Prompt Orchestration',
    ],
    secondary: ['Vector Embeddings', 'Pydantic Schema Validation', 'Evaluation Suites', 'Multi-Tenant Vector Isolation'],
  },
  {
    number: '04',
    category: 'DATABASES & DISTRIBUTED STORAGE',
    description: 'Relational databases, indexing strategies, vector stores, and high-performance caching.',
    primary: ['PostgreSQL', 'Supabase', 'MySQL', 'Redis', 'AWS S3'],
    secondary: ['HNSW Indexing', 'Schema Migrations', 'Connection Pooling', 'Row-Level Security (RLS)'],
  },
  {
    number: '05',
    category: 'CLOUD, DEVOPS & INFRASTRUCTURE',
    description: 'Production cloud hosting, containerization, automated CI/CD pipelines, and server management.',
    primary: ['AWS (EC2, S3, RDS, IAM)', 'Docker', 'Linux / Unix', 'Jenkins CI/CD', 'Nginx'],
    secondary: ['Docker Compose', 'Serverless DBs', 'Cost & RAM Rightsizing', 'Uptime & SLA Monitoring'],
  },
  {
    number: '06',
    category: 'FRONTEND ENGINEERING',
    description: 'Component architecture, interactive flow graphs, and modern web applications.',
    primary: ['React 18', 'React Flow', 'Next.js', 'Tailwind CSS'],
    secondary: ['Responsive Design', 'State Management', 'Vite', 'Client Portal Architecture'],
  },
  {
    number: '07',
    category: 'TESTING, SECURITY & INTEGRATIONS',
    description: 'Automated test suites, authentication standards, and third-party enterprise service integrations.',
    primary: [
      'Pytest',
      'JWT & OAuth2',
      'RBAC Security',
      'Third-Party APIs (DocuSign, eMudhra)',
      'Git & GitHub',
      'Postman',
    ],
    secondary: ['Vitest', 'HTTPX', 'CORS / Rate Limiting', 'eSignature Workflows', 'GST / Tax APIs'],
  },
];

export const Stack: React.FC = () => {
  return (
    <section id="stack" className="py-16 sm:py-24 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#e4e4e7] dark:border-[#3f3f46]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-16 gap-2 sm:gap-3">
        <div>
          <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-[0.25em] uppercase block mb-1.5">
            03 / TECHNICAL STACK
          </span>
          <h2 className="text-[1.75rem] sm:text-4xl font-light text-[#1f2937] dark:text-[#e4e4e7] tracking-tight">
            Core Disciplines &amp; Tooling
          </h2>
        </div>
        <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-wider">
          SYSTEM ARCHITECTURE
        </span>
      </div>

      {/* Grid of Stack Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-12">
        {stackData.map((item) => (
          <div
            key={item.category}
            className="group border-t border-[#e4e4e7] dark:border-[#3f3f46] pt-5 sm:pt-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <span className="text-xs sm:text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase font-medium">
                  {item.number} &mdash; {item.category}
                </span>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#4b5563] dark:text-[#a1a1aa] leading-[1.65] mb-4 sm:mb-5">
                {item.description}
              </p>

              {/* Primary Technologies */}
              <div className="mb-3.5 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest block mb-2 sm:mb-2.5">
                  PRIMARY FOCUS
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.primary.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-[13px] font-mono px-2.5 py-1 sm:px-3 sm:py-1.5 rounded bg-white dark:bg-[#202024] border border-[#e4e4e7] dark:border-[#3f3f46] text-[#1f2937] dark:text-[#e4e4e7] hover:border-[#c084fc] dark:hover:border-[#c084fc] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Secondary Technologies */}
              {item.secondary.length > 0 && (
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest block mb-2">
                    EXTENSIONS &amp; PRACTICES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.secondary.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-[#e4e4e7] dark:border-[#3f3f46]/50 text-[#6b7280] dark:text-[#a1a1aa]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
