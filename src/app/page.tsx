// app/page.tsx
import About from '@/app/About/About';
import Hero from '@/app/Hero/Hero';
import Portfolio from '@/app/Portofolio/Portofolio';
import Skill from '@/app/Skill/Skill';
import Contact from '@/app/Contact/Contact';


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
