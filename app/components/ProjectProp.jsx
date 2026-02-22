'use client';
import Projects from "./Projects"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectProp = () => {
  useGSAP(() => {
       
    gsap.from(".heading", {
      opacity: 0, x: -30, duration: 1, stagger: 0.3, ease: "power2.out",
      scrollTrigger: {
        trigger: ".heading-section", start: "top 80%", toggleActions: "play none none reset",
      }
    })
  }, [])

  return (
    <div className="pt-10 md:pt-50 heading-section" id="projects">
        <h3 className='text-2xl font-bold mb-4 text-amber-400 text-center heading'>Projects</h3>

    <div className="md:flex md:gap-15 pb-10">
      <div>
      <Projects 
     Heading="Frontend Practice Project"
     Paragraph="This project was built during my frontend training using HTML, CSS, and JavaScript. It focuses on creating a responsive layout and adding basic interactivity with JavaScript. Through this project, I improved my understanding of DOM manipulation, layout structure, and styling best practices."
     Tech={[
      "HTML", "CSS", "JavaScript"
     ]}
     Images="/images/aeris.jpg"
     Button="https://aerislandingpage.netlify.app"
     Button1="https://github.com/UgoEmax/aeris-studio.git"
     />
     </div>
     
     <div>
     <Projects 
     Heading="Next.js Practice Project"
     Paragraph="This project was built using Next.js to explore modern React-based development. It demonstrates component-based architecture, routing, and improved performance through Next.js features. This project helped me understand how modern frontend frameworks are used in real-world applications."
     Tech={[
      "Next.js", "JavaScript", "TailwindCSS", "framer-motion"
     ]}
     Images="/images/maximum-home.jpg"
     Button="https://maximumhomes.vercel.app/"
     Button1="https://github.com/UgoEmax/Maximum-homes.git"
     />
     </div>
     </div>
    </div>
  )
}

export default ProjectProp
