'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  
  useGSAP(() => {

    const elements = document.querySelectorAll(".animate-element");
    
    gsap.from(elements, {
      opacity: 0, y: 30, duration: 1, stagger: 0.3, ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-section", start: "top 80%", toggleActions: "play none none reset",
      }
    })
  }, [])

  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center text-center pt-60 pb-5 hero-section'>
      <h1 className="text-2xl font-bold mb-4 animate-element">Hi, I'm <span className="text-amber-400">Ugo Emax</span></h1>
      <h2 className="text-xl mb-3 bg-amber-400 text-black p-2 rounded-md animate-element">Frontend Web Developer</h2>
      <Image src="/images/portfolio.png" alt='My Photo' width={350} height={300} className="rounded-full animate-element" />
      <p className="mt-3 max-w-3xl md:text-xl animate-element">I'm a frontend web developer passionate about building clean, responsive, and user-friendly web interfaces. I enjoy turning designs into functional websites using modern web technologies and I'm constantly improving my skills through hands-on projects.</p>

      <div className="mt-3 flex gap-5 animate-element">
      <Link href="#projects" className="mt-4 bg-amber-400 text-black p-3 rounded-md font-semibold hover:bg-amber-500 transition-all active:scale-95 active:translate-y-0.5 duration-200">View My Work</Link>
      <Link href="#contact" className="mt-4 bg-amber-400 text-black p-3 rounded-md font-semibold hover:bg-amber-500 transition-all active:scale-95 active:translate-y-0.5 duration-200">Contact Me</Link>
      </div>
    </div>
  )
}

export default Hero
