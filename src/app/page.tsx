import HeroPage from './hero/page';
import AboutPage from './about/page';
import SkillPage from './skill/page';
import PortofolioPage from './portofolio/page';
import ContactPage from './contact/page';
import Testimoni from './testimonial/page';



export default function Home() {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <SkillPage />
      <PortofolioPage />
      <Testimoni />
      <ContactPage />
    </div>
  );

}
