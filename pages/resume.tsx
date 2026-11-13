import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiMail, FiPhone, FiDownload, FiArrowLeft, FiExternalLink } from 'react-icons/fi';

const ResumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume | Roshan Yadav</title>
        <meta
          name="description"
          content="Online Resume of Roshan Yadav - Full Stack Engineer & AI Engineer specialized in Python, Django, FastAPI, PostgreSQL, AWS, and enterprise GenAI architectures."
        />
      </Head>

      <div className="mx-auto min-h-screen max-w-4xl px-6 py-10 font-sans text-slate-400 md:px-12 md:py-16">
        {/* Top Navigation Bar: Back to Portfolio & Download Button */}
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-300 hover:text-teal-300 transition-colors"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Roshan Yadav</span>
          </Link>

          <a
            href="/Roshan_Yadav_Resume.pdf"
            download="Roshan_Yadav_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-300 transition-all hover:bg-teal-500/20 hover:border-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <FiDownload className="h-4 w-4" />
            <span>Download PDF</span>
          </a>
        </header>

        {/* Resume Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Roshan Yadav
          </h1>
          <h2 className="mt-2 text-lg font-medium text-teal-300 sm:text-xl">
            Full Stack Engineer &amp; AI Engineer
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
            <span>Mumbai, India</span>
            <span className="text-slate-600">&bull;</span>
            <a
              href="tel:+919834905805"
              className="hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <FiPhone className="h-3.5 w-3.5 text-teal-300/80" />
              +91 9834905805
            </a>
            <span className="text-slate-600">&bull;</span>
            <a
              href="mailto:roshany.ir.ry@gmail.com"
              className="hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <FiMail className="h-3.5 w-3.5 text-teal-300/80" />
              roshany.ir.ry@gmail.com
            </a>
            <span className="text-slate-600">&bull;</span>
            <a
              href="https://linkedin.com/in/roshanyadav026"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <GrLinkedinOption className="h-3.5 w-3.5 text-teal-300/80" />
              linkedin.com/in/roshanyadav026
            </a>
            <span className="text-slate-600">&bull;</span>
            <a
              href="https://github.com/crazycodeop"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <VscGithubAlt className="h-3.5 w-3.5 text-teal-300/80" />
              github.com/crazycodeop
            </a>
          </div>
        </div>

        {/* 1. Professional Summary */}
        <section className="mb-10" aria-label="Professional Summary">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-200">
            Summary
          </h3>
          <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Python-focused Full Stack Software Engineer with 2+ years of experience building and
            scaling multi-tenant B2B SaaS applications using Python, Django, FastAPI, and React.
            Experienced in end-to-end REST API development, PostgreSQL and ORM optimization,
            asynchronous task processing with Celery and Redis, and cloud deployments on AWS using
            Docker and CI/CD. Strong background in frontend-to-backend integration, application
            security, and production GenAI / RAG workflows.
          </p>
        </section>

        {/* 2. Technical Skills */}
        <section className="mb-10" aria-label="Technical Skills">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
            Technical Skills
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Languages &amp; Core
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-normal">
                Python, JavaScript, SQL (PostgreSQL, MySQL), HTML5/CSS3
              </p>
            </div>

            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Backend &amp; Architecture
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-normal">
                Django, Django REST Framework, FastAPI, Celery, RESTful Microservices, System Design
              </p>
            </div>

            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Cloud &amp; DevOps
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-normal">
                AWS (EC2, S3, RDS, IAM), Docker, Linux, Jenkins CI/CD, Nginx, Serverless DBs
              </p>
            </div>

            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                AI &amp; Machine Learning
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-normal">
                Gemini API, LangChain, LangGraph, RAG, Vector Databases, Prompt Orchestration
              </p>
            </div>

            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Frontend &amp; Integration
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-normal">
                React, Third-Party API Integration (Payment Gateways, eSignature), OAuth2, JWT
              </p>
            </div>

            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Practices &amp; Performance
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-normal">
                High-Availability Scaling, Redis Caching, ORM Tuning, Automated &amp; Performance Testing
              </p>
            </div>
          </div>
        </section>

        {/* 3. Work Experience */}
        <section className="mb-10" aria-label="Work Experience">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
            Experience
          </h3>

          <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h4 className="text-base font-semibold text-slate-100 sm:text-lg">
                  Software Engineer &middot; VakilDesk Technologies Pvt. Ltd.
                </h4>
                <div className="text-xs text-slate-500 mt-0.5">Remote</div>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-teal-300 sm:mt-0">
                Oct 2024 &ndash; Oct 2026
              </div>
            </div>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 list-disc list-outside pl-4 marker:text-teal-300/80">
              <li>
                Architected and delivered 4 full-stack B2B SaaS platforms using Python, Django,
                Django REST Framework, and React, connecting responsive frontend interfaces to REST
                APIs across 10+ enterprise clients with 100% on-time delivery.
              </li>
              <li>
                Optimized PostgreSQL performance by refactoring complex Django ORM queries,
                eliminating N+1 bottlenecks, and adding Redis caching layers, reducing REST API
                latency and frontend load times by 40%.
              </li>
              <li>
                Integrated third-party services (DocuSign, eMudhra, GST, and WhiteBooks APIs) using
                Celery and Redis background workers with real-time React status updates, processing
                10,000+ monthly asynchronous transactions with zero data loss.
              </li>
              <li>
                Deployed and maintained full-stack applications on AWS (EC2, S3, RDS) using Docker,
                Nginx, and Jenkins CI/CD pipelines, reducing release deployment cycles by 35% while
                sustaining 99.9% SLA uptime.
              </li>
              <li>
                Reduced production cloud hosting expenses by 50% by diagnosing memory leaks and
                rightsizing AWS EC2 instances from 32 GiB to 8 GiB RAM without performance degradation.
              </li>
              <li>
                Developed real-time document collaboration workflows using React, Django, and WebDAV
                for live MS Word editing, automated version history, and PDF generation across 5,000+
                legal documents.
              </li>
              <li>
                Implemented multi-tenant application security across 10+ client environments using
                JWT, Google OAuth2, RBAC, CORS, and rate limiting to protect sensitive enterprise payloads.
              </li>
              <li>
                Established automated backend and API test suites using pytest, achieving 85%+ test
                coverage and reducing post-deployment production regressions by 45%.
              </li>
              <li>
                Engineered production GenAI RAG pipelines using Gemini API, LangChain, and vector
                embeddings for semantic retrieval, cutting automated legal drafting turnaround time by 60%.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Projects */}
        <section className="mb-10" aria-label="Projects">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
            Projects
          </h3>

          <div className="space-y-4">
            {/* Docvyn */}
            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                  <span>Docvyn &ndash; Document Intelligence Platform</span>
                  <a
                    href="https://github.com/crazycodeop/Docvyn"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-slate-400 hover:text-teal-300 transition-colors inline-flex items-center"
                    aria-label="Docvyn GitHub repository"
                  >
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                </h4>
              </div>
              <div className="mt-1 text-xs text-teal-300/90 font-medium">
                FastAPI &bull; React 18 &bull; PostgreSQL &bull; pgvector &bull; Celery &bull; Redis &bull; Gemini API
              </div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-300 list-disc list-outside pl-4 marker:text-teal-300/80">
                <li>
                  Developed a multi-tenant document intelligence platform using FastAPI, SQLAlchemy
                  2.0, and PostgreSQL with pgvector, supporting document ingestion, vector search,
                  and source-grounded question answering.
                </li>
                <li>
                  Implemented asynchronous document processing using Celery and Redis, integrating
                  Groq and Gemini APIs with RAG pipelines, prompt-injection protection, and
                  page-level source citations.
                </li>
                <li>
                  Built the React 18 frontend and implemented JWT-based authentication, tenant-level
                  data isolation, and automated backend and frontend testing.
                </li>
              </ul>
            </div>

            {/* FlowForge AI */}
            <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                  <span>FlowForge AI &ndash; Visual AI Workflow Orchestrator</span>
                  <a
                    href="https://github.com/crazycodeop/FlowForge-AI"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-slate-400 hover:text-teal-300 transition-colors inline-flex items-center"
                    aria-label="FlowForge AI GitHub repository"
                  >
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                </h4>
              </div>
              <div className="mt-1 text-xs text-teal-300/90 font-medium">
                FastAPI &bull; React Flow &bull; PostgreSQL &bull; Celery &bull; Redis &bull; Pydantic
              </div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-300 list-disc list-outside pl-4 marker:text-teal-300/80">
                <li>
                  Built a visual workflow orchestration platform using FastAPI, React Flow, and
                  PostgreSQL, enabling users to design and execute multi-step AI workflows.
                </li>
                <li>
                  Implemented DAG-based task scheduling using Kahn&apos;s algorithm, distributed
                  Celery workers, task retries, worker heartbeats, and recovery mechanisms for failed
                  executions.
                </li>
                <li>
                  Integrated LLM providers with structured output validation, Pydantic schema
                  repair, and human approval workflows, supported by automated Pytest coverage.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Education */}
        <section className="mb-12" aria-label="Education">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-200">
            Education
          </h3>

          <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h4 className="text-base font-semibold text-slate-100">
                  Thadomal Shahani Engineering College
                </h4>
                <div className="text-xs text-slate-500 mt-0.5">Mumbai, India</div>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-teal-300 sm:mt-0">
                June 2024
              </div>
            </div>
            <div className="mt-2 text-xs sm:text-sm text-slate-300">
              <span className="font-medium text-slate-200">
                B.E., Electronics &amp; Telecommunications Engineering
              </span>{' '}
              &ndash; CGPA: <span className="text-teal-300 font-semibold">8.82 / 10.00</span>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              <strong className="text-slate-300">Relevant Coursework:</strong> Data Structures,
              Analysis of Algorithms, Object-Oriented Programming, Database Management Systems (DBMS)
            </p>
          </div>
        </section>

        {/* Bottom Actions */}
        <footer className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-800/80 pt-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-300 hover:text-teal-300 transition-colors"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Full Portfolio</span>
          </Link>

          <a
            href="/Roshan_Yadav_Resume.pdf"
            download="Roshan_Yadav_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-300 transition-all hover:bg-teal-500/20 hover:border-teal-400"
          >
            <FiDownload className="h-4 w-4" />
            <span>Download PDF Resume</span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default ResumePage;
