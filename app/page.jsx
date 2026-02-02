import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";

const page = () => {
  return (
    <div className="px-4 bg-black/87 text-white box-border antialiased">
     <Hero />
     <About />
     <Skill />
    </div>
  )
}

export default page
