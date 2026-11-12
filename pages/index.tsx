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
    <div className="bg-[#09090b] text-[#f4f4f5] min-h-screen selection:bg-neutral-800 selection:text-white antialiased overflow-x-hidden w-full relative">
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
