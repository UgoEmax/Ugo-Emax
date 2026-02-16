'use client';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center text-center pt-60 pb-5'>
      <h1 className="text-2xl font-bold mb-4">Hi, I'm <span className="text-amber-400">Ugo Emax</span></h1>
      <h2 className="text-xl mb-3 bg-amber-400 text-black p-2 rounded-md">Frontend Web Developer</h2>
      <Image src="/images/portfolio.png" alt='My Photo' width={350} height={300} className="rounded-full" />
      <p className="mt-3 max-w-3xl md:text-xl">I'm a frontend web developer passionate about building clean, responsive, and user-friendly web interfaces. I enjoy turning designs into functional websites using modern web technologies and I'm constantly improving my skills through hands-on projects.</p>

      <div className="mt-3 flex gap-5">
      <Link href="#projects" className="mt-4 bg-amber-400 text-black p-3 rounded-md font-semibold hover:bg-amber-500 transition-all active:scale-95 active:translate-y-0.5 duration-200">View My Work</Link>
      <Link href="#contact" className="mt-4 bg-amber-400 text-black p-3 rounded-md font-semibold hover:bg-amber-500 transition-all active:scale-95 active:translate-y-0.5 duration-200">Contact Me</Link>
      </div>
    </div>
  )
}

export default Hero
