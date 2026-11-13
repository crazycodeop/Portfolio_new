import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Sticky Mobile Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base">
        <p>
          I&apos;m a software engineer who specializes in bridging distributed backend systems,
          modern web applications, and enterprise-grade Generative AI. Over the past 2+ years, I
          have architected, scaled, and deployed cloud-native B2B SaaS platforms serving corporate
          clients with strict reliability and security requirements.
        </p>

        <p>
          At <span className="font-medium text-slate-200">VakilDesk Technologies</span>, I lead
          core backend architecture and cloud infrastructure—shipping 4 enterprise
          platforms using Python, Django, FastAPI, and React. My work focuses on solving concrete
          engineering bottlenecks: optimizing PostgreSQL ORM queries and Redis caching to slash
          latency by 40%, cutting AWS infrastructure costs by 50% through memory leak fixes and EC2
          rightsizing, and orchestrating Celery microservice workflows across third-party APIs
          (DocuSign, eMudhra, GST) processing 10,000+ monthly transactions with zero data loss.
        </p>

        <p>
          In Generative AI, my emphasis is on determinism and verifiable accuracy. Moving beyond
          unreliable wrappers, I engineer production RAG architectures using the Gemini API,
          LangChain, and pgvector embeddings with strict boundary defenses (
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            href="#projects"
          >
            Docvyn
          </a>
          ) and topological DAG workflow engines with Pydantic guardrails and distributed worker
          heartbeats (
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            href="#projects"
          >
            FlowForge AI
          </a>
          ).
        </p>

        <p>
          I graduated with a B.E. in Electronics &amp; Telecommunications from{' '}
          <span className="text-slate-200 font-medium">Thadomal Shahani Engineering College</span>{' '}
          (CGPA: 8.82 / 10.00). When I&apos;m away from my terminal, I enjoy studying distributed
          consensus algorithms, exploring cloud architecture patterns, and following open-source AI
          benchmarks.
        </p>
      </div>
    </section>
  );
};
