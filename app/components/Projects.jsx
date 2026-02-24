'use client';
import Image from 'next/image';
import Link from 'next/link'

const Projects = ({ Heading, Paragraph, Tech, Images, Button, Button1 }) => {

  return (
    <div className="pb-30">
      <h2 className="text-xl font-semibold mb-2 pb-5 pt-20 text-white/50">{Heading}</h2>
      <p className="mb-4 pb-2 tracking-wide">{Paragraph}</p>
      
      <div className="md:relative p-2 bg-white/10 rounded-3xl">
      <Image className="rounded-3xl" src={Images} alt="Project Image" width={600} height={300} />

      <div className="flex gap-4 justify-between item-center text-center md:absolute inset-0 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300 mx-3 px-2">
      <Link href={Button} className="bg-white/60 text-black px-4 py-2 rounded-lg h-10 translate-y-25 md:translate-y-30 hover:bg-amber-600 hover:text-white transition-all duration-300 ease-in-out" target="_blank">Live Demo</Link>

      <Link href={Button1} className="bg-white/60 text-black px-4 py-2 rounded-lg h-10 translate-y-25 md:translate-y-30 hover:bg-amber-600 hover:text-white transition-all duration-300 ease-in-out" target="_blank">GitHub Repository</Link>
      </div>

      <div className="flex gap-6 text-center justify-center item-center md:pt-2">
        {Tech.map((text, i) => (<p className="p-1.5 bg-black text-white/50 rounded-xl text-center text-[0.6rem]" key={i}>{text}</p>))}
      </div>
      </div>
    </div>
  )
}

export default Projects
