import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import { NextSeo } from 'next-seo';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NextSeo
        title="Roshan Yadav"
        defaultTitle="Roshan Yadav"
        titleTemplate="Roshan Yadav"
        description="Software Engineer with 2+ years of experience architecting scalable, cloud-native B2B SaaS platforms, distributed backend systems (Python, Django, FastAPI), AWS infrastructure, and enterprise GenAI architectures."
        canonical="https://roshanyadav.dev"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://roshanyadav.dev',
          title: 'Roshan Yadav',
          description:
            'Software Engineer architecting scalable cloud-native B2B SaaS platforms and enterprise GenAI architectures.',
          site_name: 'Roshan Yadav',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Roshan Yadav, Backend Engineer, AI Engineer, Python, Django, FastAPI, Celery, PostgreSQL, AWS, Docker, RAG, LangChain, Supabase, VakilDesk',
          },
          {
            name: 'author',
            content: 'Roshan Yadav',
          },
          {
            name: 'theme-color',
            content: '#18181b',
          },
        ]}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
