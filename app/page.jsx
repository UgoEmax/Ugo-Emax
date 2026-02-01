import Hero from "./components/Hero";
import About from "./components/About";

const page = () => {
  return (
    <div className="px-4 bg-black/87 text-white box-border antialiased">
     <Hero />
     <About />
    </div>
  )
}

export default page
