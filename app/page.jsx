import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import ProjectProp from "./components/ProjectProp";
import Growth from "./components/Growth";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div className="px-4 bg-black/87 text-white box-border antialiased md:px-15">
     <Hero />
     <About />
     <Skill />
     <ProjectProp />
      <Growth />
      <Contact />
    </div>
  )
}

export default page
