import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Roshan Yadav"
        defaultTitle="Roshan Yadav"
        titleTemplate="%s"
        description="Roshan Yadav is a Full Stack Engineer & AI Engineer with 2+ years of experience architecting scalable cloud-native B2B SaaS platforms and enterprise GenAI architectures."
        canonical="https://roshan-yadav.is-a.dev"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://roshan-yadav.is-a.dev',
          title: 'Roshan Yadav',
          description:
            'Full Stack Engineer & AI Engineer with 2+ years architecting scalable cloud-native B2B SaaS platforms and enterprise GenAI architectures.',
          site_name: 'Roshan Yadav',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Roshan Yadav, Full Stack Engineer, AI Engineer, Python, Django, FastAPI, Celery, PostgreSQL, React, Next.js, AWS, Docker, RAG, Gemini API',
          },
          {
            name: 'author',
            content: 'Roshan Yadav',
          },
          {
            name: 'theme-color',
            content: '#0f172a',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
