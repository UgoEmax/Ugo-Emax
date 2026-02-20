"use client";
import { useState } from "react";
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    const [ open, setOpen ] = useState(false);

    useGSAP(() => {
      gsap.from('#home', {
        opacity: 0, y: 30, duration: 1, ease: "power2.out",
      })

      gsap.from('.nav-element', {
        opacity: 0, x: 30, duration: 1, stagger: 0.3, ease: "power2.out", 
      })
    }, [])

  return (
    <div className='justify-between fixed p-4 z-50 w-full md:pl-15 h-[65px] md:h-[70px] text-amber-100 md:py-7'>

    <div className="relative z-2">
      <Link href='/' className="font-bold" id="home">UGO EMAX</Link>

      {/* MENU TOGGLE BUTTON */}
      <button className="text-4xl font-semibold float-right top-0 cursor-pointer md:hidden nav-element" onClick={() => setOpen(!open)}>
      {open ? <IoClose /> : <IoMenu  />}
      </button>
    </div>


    {/* MOBILE NAVIGATION */}
    <div className={`grid absolute gap-5 font-semibold bg-gray-900 text-amber-100 left-0 top-0 p-6 pt-20 w-full transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25 pointer-events-none'}`}>
      <Link href="#about" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>About Me</Link>
      <Link href="#skills" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Skills</Link>
      <Link href="#projects" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Projects</Link>
      <Link href="#growth" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Growth</Link>
      <Link href="#contact" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Contact Me</Link>
      </div>


       {/* Desktop Navigation  */}
      <div className='hidden font-semibold text-amber-100  md-justify-between md:float-right md:flex md:gap-15 md:-translate-y-7 relative z-3 pr-5'>
      <Link href="#about" className='hover:underline nav-element'>About Me</Link>
      <Link href="#skills" className='hover:underline nav-element'>Skills</Link>
      <Link href="#projects" className='hover:underline nav-element'>Projects</Link>
      <Link href="#growth" className='hover:underline nav-element'>Growth</Link>
      <Link href="#contact" className='hover:underline nav-element'>Contact Me</Link>
      </div>
    </div>
  )
}

export default Navbar
