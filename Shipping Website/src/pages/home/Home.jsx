import AboutSection from "./AboutSection";
import ClientLogos from "./ClientLogos";
import HeroSlider from "./HeroSlider";
import HowItWorks from "./HowltWorks";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServiceSection";
import Testimonials from "./Testimonials";



export default function Home() {
  return (
    <>
    <HeroSlider></HeroSlider>
    <ClientLogos></ClientLogos>    
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    <HowItWorks></HowItWorks>
    <ProjectsSection></ProjectsSection>
    <Testimonials></Testimonials>

    </>
  );
}