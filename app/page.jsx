import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import ProjectProp from "./components/ProjectProp";

const page = () => {
  return (
    <div className="px-4 bg-black/87 text-white box-border antialiased">
     <Hero />
     <About />
     <Skill />
     <ProjectProp />
    </div>
  )
}

export default page
