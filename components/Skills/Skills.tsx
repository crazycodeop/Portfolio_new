import React from 'react';

const skillCategories = [
  {
    name: 'Languages & Core',
    skills: ['Python', 'SQL (PostgreSQL, MySQL)', 'JavaScript', 'TypeScript', 'HTML5 / CSS3', 'Bash / Shell'],
  },
  {
    name: 'Backend & Distributed Systems',
    skills: [
      'FastAPI',
      'Django',
      'Django REST Framework',
      'Celery',
      'RESTful Microservices',
      'Redis Caching',
      'Async Architecture',
      'WebDAV',
    ],
  },
  {
    name: 'AI & Generative AI Architectures',
    skills: [
      'Gemini API',
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'pgvector',
      'FastEmbed',
      'Groq LPUs',
      'Pydantic Validation',
      'Prompt Orchestration',
    ],
  },
  {
    name: 'Databases & Distributed Storage',
    skills: ['PostgreSQL', 'Supabase', 'MySQL', 'Redis', 'AWS S3', 'HNSW Indexing', 'Row-Level Security (RLS)'],
  },
  {
    name: 'Cloud, DevOps & Infrastructure',
    skills: ['AWS (EC2, S3, RDS, IAM)', 'Docker', 'Linux / Unix', 'Jenkins CI/CD', 'Nginx', 'Uptime & SLA Monitoring'],
  },
  {
    name: 'Frontend Engineering',
    skills: ['React 18', 'React Flow', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'Client Portal Architecture'],
  },
  {
    name: 'Testing, Security & Integrations',
    skills: ['Pytest', 'Vitest', 'JWT & OAuth2', 'RBAC Security', 'DocuSign API', 'eMudhra API', 'GST / Tax APIs'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="mb-8 scroll-mt-8 sm:mb-12 sm:scroll-mt-12 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      {/* Sticky Mobile Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-3 w-screen bg-slate-900/75 px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="space-y-8">
        {skillCategories.map((cat) => (
          <div key={cat.name} className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              {cat.name}
            </h3>
            <ul className="flex flex-wrap gap-2" aria-label={cat.name}>
              {cat.skills.map((skill) => (
                <li key={skill}>
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/20 transition-colors">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
