"use client";
import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Growth = () => {
  useGSAP(() => {

    const element1 = document.querySelectorAll(".growth-element");
    
    gsap.from(element1, {
      opacity: 0, x: -30, duration: 1, stagger: 0.3, ease: "power2.out",
      scrollTrigger: {
        trigger: ".growth-section", start: "top 80%", toggleActions: "play none none reset",
      }
    })
    
    gsap.from('.image-element', {
      opacity: 0, x: 30, duration: 1, stagger: 0.3, ease: "power2.out",
      scrollTrigger: {
        trigger: ".img", start: "top 80%", toggleActions: "play none none reset",
      }
    })
  }, [])

  return (
    <div className="pt-30 pb-10 flex flex-col items-center justify-center growth-section" id='growth'>
      <div className='md:flex md:flex-row md:gap-25'>
      <div className='md:max-w-xl md:translate-y-15'>
      <h2 className="text-2xl font-bold mb-4 text-amber-400 pb-10 md:text-center growth-element">Learning & Growth</h2>
      <p className='tracking-wide pb-5 md:text-[1.1rem] md:leading-relaxed md:tracking-wider growth-element'>As a growing frontend developer, I actively practice by building projects and learning modern tools and best practices. I'm continuously improving my JavaScript skills and deepening my knowledge of React and Next.js while exploring better UI design and performance optimization.</p>
      </div>

      <div className='flex justify-center img'>
      <Image src="/images/srt-class.jpg" alt='SkillRover class'  width={400} height={300} className="my-4  rounded-3xl pt-3 image-element" />
      </div>
      </div>
      
    </div>
  )
}

export default Growth
