import React, { useState } from 'react';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';
import { FiArrowUpRight, FiCheckCircle, FiLayers, FiCpu, FiShield, FiDatabase } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const [docvynTab, setDocvynTab] = useState<'rag' | 'architecture'>('rag');
  const [flowforgeTab, setFlowforgeTab] = useState<'dag' | 'telemetry'>('dag');

  return (
    <section id="work" className="py-16 sm:py-24 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#e4e4e7] dark:border-[#3f3f46]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-20 gap-2 sm:gap-3">
        <div>
          <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-[0.25em] uppercase block mb-1.5">
            02 / SELECTED WORK
          </span>
          <h2 className="text-[1.75rem] sm:text-4xl font-light text-[#1f2937] dark:text-[#e4e4e7] tracking-tight">
            Production Software Products
          </h2>
        </div>
        <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-wider">
          ARCHITECTURES &amp; SYSTEMS
        </span>
      </div>

      {/* Projects Container */}
      <div className="space-y-24 sm:space-y-36">
        {/* ========================================================= */}
        {/* PROJECT 01 — DOCVYN */}
        {/* ========================================================= */}
        <article className="group">
          {/* Top metadata */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e4e4e7] dark:border-[#3f3f46] pb-5 sm:pb-6 mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-widest uppercase block mb-1.5 sm:mb-2">
                PROJECT 01 &mdash; DOCUMENT INTELLIGENCE PLATFORM
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-[#1f2937] dark:text-[#e4e4e7] tracking-tight">
                Docvyn
              </h3>
            </div>
            <div className="flex items-center">
              <Link
                href="https://github.com/crazycodeop/docvyn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] text-xs sm:text-[13px] font-mono tracking-wider text-[#4b5563] dark:text-[#a1a1aa] hover:text-[#1f2937] dark:hover:text-[#e4e4e7] border border-[#e4e4e7] dark:border-[#3f3f46] hover:border-[#1f2937] dark:hover:border-white/30 px-4 py-2.5 rounded bg-white dark:bg-[#202024] transition-colors duration-200"
              >
                <VscGithubAlt className="w-4 h-4" />
                <span>GITHUB REPO</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Grid: Description & Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Details */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-7">
              <p className="text-[#4b5563] dark:text-[#a1a1aa] text-base sm:text-[17px] font-light leading-[1.65]">
                Enterprise multi-tenant document intelligence and Retrieval-Augmented Generation (RAG) platform. Enables non-blocking asynchronous processing of complex business documents with verifiable page-level source citations.
              </p>

              <div className="space-y-4 sm:space-y-5 pt-4 sm:pt-5 border-t border-[#e4e4e7] dark:border-[#3f3f46]">
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiDatabase className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      pgvector &amp; Dense Search
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      Indexes 384-dimensional FastEmbed vectors in Supabase PostgreSQL with strict SQL-level tenant isolation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiCpu className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      Sub-Second Inference &amp; Fallback
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      High-throughput generation powered by Groq LPUs (Llama 3.3 70B) with automatic Gemini API fallback and zero embedding cost.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiShield className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      Prompt Injection Defense
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      Rigid &lt;DOCUMENT_CONTEXT&gt; boundary defense mitigating prompt exploits from unvetted enterprise documents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiCheckCircle className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      Automated Verification
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      Covered by 48 automated unit and integration tests across Pytest, HTTPX, and Vitest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 sm:pt-4">
                <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest block mb-2.5 sm:mb-3">
                  ENGINEERING STACK
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    'FastAPI',
                    'React 18',
                    'PostgreSQL (pgvector)',
                    'Supabase',
                    'Celery',
                    'Redis',
                    'Groq LPU',
                    'Gemini API',
                    'FastEmbed',
                    'SQLAlchemy 2.0',
                    'Pytest',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-[13px] font-mono px-2.5 py-1 sm:px-3 sm:py-1.5 rounded bg-white dark:bg-[#202024] border border-[#e4e4e7] dark:border-[#3f3f46] text-[#1f2937] dark:text-[#e4e4e7] hover:border-[#c084fc] dark:hover:border-[#c084fc] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Product Interface */}
            <div className="lg:col-span-7 w-full bg-white dark:bg-[#202024] border border-[#e4e4e7] dark:border-[#3f3f46] rounded-lg overflow-hidden shadow-lg dark:shadow-2xl">
              {/* Window Header */}
              <div className="flex flex-col xs:flex-row xs:items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-[#f4f4f5] dark:bg-[#27272a] border-b border-[#e4e4e7] dark:border-[#3f3f46] gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <span className="text-xs font-mono text-[#4b5563] dark:text-[#a1a1aa] ml-1.5 sm:ml-2 truncate max-w-[200px] sm:max-w-none">
                    docvyn.internal &mdash; RAG Citation Workspace
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDocvynTab('rag')}
                    className={`text-xs font-mono uppercase px-2.5 sm:px-3 py-1.5 rounded transition-colors min-h-[32px] ${
                      docvynTab === 'rag'
                        ? 'bg-white dark:bg-[#18181b] text-[#1f2937] dark:text-[#e4e4e7] shadow-sm border border-[#e4e4e7] dark:border-[#3f3f46]'
                        : 'text-[#6b7280] dark:text-[#a1a1aa] hover:text-[#1f2937] dark:hover:text-[#e4e4e7]'
                    }`}
                  >
                    Grounded Q&amp;A
                  </button>
                  <button
                    type="button"
                    onClick={() => setDocvynTab('architecture')}
                    className={`text-xs font-mono uppercase px-2.5 sm:px-3 py-1.5 rounded transition-colors min-h-[32px] ${
                      docvynTab === 'architecture'
                        ? 'bg-white dark:bg-[#18181b] text-[#1f2937] dark:text-[#e4e4e7] shadow-sm border border-[#e4e4e7] dark:border-[#3f3f46]'
                        : 'text-[#6b7280] dark:text-[#a1a1aa] hover:text-[#1f2937] dark:hover:text-[#e4e4e7]'
                    }`}
                  >
                    Metrics
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-4 sm:p-7 font-mono text-xs text-[#4b5563] dark:text-[#a1a1aa] min-h-[360px] sm:min-h-[400px] flex flex-col justify-between">
                {docvynTab === 'rag' ? (
                  <div className="space-y-4 sm:space-y-5">
                    {/* User Query */}
                    <div className="bg-[#f4f4f5] dark:bg-[#18181b] border border-[#e4e4e7] dark:border-[#3f3f46] rounded p-3.5 sm:p-4">
                      <div className="text-[10px] sm:text-[11px] text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest mb-1.5">
                        USER PROMPT / DOCUMENT QUERY
                      </div>
                      <p className="text-[#1f2937] dark:text-[#e4e4e7] text-[13.5px] sm:text-[14px] font-sans leading-relaxed">
                        &quot;What are the indemnification obligations and liability caps under Section 8.2?&quot;
                      </p>
                    </div>

                    {/* Vector Search Result */}
                    <div className="border-l-2 border-[#6b7280] dark:border-[#71717a] pl-3 sm:pl-4 space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#6b7280] dark:text-[#a1a1aa] gap-1">
                        <span className="truncate">VECTOR MATCH: pgvector (cosine: 0.182)</span>
                        <span className="text-[#1f2937] dark:text-[#e4e4e7] font-sans">Page 14 &middot; Chunk 42</span>
                      </div>
                      <p className="text-[#4b5563] dark:text-[#d4d4d8] text-[12.5px] sm:text-[13px] font-sans italic bg-white dark:bg-white/[0.03] border border-[#e4e4e7] dark:border-transparent p-2.5 rounded leading-relaxed">
                        &quot;...Each party shall defend, indemnify, and hold harmless the other from liabilities, damages, and costs arising out of intellectual property claims, capped at 2x annual contract value...&quot;
                      </p>
                    </div>

                    {/* Grounded Response */}
                    <div className="bg-[#f4f4f5] dark:bg-[#18181b] border border-[#e4e4e7] dark:border-[#3f3f46] rounded p-3.5 sm:p-4 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                        <span className="text-[#1f2937] dark:text-[#e4e4e7] font-semibold uppercase">
                          AI SYNTHESIS &mdash; GROQ (LLAMA 3.3 70B)
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                          380ms &middot; Grounded
                        </span>
                      </div>
                      <p className="text-[#1f2937] dark:text-[#e4e4e7] text-[13.5px] sm:text-[14px] font-sans leading-relaxed">
                        Under Section 8.2, indemnification is mutual for third-party intellectual property infringement claims. Aggregate liability is explicitly capped at twice the total fees paid within the preceding 12-month period.
                      </p>
                      <div className="pt-1.5 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] sm:text-xs px-2.5 py-1 rounded bg-white dark:bg-[#202024] border border-[#e4e4e7] dark:border-[#3f3f46] text-[#4b5563] dark:text-[#a1a1aa]">
                          [Source 1: master_services_agreement.pdf &middot; Page 14]
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-5">
                    {/* Responsive Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3 sm:p-3.5 rounded border border-[#e4e4e7] dark:border-[#3f3f46]">
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] uppercase">Embedding Latency</div>
                        <div className="text-lg sm:text-xl text-[#1f2937] dark:text-[#e4e4e7] font-light mt-0.5 sm:mt-1">42ms</div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#71717a] mt-0.5">FastEmbed CPU Local</div>
                      </div>
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3 sm:p-3.5 rounded border border-[#e4e4e7] dark:border-[#3f3f46]">
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] uppercase">Vector Index</div>
                        <div className="text-lg sm:text-xl text-[#1f2937] dark:text-[#e4e4e7] font-light mt-0.5 sm:mt-1">HNSW</div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#71717a] mt-0.5">pgvector Supabase</div>
                      </div>
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3 sm:p-3.5 rounded border border-[#e4e4e7] dark:border-[#3f3f46]">
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] uppercase">Test Suite</div>
                        <div className="text-lg sm:text-xl text-emerald-600 dark:text-emerald-400 font-light mt-0.5 sm:mt-1">48 / 48</div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#71717a] mt-0.5">100% Pass Rate</div>
                      </div>
                    </div>

                    <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3.5 sm:p-4 rounded border border-[#e4e4e7] dark:border-[#3f3f46] text-xs space-y-2">
                      <div className="text-[#1f2937] dark:text-[#e4e4e7] font-semibold mb-2">CELERY INGESTION WORKER TELEMETRY</div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>POST /api/v1/documents/upload</span>
                        <span className="text-[#1f2937] dark:text-[#e4e4e7]">202 ACCEPTED</span>
                      </div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>task: ingest_document_pipeline</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">SUCCESS</span>
                      </div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>Vector Chunks (384-d)</span>
                        <span className="text-[#1f2937] dark:text-[#e4e4e7]">148 indexed</span>
                      </div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>Tenant Isolation (RLS)</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ENFORCED</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer status bar */}
                <div className="pt-3 sm:pt-4 border-t border-[#e4e4e7] dark:border-[#3f3f46] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#6b7280] dark:text-[#a1a1aa] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                    <span>PostgreSQL 16 + pgvector</span>
                  </div>
                  <span className="text-[#6b7280] dark:text-[#71717a]">Docvyn Engine v1.2</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================= */}
        {/* PROJECT 02 — FLOWFORGE AI */}
        {/* ========================================================= */}
        <article className="group">
          {/* Top metadata */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e4e4e7] dark:border-[#3f3f46] pb-5 sm:pb-6 mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-widest uppercase block mb-1.5 sm:mb-2">
                PROJECT 02 &mdash; WORKFLOW ORCHESTRATION &amp; AGENTIC SYSTEMS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-[#1f2937] dark:text-[#e4e4e7] tracking-tight">
                FlowForge AI
              </h3>
            </div>
            <div className="flex items-center">
              <Link
                href="https://github.com/crazycodeop/flowforge-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] text-xs sm:text-[13px] font-mono tracking-wider text-[#4b5563] dark:text-[#a1a1aa] hover:text-[#1f2937] dark:hover:text-[#e4e4e7] border border-[#e4e4e7] dark:border-[#3f3f46] hover:border-[#1f2937] dark:hover:border-white/30 px-4 py-2.5 rounded bg-white dark:bg-[#202024] transition-colors duration-200"
              >
                <VscGithubAlt className="w-4 h-4" />
                <span>GITHUB REPO</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Grid: Description & Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Details */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-7">
              <p className="text-[#4b5563] dark:text-[#a1a1aa] text-base sm:text-[17px] font-light leading-[1.65]">
                Enterprise visual DAG workflow orchestration platform that designs, executes, and benchmarks AI workflows with durable state persistence, distributed worker concurrency, and human-in-the-loop governance.
              </p>

              <div className="space-y-4 sm:space-y-5 pt-4 sm:pt-5 border-t border-[#e4e4e7] dark:border-[#3f3f46]">
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiLayers className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      Topological DAG Scheduler
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      Custom Kahn&apos;s algorithm scheduler with parallel step execution, cycle detection, and SHA-256 idempotency guaranteeing 100% durable state execution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiCpu className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      Sub-40ms Asynchronous Dispatch
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      High-throughput task queue orchestrated via Upstash Redis and distributed Celery workers with zombie lease recovery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiShield className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      Deterministic LLM Guardrails
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      Pydantic schema validation, role-gated human review approval queues, and automated hallucination benchmarks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-3.5">
                  <FiCheckCircle className="w-4 h-4 text-[#6b7280] dark:text-[#a1a1aa] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7] tracking-wider uppercase">
                      Exhaustive Verification
                    </h4>
                    <p className="text-[14px] text-[#4b5563] dark:text-[#a1a1aa] mt-0.5 sm:mt-1 leading-[1.6]">
                      Validated by 62 unit and integration tests across distributed workers and API routes at a 100% pass rate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 sm:pt-4">
                <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest block mb-2.5 sm:mb-3">
                  ENGINEERING STACK
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    'FastAPI',
                    'React Flow',
                    'PostgreSQL 17',
                    'Celery',
                    'Upstash Redis',
                    'Supabase',
                    'Groq LPUs',
                    'OpenAI',
                    'Pydantic v2',
                    'Docker',
                    'Pytest',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-[13px] font-mono px-2.5 py-1 sm:px-3 sm:py-1.5 rounded bg-white dark:bg-[#202024] border border-[#e4e4e7] dark:border-[#3f3f46] text-[#1f2937] dark:text-[#e4e4e7] hover:border-[#c084fc] dark:hover:border-[#c084fc] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Product Interface */}
            <div className="lg:col-span-7 w-full bg-white dark:bg-[#202024] border border-[#e4e4e7] dark:border-[#3f3f46] rounded-lg overflow-hidden shadow-lg dark:shadow-2xl">
              {/* Window Header */}
              <div className="flex flex-col xs:flex-row xs:items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-[#f4f4f5] dark:bg-[#27272a] border-b border-[#e4e4e7] dark:border-[#3f3f46] gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <span className="text-xs font-mono text-[#4b5563] dark:text-[#a1a1aa] ml-1.5 sm:ml-2 truncate max-w-[200px] sm:max-w-none">
                    flowforge.internal &mdash; DAG Execution Canvas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFlowforgeTab('dag')}
                    className={`text-xs font-mono uppercase px-2.5 sm:px-3 py-1.5 rounded transition-colors min-h-[32px] ${
                      flowforgeTab === 'dag'
                        ? 'bg-white dark:bg-[#18181b] text-[#1f2937] dark:text-[#e4e4e7] shadow-sm border border-[#e4e4e7] dark:border-[#3f3f46]'
                        : 'text-[#6b7280] dark:text-[#a1a1aa] hover:text-[#1f2937] dark:hover:text-[#e4e4e7]'
                    }`}
                  >
                    DAG Workflow
                  </button>
                  <button
                    type="button"
                    onClick={() => setFlowforgeTab('telemetry')}
                    className={`text-xs font-mono uppercase px-2.5 sm:px-3 py-1.5 rounded transition-colors min-h-[32px] ${
                      flowforgeTab === 'telemetry'
                        ? 'bg-white dark:bg-[#18181b] text-[#1f2937] dark:text-[#e4e4e7] shadow-sm border border-[#e4e4e7] dark:border-[#3f3f46]'
                        : 'text-[#6b7280] dark:text-[#a1a1aa] hover:text-[#1f2937] dark:hover:text-[#e4e4e7]'
                    }`}
                  >
                    Worker Leases
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-4 sm:p-7 font-mono text-xs text-[#4b5563] dark:text-[#a1a1aa] min-h-[360px] sm:min-h-[400px] flex flex-col justify-between">
                {flowforgeTab === 'dag' ? (
                  <div className="space-y-4 sm:space-y-5">
                    {/* Visual Node Diagram */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                      {/* Node 1 */}
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] border border-emerald-500/40 p-3 sm:p-3.5 rounded">
                        <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 mb-1.5 font-semibold">
                          <span>STEP 01 &middot; DONE</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <div className="text-[#1f2937] dark:text-[#e4e4e7] text-[13px] font-semibold">Document Ingestion</div>
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] mt-1">PDF payload parsing &amp; chunk validation</div>
                      </div>

                      {/* Node 2 */}
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] border border-blue-500/40 p-3 sm:p-3.5 rounded">
                        <div className="flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 mb-1.5 font-semibold">
                          <span>STEP 02 &middot; ACTIVE</span>
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                        <div className="text-[#1f2937] dark:text-[#e4e4e7] text-[13px] font-semibold">LLM Extraction</div>
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] mt-1">Structured JSON via Pydantic schema</div>
                      </div>

                      {/* Node 3 */}
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] border border-amber-500/40 p-3 sm:p-3.5 rounded">
                        <div className="flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 mb-1.5 font-semibold">
                          <span>STEP 03 &middot; GATE</span>
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                        </div>
                        <div className="text-[#1f2937] dark:text-[#e4e4e7] text-[13px] font-semibold">Human Approval</div>
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] mt-1">Role-gated review &gt; $50 threshold</div>
                      </div>
                    </div>

                    {/* DAG Scheduler Details */}
                    <div className="bg-[#f4f4f5] dark:bg-[#18181b] border border-[#e4e4e7] dark:border-[#3f3f46] rounded p-3.5 sm:p-4 space-y-2 mt-2 sm:mt-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                        <span className="text-[#1f2937] dark:text-[#e4e4e7] font-semibold uppercase">
                          KAHN&apos;S ALGORITHM TOPOLOGICAL STATE
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                          Dispatch: 28ms &middot; In-Flight: 1
                        </span>
                      </div>
                      <div className="text-xs text-[#4b5563] dark:text-[#a1a1aa] font-mono space-y-1">
                        <div className="break-all sm:break-normal">&gt; in_degree: [Node_A: 0, Node_B: 1, Node_C: 2]</div>
                        <div className="break-all sm:break-normal">&gt; idempotency_key: sha256(&quot;wf_7721&quot;)</div>
                        <div>&gt; distributed_lease: worker-03 (healthy)</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-5">
                    {/* Responsive Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3 sm:p-3.5 rounded border border-[#e4e4e7] dark:border-[#3f3f46]">
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] uppercase">Task Dispatch</div>
                        <div className="text-lg sm:text-xl text-[#1f2937] dark:text-[#e4e4e7] font-light mt-0.5 sm:mt-1">&lt; 38ms</div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#71717a] mt-0.5">Upstash Redis Broker</div>
                      </div>
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3 sm:p-3.5 rounded border border-[#e4e4e7] dark:border-[#3f3f46]">
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] uppercase">State Persistence</div>
                        <div className="text-lg sm:text-xl text-[#1f2937] dark:text-[#e4e4e7] font-light mt-0.5 sm:mt-1">Durable</div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#71717a] mt-0.5">PostgreSQL 17 ACID</div>
                      </div>
                      <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3 sm:p-3.5 rounded border border-[#e4e4e7] dark:border-[#3f3f46]">
                        <div className="text-xs text-[#6b7280] dark:text-[#a1a1aa] uppercase">Pytest Suite</div>
                        <div className="text-lg sm:text-xl text-emerald-600 dark:text-emerald-400 font-light mt-0.5 sm:mt-1">62 / 62</div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#71717a] mt-0.5">100% Pass Rate</div>
                      </div>
                    </div>

                    <div className="bg-[#f4f4f5] dark:bg-[#18181b] p-3.5 sm:p-4 rounded border border-[#e4e4e7] dark:border-[#3f3f46] text-xs space-y-2">
                      <div className="text-[#1f2937] dark:text-[#e4e4e7] font-semibold mb-2">DISTRIBUTED WORKER HEARTBEAT LOG</div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>worker_pool: celery@worker-us-east-1</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">HEALTHY</span>
                      </div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>lease_recovery_scan: 0 expired</span>
                        <span className="text-[#1f2937] dark:text-[#e4e4e7]">CLEAN</span>
                      </div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>eval_suite_regression_check</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">0 REGRESSIONS</span>
                      </div>
                      <div className="text-[#4b5563] dark:text-[#a1a1aa] flex justify-between">
                        <span>Pydantic v2 Schema Enforcement</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">PASSED</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer status bar */}
                <div className="pt-3 sm:pt-4 border-t border-[#e4e4e7] dark:border-[#3f3f46] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#6b7280] dark:text-[#a1a1aa] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                    <span>Topological Engine Active</span>
                  </div>
                  <span className="text-[#6b7280] dark:text-[#71717a]">FlowForge Core v2.4</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
