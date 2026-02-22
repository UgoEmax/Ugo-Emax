'use client';
import Image from 'next/image';
import Link from 'next/link'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ Heading, Paragraph, Tech, Images, Button, Button1 }) => {

    useGSAP(() => {
    
        const element1 = document.querySelectorAll(".proj-animate");
        
        gsap.from(element1, {
          opacity: 0, x: -30, duration: 0.5, stagger: 0.3, ease: "power2.out",
          scrollTrigger: {
            trigger: ".project-section", start: "top 70%", toggleActions: "play none none reset",
          }
        })
      }, [])

  return (
    <div className="project-section pb-30">

      <h2 className="text-xl font-semibold mb-2 pb-5 pt-20 text-white/50 proj-animate">{Heading}</h2>
      <p className="mb-4 pb-2 tracking-wide proj-animate">{Paragraph}</p>
      
      <div className="relative p-2 bg-white/10 rounded-3xl">
      <div className='proj-animate'>
      <Image className="rounded-3xl" src={Images} alt="Project Image" width={600} height={0} />

      <div className="flex gap-4 justify-between item-center text-center absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 mx-3 px-4">
      <Link href={Button} className="bg-white/60 text-black px-4 py-2 rounded-lg h-10 translate-y-30 hover:bg-amber-600 hover:text-white transition-all duration-300 ease-in-out" target="_blank">Live Demo</Link>

      <Link href={Button1} className="bg-white/60 text-black px-4 py-2 rounded-lg h-10 translate-y-30 hover:bg-amber-600 hover:text-white transition-all duration-300 ease-in-out" target="_blank">GitHub Repository</Link>
      </div>
      </div>

      <div className="flex gap-6 text-center justify-center item-center pt-2 proj-animate">
        {Tech.map((text, i) => (<p className="p-1.5 bg-black text-white/50 rounded-xl text-center text-[0.7rem]" key={i}>{text}</p>))}
      </div>
      </div>
    </div>
  )
}

export default Projects
