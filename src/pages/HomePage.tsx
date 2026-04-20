import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import ProfessionalPath from "../components/ProfessionalPath";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProfessionalPath />
      <Testimonials />
      <Services />
    </>
  );
}

export default HomePage;