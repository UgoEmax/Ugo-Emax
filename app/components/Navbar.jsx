"use client";
import { useState } from "react";
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
    const [ open, setOpen ] = useState(false);

  return (
    <div className='justify-between fixed p-4 z-50 w-full md:py-5 md:pl-15 h-[65px] md:h-[70px] text-amber-100'>

    <div className="relative z-50">
      <Link href='/' className="font-bold">UGO EMAX</Link>

      {/* MENU TOGGLE BUTTON */}
      <button className="text-4xl font-semibold float-right top-0 cursor-pointer md:invisible" onClick={() => setOpen(!open)}>
      {open ? <IoClose /> : <IoMenu  />}
      </button>
      </div>


    <div className={`grid absolute gap-5 font-semibold bg-gray-900 text-amber-100 left-0 top-0 p-6 pt-20 w-full transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-25 pointer-events-none'}`}>
      <Link href="#about" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>About Me</Link>
      <Link href="#skills" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Skills</Link>
      <Link href="#projects" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Projects</Link>
      <Link href="#growth" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Growth</Link>
      <Link href="#contact" className='hover:underline transition-all duration-300 ease-in-out' onClick={() => setOpen(false)}>Contact Me</Link>
      </div>

       {/* Desktop Navigation  */}
      <div className='invisible font-semibold text-amber-100 cursor-pointer md:visible md-justify-between  md:float-right flex md:gap-18 md:-translate-y-12'>
      <Link href="#about" className='hover:underline'>About Me</Link>

      <Link href="#skills" className='hover:underline'>Skills</Link>
      <Link href="#projects" className='hover:underline'>Projects</Link>
      <Link href="#growth" className='hover:underline'>Growth</Link>
      <Link href="#contact" className='hover:underline'>Contact Me</Link>
      </div>
    </div>
  )
}

export default Navbar
