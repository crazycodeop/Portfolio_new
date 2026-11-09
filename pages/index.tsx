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
} from '../components';

const Home: NextPage = () => {
  return (
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen selection:bg-neutral-800 selection:text-white antialiased overflow-x-hidden w-full">
      <Navbar />
      <main>
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
