import type { NextPage } from 'next';
import {
  Navbar,
  Hero,
  Experience,
  Projects,
  Stack,
  About,
  Contact,
  Footer,
  AmbientLight,
} from '../components';

const Home: NextPage = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#18181b] text-[#1f2937] dark:text-[#e4e4e7] min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-[#1f2937] dark:selection:text-[#ffffff] antialiased overflow-x-hidden w-full relative transition-colors duration-250">
      <AmbientLight />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
