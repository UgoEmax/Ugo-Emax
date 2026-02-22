'use client';
import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

   useGSAP(() => {

    const elements = document.querySelectorAll(".about-element");
    
    gsap.from(elements, {
      opacity: 0, y: 50, duration: 1, stagger: 0.3, ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section", start: "top 80%", toggleActions: "play none none reset",
      }
    })
  }, [])

  return (
    <div className='flex flex-col justify-center items-center text-center pt-60 pb-20 about-section' id='about'>
      <h3 className="text-2xl font-bold mb-4 pb-5 text-amber-400 about-element">About Me</h3>
      <p className="max-w-2xl tracking-wide md:text-[1.1rem] md:tracking-wider text-left md:text-center about-element">I am a frontend web developer with hands-on experience building web projects using HTML, CSS, JavaScript, and Next.js. I started my journey through structured training, where I built practical projects that strengthened my understanding of responsive design, interactivity, and modern frontend workflows. I'm detail-oriented, eager to learn, and focused on writing clean, maintainable code. My goal is to grow as a developer while contributing to meaningful digital experiences.</p>

      <div className='about-element'>
      <Image src="/images/form-code.jpg" alt='Code Image' width={400} height={300} className="my-4 rounded-3xl pt-5" />
      </div>
    </div>
  )
}

export default About
