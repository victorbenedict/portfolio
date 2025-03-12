import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import TopBar from '@/components/sections/TopBar';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <TopBar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
