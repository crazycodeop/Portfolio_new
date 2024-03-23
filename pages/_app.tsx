import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/sen/400.css';
import '@fontsource/sen/700.css';

import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Roshan Yadav"
        titleTemplate="Roshan Yadav"
        defaultTitle="Roshan Yadav"
        description="Hey! I'm Roshan, A Fullstack Developer and a Student!"
        // twitter={{
        //   handle: '@avinash_prj',
        //   site: '@avinash_prj',
        //   cardType: 'summary_large_image',
        // }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'Fullstack Developer, roshan, crazycodeop, Roshan Yadav, Web Developer, web development, web developer, tech enthusiast',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
