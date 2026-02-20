'use client';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  useGSAP(() => {

    const elements = document.querySelectorAll(".skill-element");
    
    gsap.from(elements, {
      opacity: 0, x: 30, duration: 1, stagger: 0.5, ease: "power2.out",
      scrollTrigger: {
        trigger: ".skill-section", start: "top 80%", toggleActions: "play none none reset",
      }
    })
  }, [])

  return (
    <div className='pt-20 pb-10 md:pt-40 skill-section' id="skills">
      <h3 className='text-2xl font-bold mb-4 pb-10 text-amber-400 md:text-center skill-element'>Skills & Technologies</h3>

      <div className="flex flex-wrap gap-10 text-6xl justify-center items-center text-center text-gray-300 md:text-8xl md:gap-15 md:pt-10">

      <div className="flex flex-col items-center skill-element">
        <FaHtml5 />
        <p className="text-xl text-center">HTML5</p>
      </div>

      <div className="flex flex-col items-center skill-element">
        <IoLogoCss3 />
        <p className="text-xl text-center">CSS3</p>
      </div>

      <div className="flex flex-col items-center skill-element">
        <RiJavascriptFill />
        <p className="text-xl text-center">JavaScript</p>
      </div>

      <div className="flex flex-col items-center skill-element">
        <FaGithub />
        <p className="text-xl text-center">GitHub</p>
      </div>

      <div className="flex flex-col items-center skill-element">
        <RiNextjsFill />
        <p className="text-xl text-center">Next.js</p>
      </div>

      <div className="flex flex-col items-center skill-element">
        <RiTailwindCssFill />
        <p className="text-xl text-center">Tailwind CSS</p>
      </div>

      <div className="flex flex-col items-center skill-element">
        <DiResponsive />
        <p className="text-xl text-center">Responsive Design</p>
      </div>

     </div>
    </div>
  )
}

export default Skill
