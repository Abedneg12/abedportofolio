// app/page.tsx
import About from '@/components/About';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portofolio';
import Skill from '@/components/Skill';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <>
      <Hero/>
      <About />
      <Skill/>
      <Portfolio />
      <Contact />
    </>
  );
}
